<template>
<div v-if="node.nid" class="threes-node">
    {{ node.name }}
</div>
</template>
<script>
export default {
    name: "Node",
    props: {
        node: null
    }
}
</script>
<style scoped lang="scss">
.threes-node {

}
</style>
