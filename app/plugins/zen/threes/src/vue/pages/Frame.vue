<template>
    <div class="frame">
        <draggable
            v-for="(line, line_index) in program"
            :key="line_index"
            v-model="program[line_index]"
            tag="div"
            class="frame__line"
            group="nodes"
            item-key="nid"
            :multi-drag="true"
            :selected-items="selectedNodes"
            @end="saveProgram"
            @dblclick="createNode(line_index)"
        >
            <template #item="{element:node}">
                <Node
                    class="frame__node"
                    :class="{'selected':isNodeSelected(node.nid)}"
                    :style="getNodeStyle(node)"
                    :node="node"
                    @click="handleNodeClick(node, $event)"
                />
            </template>
        </draggable>
        <div @click="addProgramLine" class="frame__add-line">+</div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import Node from '../components/Node.vue';

export default {
    name: 'Frame',
    components: {
        draggable,
        Node
    },
    props: ['backend', 'fid'],
    data() {
        return {
            program: [],
            selectedNodes: [], // Массив nid выбранных нодов
        };
    },
    mounted() {
        this.loadProgram();
    },
    methods: {
        getNodeStyle(node) {
            const cssLayer = node.layers?.['threes.units.ui@css'];
            return cssLayer ? JSON.parse(cssLayer) : {
                padding: '5px 7px',
                background: '#6eb39d',
                borderRadius: '3px',
                width: '50px'
            };
        },
        getNodeComponent(node) {
            if (node.layers?.['threes.units.chart_js']) {
                return 'ChartNode';
            } else if (node.layers?.['threes.units.ui@button']) {
                return 'ButtonNode';
            }
            return 'DefaultNode';
        },
        isNodeSelected(nid) {
            return this.selectedNodes.includes(nid);
        },
        handleNodeClick(node, event) {
            if (event.detail === 2) return; // Пропускаем двойной клик

            const nid = node.nid;
            if (event.ctrlKey) {
                // Множественный выбор с Ctrl
                const index = this.selectedNodes.indexOf(nid);
                if (index === -1) {
                    this.selectedNodes.push(nid); // Добавляем, если не выбран
                } else {
                    this.selectedNodes.splice(index, 1); // Убираем, если уже выбран
                }
            } else {
                // Одиночный выбор без Ctrl
                if (this.selectedNodes.length === 1 && this.selectedNodes[0] === nid) {
                    this.selectedNodes = []; // Снимаем выбор, если кликнули на уже выбранный
                } else {
                    this.selectedNodes = [nid]; // Выбираем только этот нод
                }
            }
        },
        createNode(line_index) {
            ths.api({
                api: 'nodes.Node:Create',
                data: {
                    fid: this.fid,
                    line_index: line_index
                },
                then: () => {
                    this.loadProgram();
                },
            });
        },
        addProgramLine() {
            ths.api({
                api: 'frames.Frame:addLine',
                data: { fid: this.fid },
                then: () => {
                    this.loadProgram();
                },
            });
        },
        loadProgram() {
            ths.api({
                api: 'frames.Frame:loadProgram',
                data: {
                    fid: this.fid
                },
                then: response => {
                    this.program = response.program;
                },
            });
        },
        saveProgram() {
            ths.api({
                api: 'frames.Frame:saveProgram',
                data: {
                    fid: this.fid,
                    program: this.program
                },
                then: () => {
                    this.loadProgram();
                },
            });
        },
    },
};
</script>

<style lang="scss">
.frame {
    border: 1px solid #ddd;
    padding: 10px;

    .node-test {
        background: #4795b1;
    }

    &__line {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        min-height: 34px;
        margin-bottom: 10px;
    }

    &__node {
        cursor: move;

        &.selected {
            outline: 2px solid #007bff; // Визуальный индикатор выбора
            outline-offset: 2px;
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
