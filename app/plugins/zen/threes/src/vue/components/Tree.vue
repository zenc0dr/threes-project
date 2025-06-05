<template>
    <div class="threes-nt">
        <div class="tree-list">
            <div class="tree-list__menu">
                <div @click="show = !show"
                     class="tree-list__menu__button"
                     :title="show ? 'Скрыть меню' : 'Показать меню'"
                >
                    <i :class="show ? 'oc-icon-caret-left' : 'oc-icon-caret-right'"></i>
                </div>
                <div v-if="show" class="tree-list__search">
                    <i class="oc-icon-search"></i>
                    <input
                        type="text"
                        v-model="search"
                        class="tree-list__search-input"
                        placeholder="Поиск..."
                        @keydown.enter="submitSearch"
                    />
                </div>
            </div>

            <template v-if="show">
                <tree-item
                    v-for="item in tree"
                    :key="item.nid"
                    :node="item"
                    :depth="0"
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
    data() {
        return {
            ths: window.ths,
            show: true,
            search: '',
            tree: [],
            searchTimer: null,
        }
    },
    watch: {
        search() {
            clearTimeout(this.searchTimer)
            this.searchTimer = setTimeout(this.getTree, 400)
        }
    },
    mounted() {
        this.getTree()
        //this.ths.bus.on('tree:refresh', this.getTree)
    },
    unmounted() {
        //this.ths.bus.off('tree:refresh', this.getTree)
        clearTimeout(this.searchTimer)
    },
    methods: {
        getTree() {
            this.ths.api({
                api: 'ui:get-tree-nodes',
                data: { search: this.search },
                then: response => {
                    this.tree = response.tree
                }
            })
        },
        submitSearch() {
            clearTimeout(this.searchTimer)
            this.getTree()
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
    height: 100%;
    overflow: auto;

    .tree-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .tree-list__menu {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        padding-bottom: 5px;

        &__button {
            background: #f7f7f7;
            border-radius: 4px;
            padding: 4px 8px;
            color: #b4b4b4;
            cursor: pointer;
            transition: 200ms;

            &:hover {
                background: #e7e7e7;
            }
        }
    }

    .tree-list__search {
        position: relative;
        display: flex;
        align-items: center;
        background: white;
        border-radius: 4px;
        flex-grow: 1;
        padding-left: 24px;

        i {
            position: absolute;
            left: 8px;
            color: #aaa;
            font-size: 14px;
        }

        &-input {
            width: 100%;
            border: none;
            outline: none;
            background: transparent;
            padding: 5px 8px;
            padding-top: 7px;
            padding-bottom: 2px;
            font-size: 13px;
            color: #333;
        }
    }
}
</style>
