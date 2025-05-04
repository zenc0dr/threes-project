<template>
<div class="node-text">
    {{ data }}
</div>
</template>
<script>
export default {
    name: "NodeText",
    props: ['data'],
}
</script>
<style lang="scss">
.schema-container .node-text {
    padding: 15px;
}
</style>
