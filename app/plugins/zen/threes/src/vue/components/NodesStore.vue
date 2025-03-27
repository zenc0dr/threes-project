<template>
<div class="nodes-store">
    <div class="nodes-store__items">
        <div v-for="node in store_nodes" class="nodes-store__item">
            <icon :src="node.icon" class="nodes-store__icon" />
            <div class="nodes-store__name">
                {{ node.name }}
            </div>
        </div>
    </div>
</div>
</template>
<script>
import icon from "./icon.vue"
export default {
    name: "NodesStore",
    components: {
        icon
    },
    data() {
        return {
            store_nodes: []
        }
    },
    mounted() {
        this.getStoreNodes()
    },
    methods: {
        getStoreNodes() {
            ths.api({
                api: 'nodes.store:get-store-nodes',
                then: response => {
                    this.store_nodes = response.store_nodes
                }
            })
        }
    }
}
</script>
<style lang="scss">
.nodes-store {
    padding: 15px;

    &__items {
        display: flex;
    }
    &__item {
        display: flex;
        border: 1px solid #666;
        border-radius: 4px;
        padding: 9px 10px;
        margin: 5px;
        font-size: 16px;
    }
    &__icon {

    }
    &__name {
        padding: 10px;
    }
}
</style>
