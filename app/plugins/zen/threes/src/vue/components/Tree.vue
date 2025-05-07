<template>
    <div class="threes-nt w-64 h-full bg-gray-50 overflow-auto p-2 text-sm">
        <div class="tree-list">
            <div class="tree-list__menu">
                <div @click="show = !show" class="tree-list__menu__button">
                    <i :class="show ? 'oc-icon-caret-left' : 'oc-icon-caret-right'"></i>
                </div>
            </div>
            <template v-if="show">
                <tree-item
                    v-for="item in tree"
                    :key="item.nid"
                    :node="item"
                    :depth="0"
                    :active_nid="active_nid"
                    @select="handleSelect"
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
    data() {
        return {
            ths: window.ths,
            show: true,
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
        handleSelect(node) {
            if (node.schema) {
                this.active_nid = node.nid
                ths.data.selected_nid = node.nid
            }
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

.tree-list__menu {
    display: flex;
    border-radius: 3px;
    background: #e3e3e3;

    &__button {
        background: #aeaeae;
        margin: 3px;
        border-radius: 4px;
        align-content: center;
        padding-left: 9px;
        color: #ebebeb;
        cursor: pointer;
    }
}
</style>
