<template>
    <NodesMethods
        :nid="nid"
        :nids="selected_nodes"
        :info="info"
        :lines="nodes_lines_count"
        @update="getNodes"
        @selectAllNodes="selectAllNodes"
        @addNewNode="createNode"
    />
    <div class="frame" @click="clearSelection($event)">
        <draggable
            v-for="(line, line_index) in nodes"
            :key="line_index"
            v-model="nodes[line_index]"
            tag="div"
            class="frame__line"
            :class="{selected: lineSelected(line_index)}"
            group="nodes"
            item-key="nid"
            :multi-drag="true"
            :selected-items="selected_nodes"
            @end="saveProgram"
            @click="selectLine(line_index)"
        >
            <template #item="{element:node}">
                <Node
                    class="frame__node"
                    :class="{'selected':isNodeSelected(node)}"
                    :style="getNodeStyle(node)"
                    :node="node"
                    @click="handleNodeClick(node, $event)"
                    @contextmenu.prevent="handleNodeRightClick(node, $event)"
                />
            </template>
        </draggable>
        <div @click="addLine" class="frame__add-line" title="Добавить новую линию">+</div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import NodesMethods from "../components/NodesMethods.vue";
import Node from "../components/Node.vue";

export default {
    name: 'Frame',
    components: {
        draggable,
        NodesMethods,
        Node,
    },
    props: ['backend', 'nid'],
    data() {
        return {
            nodes: [], // DSL программа
            selected_line_index: 0,
            selected_nodes: [], // Массив nid выбранных нодов
            node_in_panel: null // Сюда вставить нод чтобы открыть панель
        };
    },
    mounted() {
        this.getNodes();
    },
    watch: {
        selected_nodes() {
            ths.data.nids = this.selected_nodes
        }
    },
    computed: {
        info() {
            return 'Выделено: ' + this.selected_nodes.length
        },
        nodes_lines_count() {
            return this.nodes?.length ?? 0
        }
    },
    methods: {
        // Открыть панель нода
        openNodePanel(node) {
            this.node_in_panel = node
        },

        // Выделение линии
        lineSelected(line_index) {
            return this.selected_line_index === line_index
        },

        // Закрыть панель нода
        closeNodePanel() {
            this.node_in_panel = null
        },

        // Очистить множественное выделение
        clearSelection(event) {
            if (event.target.matches('.frame, .frame__line')) {
                this.selected_nodes = [];
            }
        },

        // Выбрать все ноды
        selectAllNodes() {
            let all_nodes = []
            this.nodes.forEach(line => {
                line.forEach(node => {
                    all_nodes.push(node.nid)
                })
            })
            this.selected_nodes = all_nodes
        },

        // Оформить стиль нода в зависимости от его слоя css
        getNodeStyle(node) {
            /*
            let style = {
                padding: '5px 7px',
                background: '#6eb39d',
                borderRadius: '3px',
                minWidth: '50px'
            }
            for (let i in node.layers) {
                let layer = node.layers[i]
                if (layer.aspect === 'threes.units.ui@css') {
                    if (layer.exe) {
                        style = layer.exe
                    }
                    break
                }
            }
            return style
            */
        },

        // Если нод выделен
        isNodeSelected(node) {
            return this.selected_nodes.includes(node.nid);
        },

        // Нажатие левой кнопкой мыши на ноде
        handleNodeClick(node, event) {
            if (event.detail === 2) return; // Пропускаем двойной клик

            const nid = node.nid;
            if (event.ctrlKey) {
                // Множественный выбор с Ctrl
                const index = this.selected_nodes.indexOf(nid);
                if (index === -1) {
                    this.selected_nodes.push(nid) // Добавляем, если не выбран
                } else {
                    this.selected_nodes.splice(index, 1); // Убираем, если уже выбран
                }
            } else {
                // Одиночный выбор без Ctrl
                if (this.selected_nodes.length === 1 && this.selected_nodes[0] === nid) {
                    this.selected_nodes = [] // Снимаем выбор, если кликнули на уже выбранный
                } else {
                    this.selected_nodes = [nid] // Выбираем только этот нод
                }
            }
        },

        // Нажатие правой кнопкой мыши на ноде
        handleNodeRightClick(node, event) {
            if (!this.selected_nodes.length) {
                this.openNodePanel(node)
            }
        },

        // Создать новый нод
        createNode() {
            ths.api({
                api: 'nodes.node:create',
                data: {
                    nid: this.nid,
                    line_index: this.selected_line_index
                },
                then: () => {
                    this.getNodes()
                },
            });
        },

        // При обновлении нода
        onNodeUpdated(node) {
            if (node) {
                this.node_in_panel = node
            }
            this.getNodes()
        },

        selectLine(line_index) {
            this.selected_line_index = line_index
        },

        // Добавить программную линию
        addLine() {
            ths.api({
                api: 'nodes.node:add-line',
                data: {
                    nid: this.nid
                },
                then: response => {
                    this.getNodes()
                },
            });
        },

        // Получить ноды
        getNodes() {
            ths.api({
                api: 'nodes.node:nodes',
                data: {
                    nid: this.nid
                },
                then: response => {
                    this.nodes = response.nodes;
                },
            });
        },

        // Сохранить программу
        saveProgram() {
            this.selected_nodes = []
            ths.api({
                api: 'frames.Frame:saveProgram',
                data: {
                    nid: this.nid,
                    nodes: this.nodes
                },
                then: () => {
                    this.getNodes();
                },
            });
        },
    },
};
</script>

<style lang="scss">
.frame {
    border: 1px solid #ddd;
    margin-bottom: 15px;

    .node-test {
        background: #4795b1;
    }

    &__line {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        min-height: 40px;
        margin-bottom: 4px;
        transition: 200ms;

        &.selected {
            box-shadow: -3px 0 0 0 #8500ff;
        }
    }

    &__node {
        cursor: move;

        &.selected {
            box-shadow: inset 0 0 0 2px #007bff;
        }
    }

    &__add-line {
        margin: 3px;
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
}
</style>
