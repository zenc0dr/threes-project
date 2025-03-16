<template>
    <div class="threes_node_ui">
        {{ node.name }}
    </div>
</template>
<script>
export default {
    name: "UiNode",
    props: {
        node: null,
        layer: null,
    },
}
</script>
<style lang="scss">
.threes_node_ui {

}
</style>
