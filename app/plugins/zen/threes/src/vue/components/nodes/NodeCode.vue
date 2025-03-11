<template>
<div class="node-code">
    {{ node.name }}
</div>
</template>
<script>
export default {
    name: "NodeCode",
    props: {
        node: null,
        layer: null,
    },
    methods: {

    }
}
</script>
<style lang="scss">
.node-code {
    user-select: none;
}
</style>
