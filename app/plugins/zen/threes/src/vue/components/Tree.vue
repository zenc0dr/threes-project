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
                    :nodes-to-open="nodesToOpen"
                    @move="moveAction"
                />
            </template>
        </div>
        
        <!-- Блок пользователя внизу -->
        <div class="tree-user-info">
            <div v-if="user" class="user-name" @click="$router.push('/profile')">
                {{ user.name || user.login }}
            </div>
            <Logout />
        </div>
    </div>
</template>

<script>
import TreeItem from './TreeItem.vue'
import Logout from './Logout.vue'

export default {
    name: 'Tree',
    components: { TreeItem, Logout },
    data() {
        return {
            ths: window.ths,
            show: true,
            search: '',
            tree: [],
            searchTimer: null,
            nodesToOpen: [],
            user: null,
        }
    },
    watch: {
        search() {
            clearTimeout(this.searchTimer)
            this.searchTimer = setTimeout(this.getTree, 400)
        }
    },
    created() {
        this.ths.mountComponent('Tree', this)
        this.loadUserInfo()
    },
    mounted() {
        this.getTree()
    },
    unmounted() {
        this.ths.unmountComponent('Tree')
        clearTimeout(this.searchTimer)
    },
    methods: {
        loadUserInfo() {
            // Получаем информацию о пользователе
            this.ths.api({
                api: 'user.profile:get',
                then: (response) => {
                    if (response.success) {
                        this.user = response.user
                    }
                }
            });
        },
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
    min-height: 100%;
    min-width: max-content;
    overflow: visible;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .tree-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
        overflow-y: auto;
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

    .tree-user-info {
        position: sticky;
        bottom: 0;
        background: #f8f9fa;
        border-top: 1px solid #e9ecef;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 60px;
        box-sizing: border-box;

        .user-name {
            color: #495057;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: color 0.2s;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:hover {
                color: #007acc;
            }
        }
    }
}
</style>
