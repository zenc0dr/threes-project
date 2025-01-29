<template>
    <div class="threes-coder" ref="threesCoder" @mousemove="mousemove">
        <div v-for="(nodes, line_index) in program" class="threes-coder__line">
            <div class="threes-coder__line_info">{{ line_index }}</div>
            <div class="threes-coder__line_items">
                <ThreesNode
                    v-for="(node, node_index) in nodes"
                    :node="node"
                    :nid="`${line_index}.${node_index}`"
                    :hovering="node_hovering"
                    @mousedown="captureNodeStart(`${line_index}.${node_index}`)"
                    @mouseup="captureNodeEnd"
                    @mouseleave="captureNodeEnd"
                />
                <div class="threes-coder__add_node">
                    <div @click="openCreateNodeModal(line_index)" class="threes-coder__add_node__btn">
                        +
                    </div>
                </div>
            </div>
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
            <SelectNode @fetch="makeNode"/>
        </template>
    </ThreesModal>
</template>
<script>
import ThreesModal from "../components/ThreesModal.vue";
import ControlPanel from "../components/ux/forms/ControlPanel.vue";
import SelectNode from "../components/SelectNode.vue";
import ThreesNode from "../components/ThreesNode.vue";
import throttle from 'lodash/throttle'; // Ограничитель сканирований
export default {
    name: "ThreesProgram",
    props: ['backend', 'sid'],
    components: {
        ThreesModal,
        ControlPanel,
        SelectNode,
        ThreesNode
    },
    data() {
        return {
            /* Контроль курсора и мыши */
            mouse_x: 0,
            mouse_y: 0,
            coder_offset_x: 0, // Смещение по x и y которое будет учитано при перетаскивании
            coder_offset_y: 0,

            /* Управление нодами */
            new_node: null, // (object) Создание нового нода
            active_line: null, // (int) Линия которая активировалась нажатием на "Создать нод"
            debug_panel: false, // (bool) Панель отладки

            /* Перетаскивание нод */
            push_timer: null, // Таймер задержки нажатия
            push_interval: 200, // Время задержки до активации
            node_hovering_nid: null, // nid перемещаемого нода
            node_hovering_active: false,
            node_hovering: null, // Объект для передачи ноду

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
    watch: {
        program: {
            handler(program) {
                const last_line = program[program.length - 1]
                if (last_line.length) {
                    program.push([])
                }
            },
            deep: true
        }
    },
    methods: {
        /* Фиксировать движение мыши */
        mousemove: throttle(function (event) {
            ths.data.mouse.x = event.pageX - this.coder_offset_x // Добавляем смещение
            ths.data.mouse.y = event.pageY - this.coder_offset_y
            this.moveNodeProcess()
        }, 30),
        /* Загрузить программу */
        loadProgram() {
            ths.api({
                api: 'Sprites.Program:load',
                data: {
                    sid: this.sid,
                },
                then: response => {
                    this.program = this.handleProgram(
                        response.program
                    )
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
        saveProgram() {
            ths.api({
                api: 'Sprites.Program:save',
                data: {
                    sid: this.sid,
                    program: this.program
                }
            })
        },
        /* Открыть окно создания нода */
        openCreateNodeModal(line) {
            this.new_node = true
            this.active_line = line
            console.log('line', line)
        },
        /* Закрыть окно создания нода */
        closeCreateNodeModal() {
            this.new_node = false
        },
        /* Создать нод из объекта */
        makeNode(node) {
            this.program[this.active_line].push(node)
            this.saveProgram()
        },
        /* Фиксировать нажатие мыши с последующим удержанием */
        captureNodeStart(nid) {
            if (!this.node_hovering_active) {
                this.node_hovering_nid = nid
                if (!this.push_timer) {
                    this.push_timer = setInterval(this.moveNodeStart, this.push_interval)
                }
            } else {
                this.insertNodeAfterNode(this.node_hovering, nid)
            }
        },
        /* Остановить таймер захвата нода */
        captureTimerStop() {
            if (this.push_timer) {
                clearInterval(this.push_timer)
                this.push_timer = null
            }
        },
        /* Завершение захвата нода, отпускание нода */
        captureNodeEnd() {
            this.captureTimerStop()
        },
        /* Фиксируем смещение курсора */
        fixMouseOffset() {
            const rect = this.$refs.threesCoder.getBoundingClientRect()
            this.coder_offset_x = rect.left + window.scrollX
            this.coder_offset_y = rect.top + window.scrollY
        },
        /* Начало процесса перемещения нода */
        moveNodeStart() {
            this.fixMouseOffset()
            this.captureTimerStop()
            this.node_hovering_active = true
        },
        /* Процесс перемещения нода */
        moveNodeProcess() {
            if (this.node_hovering_active) {
                this.node_hovering = this.node_hovering_nid
            }
        },
        /* Очистить данные после перемещения нода */
        clearMoveData() {
            this.node_hovering_active = false
            this.node_hovering_nid = null
            this.node_hovering = null
        },
        /* Втыкает нод после нода */
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
                    this.clearMoveData()
                    this.loadProgram()
                }
            })
        }
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
    &__line_info {
        width: 27px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        align-items: center;
        background: #efefef;
        padding: 0 5px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        color: #505e6f;
        margin-right: 5px;
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
