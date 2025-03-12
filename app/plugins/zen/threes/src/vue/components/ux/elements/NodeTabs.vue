<template>
    <div class="node-tabs">
        <div @click="selectTab(item)"
             v-for="item in items"
             :class="{ active : isSelected(item) }"
             class="node-tabs__item"
        >
            {{ item.name }}
        </div>
    </div>
</template>
<script>
export default {
    name: "NodeTabs",
    emits: ['select_tab'],
    props: {
        active_tab: null
    },
    data() {
        return {
            items: [
                {
                    tab: 'layers',
                    name: 'Слои'
                },
                {
                    tab: 'scheme',
                    name: 'Схема'
                }
            ],
        }
    },
    methods: {
        selectTab(item) {
            this.$emit('select_tab', item.tab);
        },
        isSelected(item) {
            return this.active_tab === item.tab
        }
    }
}
</script>
<style lang="scss">
.node-tabs {
    display: flex;
    flex-direction: row;
    margin: -3px;
    margin-top: 0;
    margin-bottom: 6px;
    cursor: pointer;

    &__item {
        padding: 3px 13px;
        background: #f0f0fc;
        border-radius: 3px;
        font-weight: bold;
        color: #929292;
        font-size: 12px;
        margin: 3px;

        &.active {
            background: #c3d8df;
            color: #395058;
        }
    }
}
</style>
