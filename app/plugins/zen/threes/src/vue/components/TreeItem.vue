<template>
    <div class="tree-item">
        <div
            @click="select"
            class="tree-label"
            :class="{ 'active': is_active }"
        >
            <div class="tree-content" :style="{ marginLeft: `${depth * 16}px` }">
                <!-- Шеврон -->
                <span v-if="has_nodes" class="chevron" @click.stop="toggleOpen">
                    {{ open ? '▾' : '▸' }}
                </span>
                <span v-else class="chevron"></span>

                <!-- Иконка -->
                <icon :src="node.icon" width="16px" height="16px" />

                <!-- Название -->
                <span class="tree-name">{{ node.name }}</span>

                <div class="tree-item__mover">
                    <!--
                    <div v-if="action === null" class="tree-item__btn" title="Настройки">
                        <div @click.stop="openNodeSettings" class="icon-btn">
                            <i class="oc-icon-cog"></i>
                        </div>
                    </div>
                    <div v-if="['move', 'copy', 'link'].includes(action)" class="tree-item__mover__move">

                    </div>

                    <div v-if="node_settings !== null && node_settings.nid === node.nid" class="tree-item__menu">
                        <div class="tree-item__menu__body">
                            <div @click.stop="action('move')" class="icon-btn" title="Перенести">
                                <i class="oc-icon-arrow-right"></i>
                            </div>
                            <div @click.stop="action('copy')" class="icon-btn" title="Копировать">
                                <i class="oc-icon-copy"></i>
                            </div>
                            <div @click.stop="action('link')" class="icon-btn" title="Создать ссылку">
                                <i class="oc-icon-link"></i>
                            </div>
                            <div @click.stop="action('delete')" class="icon-btn" title="Удалить">
                                <i class="oc-icon-trash"></i>
                            </div>
                        </div>
                    </div>
                    <template v-if="move_mode && node.nid !== move_source_nid">
                        <div class="tree-item__btn">
                            <div @click.stop="move(node.nid, 'outward')" class="icon-btn" title="Наружу">
                                <i class="oc-icon-arrow-left"></i>
                            </div>
                            <div @click.stop="move(node.nid, 'after')" class="icon-btn" title="Вниз">
                                <i class="oc-icon-arrow-down"></i>
                            </div>
                            <div @click.stop="move(node.nid, 'before')" class="icon-btn" title="Вверх">
                                <i class="oc-icon-arrow-up"></i>
                            </div>
                            <div @click.stop="move(node.nid, 'inside')" class="icon-btn" title="Внутрь">
                                <i class="oc-icon-arrow-right"></i>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="move_mode && node.nid === move_source_nid">
                        <div @click.stop="enableMoveMode" class="tree-item__btn">
                            <div class="icon-btn" title="Отменить перемещение">
                                <i class="oc-icon-stop-circle-o"></i>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div @click.stop="enableMoveMode" class="tree-item__btn">
                            <div class="icon-btn" title="Переместить">
                                <i class="oc-icon-cog"></i>
                            </div>
                        </div>
                    </template>
                    -->
                </div>
            </div>
        </div>

        <div v-show="open" v-if="has_nodes" class="tree-nodes">
            <tree-item
                v-for="child in node.nodes"
                :key="child.nid"
                :node="child"
                :depth="depth + 1"
            />
        </div>
    </div>
</template>

<script>
import icon from './icon.vue'
export default {
    name: 'TreeItem',
    components: { icon },
    emits: [],
    props: {
        node: Object,
        depth: Number,
    },
    data() {
        return {
            ths: window.ths,
            open: false
        }
    },
    computed: {
        has_nodes() {
            return this.node.nodes && this.node.nodes.length > 0
        },
        is_active() {
            if (!this.ths.data.selected?.node) {
                return false
            }
            return this.ths.data.selected?.node?.nid === this.node.nid
        }
    },
    mounted() {

    },
    methods: {
        // Показать потомков нода
        toggleOpen() {
            this.open = !this.open
        },
        select() {
            this.ths.data.selected = {
                node: this.node,
            }
        },
        // select() {
        //     this.$emit('select', this.node)
        // },
        // openNodeSettings() {
        //     this.$emit('openNodeSettings', this.node)
        // },
        // action(action, data) {
        //     this.$emit('action', {
        //         nid: this.node.nid,
        //         action,
        //         data
        //     })
        // },
        // move(nid, direction) {
        //     this.$emit('move', {nid, direction})
        // }
    }
}
</script>

<style lang="scss">
.tree-item {
    display: flex;
    flex-direction: column;

    &__mover {
        margin-left: auto;
    }

    &__menu {
        height: 0;
        &__body {
            display: flex;
            position: absolute;
            padding: 5px 6px;
            background: #fff;
            border-radius: 4px;
        }
    }

    &__btn {
        display: flex;
        gap: 6px;
        margin-right: 5px;

        .icon-btn {
            width: 10px;
            height: 10px;
            padding: 0;
            border: none;
            background: transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 16px;
            transition: color 0.2s ease;

            &:hover {
                color: #000;
            }
            &:focus {
                outline: 1px solid #000;
                outline-offset: 2px;
            }
            i {
                font-size: 13px;
            }
        }
    }

    .tree-label {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        padding: 2px 4px;
        border-radius: 4px;
        &.active {
            background: #dfe0ff;
            color: #000000;
            transition: background 0.2s ease, color 0.2s ease;
        }
        &:hover {
            background: #f0f0f0;
        }
        &.moved {
            background: #bbff88;

            i {
                color: #205100;
            }
        }
    }

    .tree-content {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 2px 0;
        flex: 1 1 0;
    }

    .chevron {
        width: 1rem;
        text-align: center;
        flex-shrink: 0;
        cursor: pointer;
    }

    .tree-name {
        margin-right: 15px;
        max-width: 250px;
        line-height: 15px;
        margin-left: 3px;
    }

    .tree-nodes {
        display: flex;
        flex-direction: column;
    }

    //.tree-label:not(.moved) .tree-item__mover {
    //    opacity: 0;
    //    transition: opacity 0.2s ease;
    //}

    //.tree-label:hover .tree-item__mover {
    //    opacity: 1;
    //}

}
</style>
