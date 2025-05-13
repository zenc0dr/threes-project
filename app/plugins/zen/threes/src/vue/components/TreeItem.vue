<template>
    <div class="tree-item">
        <div
            class="tree-label"
            :class="{ 'active': node.nid === active_nid }"
            @click="select"
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
                    <div class="tree-item__btn">
                        <div class="icon-btn" title="Наружу">
                            <i class="oc-icon-arrow-left"></i>
                        </div>
                        <div class="icon-btn" title="Вниз">
                            <i class="oc-icon-arrow-down"></i>
                        </div>
                        <div class="icon-btn" title="Вверх">
                            <i class="oc-icon-arrow-up"></i>
                        </div>
                        <div class="icon-btn" title="Внутрь">
                            <i class="oc-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="open" v-if="has_nodes" class="tree-nodes">
            <tree-item
                v-for="child in node.nodes"
                :key="child.nid"
                :node="child"
                :depth="depth + 1"
                :active_nid="active_nid"
                @select="$emit('select', $event)"
            />
        </div>
    </div>
</template>

<script>
import icon from './icon.vue'
export default {
    name: 'TreeItem',
    components: { icon },
    props: {
        node: Object,
        depth: Number,
        active_nid: String
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        has_nodes() {
            return this.node.nodes && this.node.nodes.length > 0
        }
    },
    methods: {
        toggleOpen() {
            this.open = !this.open
        },
        select() {
            this.$emit('select', this.node)
        }
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

    &__btn {
        display: flex;
        gap: 6px;

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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .tree-nodes {
        display: flex;
        flex-direction: column;
    }

    .tree-item__mover {
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .tree-label:hover .tree-item__mover {
        opacity: 1;
    }

}
</style>
