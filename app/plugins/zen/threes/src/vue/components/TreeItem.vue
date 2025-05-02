<template>
    <div class="tree-item" :style="{ paddingLeft: `${depth * 16}px` }">
        <div
            class="tree-label flex items-center px-2 py-1 rounded hover:bg-gray-200 transition"
            :class="{ 'bg-blue-100 text-blue-700 font-bold': node.id === active_id }"
            @click="toggle"
        >
            <span v-if="has_children" class="chevron w-4 text-center mr-1" @click.stop="toggleOpen">
                {{ open ? '▾' : '▸' }}
            </span>
            <span v-else class="w-4 mr-1"></span>

            <span @click="select">{{ node.name }}</span>
        </div>

        <div v-show="open" v-if="has_children" class="tree-children">
            <tree-item
                v-for="child in node.children"
                :key="child.id"
                :node="child"
                :depth="depth + 1"
                :active_id="active_id"
                @select="$emit('select', $event)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TreeItem',
    props: {
        node: Object,
        depth: Number,
        active_id: String
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
            this.$emit('select', this.node.id)
        }
    }
}
</script>

<style lang="scss">
.tree-item {
    display: flex;
    flex-direction: column;

    .chevron {
        margin-right: 5px;
    }
    cursor: pointer;
}

.tree-children {
    display: flex;
    flex-direction: column;
}

.tree-label {
    user-select: none;
}
</style>
