<template>
<div class="node-text">
    {{ node.data }}
</div>
</template>
<script>
export default {
    name: "NodeText",
    props: ['node'],
}
</script>
<style lang="scss">
.schema-container .node-text {
    background: #fff;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 4px;
    font-size: 17px;
}
</style>
