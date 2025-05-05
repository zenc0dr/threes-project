<template>
    <div class="tree-item">
        <div
            class="tree-label"
            :class="{ 'active': node.nid === active_nid }"
            @click="toggle"
        >
            <div class="tree-content" :style="{ marginLeft: `${depth * 16}px` }">
                <!-- Шеврон -->
                <span v-if="has_children" class="chevron" @click.stop="toggleOpen">
                    {{ open ? '▾' : '▸' }}
                </span>
                <span v-else class="chevron"></span>

                <!-- Иконка -->
                <icon :src="node.icon" width="16px" height="16px" />

                <!-- Название -->
                <span class="tree-name" @click="select">{{ node.name }}</span>
            </div>
        </div>

        <div v-show="open" v-if="has_children" class="tree-children">
            <tree-item
                v-for="child in node.children"
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
    components: {
        icon
    },
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
        has_children() {
            return this.node.children && this.node.children.length > 0
        }
    },
    methods: {
        toggle() {
            this.select()
        },
        toggleOpen() {
            this.open = !this.open
        },
        select() {
            this.$emit('select', this.node.nid)
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
        gap: 0.25rem;
        user-select: none;
        &.active {
            background: #e0f2ff;
            color: #0369a1;
            font-weight: 600;
            border-left: 4px solid #0ea5e9;
            border-radius: 4px;
            padding-left: 0.5rem;
            transition: background 0.2s ease, color 0.2s ease;
        }
    }

    .tree-content {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    .chevron {
        width: 1rem;
        text-align: center;
        flex-shrink: 0;
    }

    .tree-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .tree-children {
        display: flex;
        flex-direction: column;
    }
}
</style>
