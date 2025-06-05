<template>
    <NodesMethods
        :nid="nid"
        :nids="selected_nodes"
        :info="info"
        :lines="nodes_lines_count"
        :selected_line_index="selected_line_index"
        @update="getNodes"
        @selectAllNodes="selectAllNodes"
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
            @end="setNodes"
            @click="selectLine(line_index)"
        >
            <template #item="{ element: node, index: node_index }">
                <Node
                    class="frame__node"
                    :class="{'selected': isNodeSelected(node)}"
                    :style="getNodeStyle(node)"
                    :node="node"
                    @mousedown="onNodeMouseDown(node, $event, line_index, node_index)"
                    @click="handleNodeClick(node, $event, line_index, node_index)"
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
            nodes: [],             // DSL программа (массив строк, каждая строка – массив нодов)
            selected_line_index: 0,
            selected_nodes: [],    // Массив nid выбранных нодов
            node_in_panel: null    // Для открытия панели выбранного нода
        };
    },
    mounted() {
        this.getNodes();
    },
    watch: {
        selected_nodes() {
            // Обновляем глобальные данные для других компонентов
            ths.data.nids = this.selected_nodes;
        }
    },
    computed: {
        info() {
            return 'Выделено: ' + this.selected_nodes.length;
        },
        nodes_lines_count() {
            return this.nodes?.length ?? 0;
        }
    },
    methods: {
        // Открыть панель редактирования нода
        openNodePanel(node) {
            this.node_in_panel = node;
        },

        // Проверка выделенной строки
        lineSelected(line_index) {
            return this.selected_line_index === line_index;
        },

        // Закрыть панель нода
        closeNodePanel() {
            this.node_in_panel = null;
        },

        // Очистить выделение нодов, если клик произошёл по фону или строке
        clearSelection(event) {
            if (event.target.matches('.frame, .frame__line')) {
                this.selected_nodes = [];
            }
        },

        // Выбрать все ноды во всех строках
        selectAllNodes() {
            let all_nodes = [];
            this.nodes.forEach(line => {
                line.forEach(node => {
                    all_nodes.push(node.nid);
                });
            });
            this.selected_nodes = all_nodes;
        },

        // Применить стили для нода (пример реализации)
        getNodeStyle(node) {
            // Здесь можно анализировать слои (node.layers) и возвращать соответствующий стиль
            return {};
        },

        // Проверка, выделен ли нод
        isNodeSelected(node) {
            return this.selected_nodes.includes(node.nid);
        },

        // Обработка события mousedown:
        // Если нажата левая кнопка без Ctrl, выделяем группу нодов от нажатого до конца строки
        onNodeMouseDown(node, event, lineIndex, nodeIndex) {
            if (event.button !== 0) return; // Только левая кнопка
            if (!event.ctrlKey) {
                this.selectNodesFrom(lineIndex, nodeIndex);
            }
        },

        // Обработка события клика:
        // Если зажат Ctrl, то переключаем выделение отдельного нода
        handleNodeClick(node, event, lineIndex, nodeIndex) {
            if (event.detail === 2) return; // Пропускаем двойной клик
            if (event.ctrlKey) {
                const nid = node.nid;
                const index = this.selected_nodes.indexOf(nid);
                if (index === -1) {
                    this.selected_nodes.push(nid);
                } else {
                    this.selected_nodes.splice(index, 1);
                }
            }
        },

        // Обработка правого клика: открывает панель нода, если ещё не выделен ни один нод
        handleNodeRightClick(node, event) {
            if (!this.selected_nodes.length) {
                this.openNodePanel(node);
            }
        },

        // Выделяет ноды в строке, начиная с указанного индекса (все ноды справа от выбранного)
        selectNodesFrom(lineIndex, nodeIndex) {
            const line = this.nodes[lineIndex] || [];
            const nodesToSelect = line.slice(nodeIndex).map(node => node.nid);
            this.selected_nodes = nodesToSelect;
        },

        // Выбор строки для акцентирования (например, подсветка всего ряда)
        selectLine(line_index) {
            this.selected_line_index = line_index;
        },

        // Добавить новую линию нодов
        addLine() {
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.node:add-line',
                    data: {
                        nid: this.nid
                    }
                }),
                then: () => {
                    this.getNodes();
                }
            });
        },

        // Запрос нодов с сервера
        getNodes() {
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.node:get-nodes',
                    data: {
                        nid: this.nid
                    }
                }),
                then: response => {
                    this.nodes = response.nodes;
                }
            });
        },

        // Сохранить текущее расположение нодов
        setNodes() {
            this.selected_nodes = [];
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.node:set-nodes',
                    data: {
                        nid: this.nid,
                        nodes: this.nodes
                    }
                }),
                then: () => {
                    this.getNodes();
                }
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
