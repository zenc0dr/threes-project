<template>
    <SpriteVersion ref="spriteVersionRef" :sid="sid" />
    <div
        class="threes-coder"
        ref="threesCoder"
        @mousemove="mousemove"
        @mouseup.left="mouseup"
        @mousedown.left="mousedown"
    >
        <div
            @mouseup="dropNodeToLine(line_index)"
            @mousedown="dropNodeToLine(line_index)"
            v-for="(nodes, line_index) in program"
            class="threes-coder__line"
        >
            <ThreesLineControl
                @contextmenu.prevent="openLinePopupMenu($event, line_index)"
                :line_index="line_index"
            />
            <div class="threes-coder__line_items">
                <ThreesNode
                    v-for="(node, node_index) in nodes"
                    :node="node"
                    :nid="getNid(line_index, node_index)"
                    :hovering="node_hovering"
                    @mousedown.left="captureNodeStart($event, node, getNid(line_index, node_index))"
                    @mouseup="captureNodeEnd(getNid(line_index, node_index))"
                    @contextmenu.prevent="openNodeMenu($event, node, getNid(line_index, node_index))"
                />
                <div class="threes-coder__add_node">
                    <div @click="openCreateNodeModal(line_index)" class="threes-coder__add_node__btn">
                        +
                    </div>
                </div>
            </div>
        </div>
        <div @click="addProgramLine" class="threes-coder__add-line">
            +
        </div>
        <div class="threes-debug">
            <div @click="debug_panel = !debug_panel" class="threes-debug__head">
                Отладочная панель <i :class="`oc-icon-caret-${ debug_panel ? 'up' : 'down' }`"></i>
            </div>
            <div v-if="debug_panel" class="threes-debug__body">
                <pre>{{ program }}</pre>
            </div>
        </div>
    </div>
    <ThreesModal :show="new_node" max-width="1000px" @close="closeCreateNodeModal">
        <template #heading>
            Выбор нода
        </template>
        <template #default>
            <SelectUnit @fetch="addNodeToProgram" />
        </template>
    </ThreesModal>
    <NodePopup v-if="node_popup" :x="node_popup_x" :y="node_popup_y" @select="execNodeMenu">
        <template #default="{ handleClick }">
            <div data-action="copy" class="btn btn-primary" @click="handleClick">Дублировать нод</div>
            <div data-action="cb_save" class="btn btn-primary" @click="handleClick">Копировать нод</div>
            <div data-action="cb_load" class="btn btn-primary" @click="handleClick">Вставить нод</div>
            <div data-action="delete" class="btn btn-primary" @click="handleClick">Удалить нод</div>
            <div data-action="settings" class="btn btn-primary" @click="handleClick">Настройки нод</div>
        </template>
    </NodePopup>
    <NodePopup v-if="line_popup" :x="line_popup_x" :y="line_popup_y" @select="execLineMenu">
        <template #default="{ handleClick }">
            <div data-action="copy" class="btn btn-primary" @click="handleClick">Дублировать линию</div>
            <div data-action="cb_save" class="btn btn-primary" @click="handleClick">Копировать линию</div>
            <div data-action="cb_load" class="btn btn-primary" @click="handleClick">Вставить линию</div>
            <div data-action="delete" class="btn btn-primary" @click="handleClick">Удалить линию</div>
            <div data-action="settings" class="btn btn-primary" @click="handleClick">Настройки линии</div>
        </template>
    </NodePopup>
</template>
<script>
import ThreesModal from "../components/ThreesModal.vue";
import ControlPanel from "../components/ux/forms/ControlPanel.vue";
import SelectUnit from "../components/SelectUnit.vue";
import ThreesNode from "../components/ThreesNode.vue";
import NodePopup from "../components/ux/forms/NodePopup.vue";
import ThreesLineControl from "../components/ux/forms/ThreesLineControl.vue";
import throttle from 'lodash/throttle'; // Ограничитель сканирований
import SpriteVersion from "../components/SpriteVersion.vue";

