<template>
    <div class="frame">
        <v-stage :config="stageConfig" ref="stage" @mousemove="updateMouse">
            <v-layer ref="layer">
                <v-group v-for="(line, lineIndex) in program" :key="lineIndex" :config="getLineConfig(lineIndex)">
                    <v-rect :config="lineNumberConfig(lineIndex)" />
                    <v-group :config="nodesGroupConfig()">
                        <v-rect
                            v-for="node in line"
                            :key="node.id"
                            :config="getNodeConfig(node)"
                            @dragend="handleDragEnd"
                            @click="handleNodeClick(node, $event)"
                        />
                        <v-text
                            v-for="node in line"
                            :key="node.id + '-text'"
                            :config="getNodeTextConfig(node)"
                        />
                    </v-group>
                    <v-rect :config="addNodeButtonConfig(lineIndex)" @click="createNode(lineIndex)" />
                </v-group>
                <v-rect :config="addLineButtonConfig()" @click="addProgramLine" />
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
    name: 'Frame',
    props: ['backend', 'fid'],
    data() {
        return {
            program: [],
            selectedNodes: [],
            mouse: { x: 0, y: 0 },
            stageConfig: {
                width: 800,
                height: 600,
            },
        };
    },
    mounted() {
        this.loadProgram();
    },
    methods: {
        updateMouse(event) {
            this.mouse.x = event.evt.layerX;
            this.mouse.y = event.evt.layerY;
        },

        getLineConfig(lineIndex) {
            return {
                x: 0,
                y: lineIndex * 40,
                width: 800,
                height: 34,
            };
        },

        lineNumberConfig(lineIndex) {
            return {
                x: 0,
                y: 0,
                width: 17,
                height: 34,
                fill: '#d6d8ff',
                cornerRadius: 3,
            };
        },

        nodesGroupConfig() {
            return {
                x: 20,
                y: 0,
            };
        },

        getNodeConfig(node) {
            return {
                x: node.x || 0,
                y: node.y || 0,
                width: node.width || 100,
                height: 34,
                fill: '#e9e9e9',
                cornerRadius: 3,
                draggable: true,
                name: node.id,
                shadowColor: this.selectedNodes.includes(node.id) ? '#aaf' : null,
                shadowBlur: 5,
            };
        },

        getNodeTextConfig(node) {
            return {
                x: (node.x || 0) + 5, // Синхронизируем с x нода
                y: (node.y || 0) + 10, // Синхронизируем с y нода
                text: node.content || 'Node',
                fontSize: 14,
                fill: '#000',
            };
        },

        addNodeButtonConfig(lineIndex) {
            return {
                x: 600,
                y: 0,
                width: 40,
                height: 34,
                fill: '#a4ffd5',
                cornerRadius: 4,
                opacity: 0.5,
                name: `add-node-${lineIndex}`,
            };
        },

        addLineButtonConfig() {
            return {
                x: 0,
                y: this.program.length * 40,
                width: 800,
                height: 40,
                fill: '#f5f5f5',
                cornerRadius: 4,
            };
        },

        handleDragEnd(event) {
            const node = event.target;
            const nodeId = node.name();
            const lineIndex = Math.floor(node.y() / 40);

            if (lineIndex >= 0 && lineIndex < this.program.length) {
                const updatedNode = this.program[lineIndex].find(n => n.id === nodeId);
                if (updatedNode) {
                    updatedNode.x = node.x();
                    updatedNode.y = node.y() % 40;
                    this.saveProgram();
                }
            } else {
                const originalLine = this.program.findIndex(line => line.some(n => n.id === nodeId));
                if (originalLine !== -1) {
                    const originalNode = this.program[originalLine].find(n => n.id === nodeId);
                    node.x(originalNode.x);
                    node.y(originalLine * 40);
                    this.$refs.layer.getNode().draw();
                }
            }
        },

        handleNodeClick(node, event) {
            if (event.evt.ctrlKey) {
                const index = this.selectedNodes.indexOf(node.id);
                if (index === -1) {
                    this.selectedNodes.push(node.id);
                } else {
                    this.selectedNodes.splice(index, 1);
                }
            } else {
                this.selectedNodes = [node.id];
            }
        },

        createNode(lineIndex) {
            ths.api({
                api: 'nodes.Node:Create',
                data: { fid: this.fid, line_index: lineIndex },
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
                    this.program = response.program.map((line, lineIndex) =>
                        line.map((node, nodeIndex) => ({
                            ...node,
                            x: node.x || nodeIndex * 110, // Используем x из данных, если есть
                            y: node.y || 0,
                            width: node.width || 100,
                        }))
                    );
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
}
</style>
