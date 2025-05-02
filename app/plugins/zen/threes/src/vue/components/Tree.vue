<template>
    <div class="threes-nt w-64 h-full bg-gray-50 overflow-auto p-2 text-sm">
        <div class="tree-list">
            <tree-item
                v-for="item in tree_data"
                :key="item.id"
                :node="item"
                :depth="0"
                :active_id="active_id"
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
            active_id: null,
            tree_data: [
                {
                    id: 'root',
                    name: '🧠 Проект',
                    children: [
                        {
                            id: 'doc',
                            name: '📄 Документация',
                            children: [
                                { id: 'readme', name: 'readme.md', children: [] },
                                { id: 'changelog', name: 'changelog.md', children: [] }
                            ]
                        },
                        {
                            id: 'settings',
                            name: '⚙️ Настройки',
                            children: []
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleSelect(id) {
            this.active_id = id
            this.$emit('select', id)
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
