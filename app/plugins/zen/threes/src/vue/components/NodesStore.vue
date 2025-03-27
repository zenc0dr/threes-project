<template>
<div class="nodes-store">

</div>
</template>
<script>
export default {
    name: "NodesStore",
    data() {
        return {

        }
    },
    methods: {
        getStoreNodes() {
            ths.api({
                api: 'nodes.node:'
            })
        }
    }
}
</script>
<style lang="scss">
.nodes-store {

}
</style>
