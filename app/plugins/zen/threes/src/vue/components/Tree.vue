<template>
    <div class="threes-nt w-64 h-full bg-gray-50 overflow-auto p-2 text-sm">
        <div class="tree-list">
            <tree-item
                v-for="item in tree"
                :key="item.nid"
                :node="item"
                :depth="0"
                :active_nid="active_nid"
                @select="handleSelect"
            />
        </div>
    </div>
</template>

<script>
import TreeItem from './TreeItem.vue'

export default {
    name: 'Tree',
    components: { TreeItem },
    data() {
        return {
            ths: window.ths,
            active_nid: null,
            tree: []
        }
    },
    mounted() {
        this.getTree()
        this.ths.bus.on('tree:refresh', this.getTree)
    },
    unmounted() {
        this.ths.bus.off('tree:refresh', this.getTree)
    },
    methods: {
        handleSelect(nid) {
            this.active_nid = nid
            ths.data.selected_nid = nid
        },
        getTree() {
            ths.api({
                api: 'ui:get-tree-nodes',
                then: response => {
                    this.tree = response.tree
                }
            })
        }
    }
}
</script>

<style lang="scss">
.threes-nt {
    .tree-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
}
</style>
