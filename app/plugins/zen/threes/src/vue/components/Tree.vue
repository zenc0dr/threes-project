<template>
    <div class="threes-nt">
        <div class="tree-list">
            <template v-if="show">
                <tree-item
                    v-for="item in tree"
                    :key="item.nid"
                    :node="item"
                    :depth="0"
                    :nodes-to-open="nodesToOpen"
                    @move="moveAction"
                />
            </template>
        </div>
    </div>
</template>

<script>
import TreeItem from './TreeItem.vue'
export default {
    name: 'Tree',
    components: { TreeItem },
    props: {
        search: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            ths: window.ths,
            show: true,
            tree: [],
            nodesToOpen: [],
        }
    },
    watch: {
        search() {
            this.getTree()
        }
    },
    created() {
        this.ths.mountComponent('Tree', this)
    },
    mounted() {
        this.getTree()
    },
    unmounted() {
        this.ths.unmountComponent('Tree')
    },
    methods: {
        getTree() {
            this.ths.api({
                api: 'ui:get-tree-nodes',
                data: {
                    search: this.search
                },
                then: response => {
                    this.tree = response.tree
                    this.ths.clearNodeActions()
                    this.unfoldSelectedBranch()
                }
            })
        },

        /**
         * Находит путь из ID узлов до целевого узла и сохраняет его в this.nodesToOpen.
         */
        unfoldSelectedBranch() {
            if (!this.ths.data.node_selected_nid) {
                this.nodesToOpen = []
                return
            }

            const path = this.findPathToNode(this.tree, this.ths.data.node_selected_nid);
            this.nodesToOpen = path || [];
        },

        /**
         * Рекурсивно ищет путь к узлу в дереве.
         * @param {Array} nodes - Массив узлов для поиска.
         * @param {Number} target_nid - ID искомого узла.
         * @returns {Array|null} - Массив ID узлов от корня до цели, или null, если путь не найден.
         */
        findPathToNode(nodes, target_nid) {
            for (const node of nodes) {
                // Если текущий узел - цель
                if (node.nid === target_nid) {
                    return [node.nid];
                }

                // Если у узла есть потомки, ищем в них
                if (node.nodes && node.nodes.length > 0) {
                    const path = this.findPathToNode(node.nodes, target_nid);
                    // Если путь найден в потомках, добавляем текущий узел в начало пути
                    if (path) {
                        return [node.nid, ...path];
                    }
                }
            }
            // Путь не найден в этой ветке
            return null;
        },
        moveAction({nid, direction}) {
            this.ths.api({
                api: 'nodes.node:move-node',
                data: {
                    nid: this.ths.data.node_actions_nid,
                    target_nid: nid,
                    direction: direction
                },
                then: () => {
                    this.ths.data.node_actions_nid = null
                    this.ths.data.node_action = null
                    this.getTree()
                }
            })
        }
    }
}
</script>

<style lang="scss">
.threes-nt {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .tree-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
    }
}
</style>
