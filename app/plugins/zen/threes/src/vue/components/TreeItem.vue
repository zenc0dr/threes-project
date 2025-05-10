<template>
    <div class="tree-item">
        <div
            class="tree-label"
            :class="{ 'active': node.nid === active_nid }"
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
                <span class="tree-name" @click="select">{{ node.name }}</span>
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

    .tree-label {
        display: flex;
        align-items: center;
        user-select: none;
        &.active {
            background: #d2ffdb;
            color: #1a4523;
            border-radius: 4px;
            transition: background 0.2s ease, color 0.2s ease;
        }
    }

    .tree-content {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 2px 0;
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
        cursor: pointer;
    }

    .tree-nodes {
        display: flex;
        flex-direction: column;
    }
}
</style>