export default {
    name: "ThreesProgram",
    props: ['backend', 'sid'],
    components: {
        ThreesModal,
        ControlPanel,
        SelectUnit,
        ThreesNode,
        ThreesLineControl,
        NodePopup,
        SpriteVersion
    },
    data() {
        return {
            /* Управление курсором */
            coder_offset_x: 0,
            coder_offset_y: 0,
            mouse_down: false,

            /* Управление нодами */
            new_node: null, // (object) Создание нового нода
            active_line: null, // (int) Линия которая активировалась нажатием на "Создать нод"
            debug_panel: false, // (bool) Панель отладки

            /* Перетаскивание нод */
            node_hovering_start_position: null, // [x, y]
            node_hovering_target: null,
            node_hovering_nid: null, // nid перемещаемого нода
            node_hovering: null, // nid для передачи ноду

            /* Всплывающее меню нода*/
            node_popup: false,
            node_popup_x: 0,
            node_popup_y: 0,
            node_popup_nid: null,
            node_selected: null,

            /* Всплывающее меню линии */
            line_popup: false,
            line_popup_x: 0,
            line_popup_y: 0,
            line_popup_index: null,

            /* Программа спрайта */
            program: [
                [],
                [],
                [],
                [],
                [],
            ]
        }
    },
    mounted() {
        this.loadProgram()
    },
    methods: {
        //region M1 - Контроль мыши и перемещений
        /* Фиксировать движение мыши */
        mousemove: throttle(function (event) {
            ths.data.mouse.x = event.pageX - this.coder_offset_x // Добавляем смещение
            ths.data.mouse.y = event.pageY - this.coder_offset_y
            this.moveNodeProcess()
        }, 30),

        /* Нажали мышь */
        mousedown() {
            console.log('Нажал мышку')
            this.mouse_down = true
        },

        /* Отпустили мышь */
        mouseup() {
            console.log('Отпустил мышку')
            this.mouse_up = true
        },

        /* Фиксируем смещение курсора */
        fixMouseOffset() {
            const rect = this.$refs.threesCoder.getBoundingClientRect()
            this.coder_offset_x = rect.left + window.scrollX
            this.coder_offset_y = rect.top + window.scrollY
        },

        /* Фиксировать начало нажатия ЛК-мыши на ноде для меню */
        captureNodeStart(event, node, nid) {
            this.node_selected = node
            // зафиксировать начало движения курсора, зафиксировать стартовые координаты
            if (this.node_hovering_start_position === null && this.node_hovering === null) {
                this.node_hovering_nid = nid
                this.node_hovering_start_position = [
                    ths.data.mouse.x,
                    ths.data.mouse.y,
                ]
            }
            this.dropNodeToNode(nid)
        },

        captureNodeEnd(nid) {
            this.dropNodeToNode(nid)
        },

        /* Процесс перемещения нода */
        moveNodeProcess() {
            if (this.node_hovering_start_position !== null) {
                console.log('Фиксирую перемещение после фиксации стартовой позиции')
                const offset = Math.max(
                    Math.abs(ths.data.mouse.x - this.node_hovering_start_position[0]),
                    Math.abs(ths.data.mouse.y - this.node_hovering_start_position[1])
                )
                if (offset > 5) {
                    // ЛКМ ещё нажата
                    if (this.mouse_down) {
                        console.log('Кнопка ещё нажата, начинаю движение')
                        this.fixMouseOffset()
                        this.node_hovering_start_position = null
                        this.node_hovering = this.node_hovering_nid // Это заставляет нод двигаться
                    // ЛКМ уже отпущена
                    } else {
                        this.clearNodeMoveData()
                    }
                }
            }
        },

        /* Бросить нод на нод */
        dropNodeToNode(nid) {
            if (this.node_hovering) {
                this.insertNodeAfterNode(this.node_hovering, nid)
                this.clearNodeMoveData()
            }
        },

        /* Бросить нод на линию */
        dropNodeToLine(line_index) {
            if (this.node_hovering) {
                this.insertNodeToLine(
                    this.node_hovering_nid,
                    line_index
                )
            }
        },

        /* Очистить данные о перемещениях */
        clearNodeMoveData() {
            console.log('Очищаю данные о перемещении')
            this.node_hovering_start_position = null
            this.node_hovering = null
        },
        //endregion

        //region P1 - Программа
        /* Загрузить программу */
        loadProgram() {
            ths.api({
                api: 'Sprites.Program:load',
                data: {
                    sid: this.sid,
                },
                then: response => {
                    if (response.program?.length > 0) {
                        this.program = this.handleProgram(
                            response.program
                        )
                        this.$refs.spriteVersionRef.getVersion()
                        this.$forceUpdate()
                    }
                }
            })
        },

        /* Обработать программу */
        handleProgram(program) {
            program = this.generatePinTable(program)
            return program
        },

        /* Генерировать таблицу пинов для программы */
        generatePinTable(program) {
            let io_pins = []
            for (let line_index in program) {
                let line = program[line_index]
                for (let node_index in line) {
                    let node = line[node_index]
                    let input_index = 0
                    let output_index = 0
                    for (let pin_i in node.io) {
                        let pin = node.io[pin_i]
                        let type = pin.io_type
                        let direction = pin.io_direction === 'input' ? 0 : 1
                        let pin_index = 0
                        if (direction) {
                            pin_index = output_index
                            output_index++
                        } else {
                            pin_index = input_index
                            input_index++
                        }
                        io_pins.push(
                            [
                                line_index,
                                node_index,
                                direction,
                                pin_index,
                                type
                            ].join('.')
                        )
                    }
                }
            }
            ths.data.sprite_pins = io_pins
            return program
        },

        /* Сохранить программу */
        saveProgram(fn) {
            ths.api({
                api: 'Sprites.Program:save',
                data: {
                    sid: this.sid,
                    program: this.program
                },
                then: response => {
                    if (fn) {
                        fn()
                    }
                }
            })
        },

        /* Добавить строку в программу */
        addProgramLine() {
            this.program.push({})
            this.saveProgram(then => {
                this.loadProgram()
            })
        },
        //endregion

        //region N1 - Управление нодом
        /* Получить идентификатор нода по индексу строки и индексу самого нода*/
        getNid(line_index, node_index) {
            return line_index + '.' + node_index;
        },

        /* Добавить нод в программу */
        addNodeToProgram(node) {
            this.program[this.active_line].push(node)
            this.saveProgram(fn => {
                this.loadProgram()
            })
        },

        /* Вставляет нод после нода */
        insertNodeAfterNode(nid, after_nid) {
            ths.api({
                api: 'Sprites.Program:move',
                data: {
                    sid: this.sid,
                    nid,
                    after_nid
                },
                then: response => {
                    /* Обнуление */
                    this.clearNodeMoveData()
                    this.loadProgram()
                }
            })
        },

        /* Добавить нод на линию */
        insertNodeToLine(nid, line_index) {
            ths.api({
                api: 'Sprites.Program:move',
                data: {
                    sid: this.sid,
                    nid,
                    after_nid: line_index, // Вместо after_nid вида `0.0` посылается только индекс линии
                },
                then: response => {
                    this.clearNodeMoveData()
                    this.loadProgram()
                }
            })
        },

        /* Открыть popup-меню нода */
        openNodeMenu(event, node, nid) {
            this.node_selected = node
            const rect = this.$refs.threesCoder.getBoundingClientRect()
            this.node_popup_x = event.clientX - rect.left
            this.node_popup_y = event.clientY - rect.top
            this.node_popup_nid = nid
            this.node_popup = true
        },

        /* Нажали на пункт popup-меню нода  */
        execNodeMenu(action) {
            let nid = this.node_popup_nid
            this.node_popup_nid = false
            this.node_popup = false
            if (action === 'copy') {
                this.copyNodeAction(nid)
            } else if (action === 'delete') {
                this.deleteNodeAction(nid);
            } else if (action === 'settings') {
                this.openSettingsPage();
            }
        },

        /* Копировать нод */
        copyNodeAction(nid) {
            ths.api({
                api: 'Sprites.Program:copy',
                data: {
                    sid: this.sid,
                    nid
                },
                then: response => {
                    this.loadProgram()
                }
            })
        },

        /* Удалить нод */
        deleteNodeAction(nid) {
            ths.api({
                api: 'Sprites.Program:delete',
                data: {
                    sid:this.sid,
                    nid
                },
                then: response => {
                    this.loadProgram()
                }
            });
        },

        /* Открыть страницу с натстройками */
        openSettingsPage() {
            let tid = this.node_selected.tid
            let uuid = this.node_selected.node
            const url = `/${this.backend}/zen/threes/unitcontroller/update/${tid}?sid=${this.sid}&node=${uuid}`
            window.open(url, '_blank')
        },
        //endregion

        //region M2 - Механизм создания нода
        /* Открыть окно создания нода */
        openCreateNodeModal(line) {
            this.new_node = true
            this.active_line = line
        },

        /* Закрыть окно создания нода */
        closeCreateNodeModal() {
            this.new_node = false
        },
        //endregion

        //region L1 - Управление линией программы
        /* Открыть меню линии */
        openLinePopupMenu(event, line_index) {
            const rect = this.$refs.threesCoder.getBoundingClientRect()
            this.line_popup_x = event.clientX - rect.left
            this.line_popup_y = event.clientY - rect.top
            this.line_popup = true
            this.line_index = line_index

            console.log('Открыть линию ' + line_index)
        },
        /* Открыть меню линии */
        execLineMenu(action) {
            const line_index = this.line_index
            this.line_index = false
            this.line_popup = false
            ths.api({
                api: 'Sprites.Program:lineActions',
                data: {
                    sid:this.sid,
                    action,
                    line_index
                },
                then: response => {
                    this.loadProgram()
                }
            })
        },
        //endregion
    }
}
</script>

