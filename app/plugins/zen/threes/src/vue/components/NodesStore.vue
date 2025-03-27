<template>
<div class="nodes-store">
    <div class="nodes-store__items">
        <div v-for="node in nodes" class="nodes-store__item">
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
            nodes: []
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
                    this.nodes = response.nodes
                }
            })
        }
    }
}
</script>
<style lang="scss">
.nodes-store {


    &__items {

    }
    &__item {

    }
    &__icon {

    }
    &__name {

    }
}
</style>
