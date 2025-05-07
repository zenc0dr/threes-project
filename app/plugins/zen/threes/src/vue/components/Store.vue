<template>
<div class="threes-store">
    <div v-for="node in nodes" class="threes-store__node">
        <div class="threes-store__head">
            <div class="threes-store__icon">
                <icon :src="node.icon" width="20px" height="20px" />
            </div>
            <div class="threes-store__name">
                {{ node.name }}
            </div>
        </div>
        <div class="threes-store__description">
            {{ node.description }}
        </div>
    </div>
</div>
</template>
<script>
import icon from './icon.vue'
export default {
    name: "Store",
    components: {
        icon
    },
    data() {
        return {
            ths: window.ths,
            nodes: null
        }
    },
    mounted() {
        this.getStore()
        this.ths.bus.on('store:refresh', this.getStore)
    },
    unmounted() {
        this.ths.bus.off('store:refresh', this.getStore)
    },
    methods: {
        getStore() {
            ths.api({
                api: 'store:get',
                then: response => {
                    this.nodes = response.nodes
                }
            })
        }
    }
}
</script>
<style lang="scss">
.threes-store {
    display: flex;
    background: #a7a7a7;
    padding: 15px;
    flex-wrap: wrap;
    border-top: 2px solid #ffe097;

    &__node {
        display: flex;
        flex-direction: column;
        width: 240px;
        background: #f3f3f3;
        border-radius: 5px;
        margin: 3px;
    }
    &__head {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 10px 8px;
        border-bottom: 1px solid #e7e7e7;
        background: #fff;
        border-radius: 4px;
    }
    &__icon {
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }
    &__name {
        padding: 10px;
        line-height: 16px;
        font-size: 15px;
        font-weight: bold;
    }
    &__description {
        padding: 10px;
        font-size: 12px;
        max-height: 110px;
        overflow-y: auto;
        color: #424242;
    }
}
</style>