<style lang="scss">
.threes-coder {
    &__line {
        display: flex;
        flex-direction: row;
        margin: 5px 0;
        min-height: 30px;
    }

    &__add-line {
        padding: 7px;
        border-radius: 4px;
        background: #f5f5f5;
        color: #797979;
        text-align: center;
        font-weight: bold;
        transition: 200ms;
        cursor: pointer;

        &:hover {
            background: #efefef;
            color: #797979;
        }
    }

    &__line_items {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        width: 100%;
        overflow-x: auto;
        //padding-bottom: 5px;

        &::-webkit-scrollbar {
            height:8px;
        }
        &::-webkit-scrollbar-thumb {
            border-width:1px 1px 1px 2px;
            background-color: #fac342;
        }
        &::-webkit-scrollbar-thumb:hover {
            border-width: 1px 1px 1px 2px;
            background-color: #fac342;
        }
        &::-webkit-scrollbar-track {
            border-width:0;
            background-color: #4a4a4a;
            margin: 4px;
        }
    }

    &__add_node {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        min-width: 0;
        width: 100%;
        user-select: none;

        &__btn {
            display: flex;
            width: 40px;
            background: #a4ffd5;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            cursor: pointer;
            opacity: 0;
            transition: 200ms;
            &:hover {
                background-color: #3dffa9;
            }
        }

        &:hover &__btn {
            opacity: 1;
        }
    }

    .threes-debug {
        background: #ccffae;
        color: #4f7c35;
        border-radius: 4px;
        cursor: pointer;
        transition: 200ms;
        margin-top: 5px;

        &:hover {
            background: #b2e48f;
        }

        &__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px 9px;
            border-radius: 4px;
        }
        &__body {
            padding: 10px;
            background: #455b35;
            color: #fff;
            border-radius: 0 0 4px 4px;
        }
    }
}
</style>
