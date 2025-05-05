<template>
    <div class="tree-item">
        <div
            class="tree-label flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-100 text-blue-700 font-bold': node.nid === active_nid }"
            @click="toggle"
        >
            <div class="tree-content flex items-center gap-1" :style="{ marginLeft: `${depth * 16}px` }">
                <!-- Шеврон -->
                <span v-if="has_children" class="chevron w-4 flex justify-center items-center" @click.stop="toggleOpen">
                    {{ open ? '▾' : '▸' }}
                </span>
                <span v-else class="chevron w-4"></span>

                <!-- Иконка -->
                <icon :src="node.icon" width="16px" height="16px" class="mr-1" />

                <!-- Название -->
                <span class="tree-name truncate" @click="select">{{ node.name }}</span>
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
    }

    .tree-content {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    .chevron {
        width: 1rem; // 16px
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
