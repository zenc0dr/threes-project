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
    background: #c7ffc2;
    color: #325235;
    padding: 5px 9px;
    border-radius: 4px;
}
</style>
