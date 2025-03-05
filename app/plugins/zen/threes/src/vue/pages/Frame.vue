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
            @end="saveProgram"
        >
            <template #item="{ element: node }">
                <div
                    class="frame__node"
                    :style="getNodeStyle(node)"
                    @click="handleNodeClick(node, $event)"
                >
                    <component :is="getNodeComponent(node)" :node="node" />
                </div>
            </template>
        </draggable>
        <div @dblclick="createNodeAtPosition" class="frame__add-line">+</div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    name: 'Frame',
    components: { draggable },
    props: ['backend', 'fid'],
    data() {
        return {
            program: [],
            selectedNodes: [],
        };
    },
    mounted() {
        this.loadProgram();
    },
    methods: {
        getNodeStyle(node) {
            const cssLayer = node.layers['threes.units.ui@css'];
            return cssLayer ? JSON.parse(cssLayer) : { padding: '5px 7px', background: '#e9e9e9', borderRadius: '3px' };
        },
        getNodeComponent(node) {
            // Логика выбора компонента на основе слоёв
            if (node.layers['threes.units.chart_js']) {
                return 'ChartNode'; // Компонент для графиков
            } else if (node.layers['threes.units.ui@button']) {
                return 'ButtonNode'; // Компонент для кнопок
            }
            return 'DefaultNode'; // По умолчанию
        },
        handleNodeClick(node, event) {
            if (event.ctrlKey) {
                const index = this.selectedNodes.indexOf(node.nid);
                if (index === -1) this.selectedNodes.push(node.nid);
                else this.selectedNodes.splice(index, 1);
            } else {
                this.selectedNodes = [node.nid];
            }
        },
        createNodeAtPosition(event) {
            const line_index = Math.floor(event.offsetY / 40); // Пример высоты строки
            this.createNode(line_index);
        },
        createNode(line_index) {
            ths.api({
                api: 'nodes.Node:Create',
                data: { fid: this.fid, line_index: line_index },
                then: () => this.loadProgram(),
            });
        },
        addProgramLine() {
            ths.api({
                api: 'frames.Frame:addLine',
                data: { fid: this.fid },
                then: () => this.loadProgram(),
            });
        },
        loadProgram() {
            ths.api({
                api: 'frames.Frame:loadProgram',
                data: { fid: this.fid },
                then: response => {
                    this.program = response.program.map(line => line.map(node => ({
                        ...node,
                        x: 0, // x не нужен, так как позиция управляется через Flexbox
                    })));
                },
            });
        },
        saveProgram() {
            ths.api({
                api: 'frames.Frame:saveProgram',
                data: { fid: this.fid, program: this.program },
                then: () => this.loadProgram(),
            });
        },
    },
};
</script>

<style lang="scss">
.frame {
    border: 1px solid #ddd;
    padding: 10px;

    &__line {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        min-height: 34px;
        margin-bottom: 10px;
    }

    &__node {
        cursor: move;
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
