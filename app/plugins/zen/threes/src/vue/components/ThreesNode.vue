<template>
    <div class="threes-node">
        Нод, хуёд
    </div>
</template>
<script>
export default {
    name: "ThreesNode",
    props: {
        node: null
    },
}
</script>
<style lang="scss">
.threes-node {
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    padding: 10px;
    border-radius: 4px;
    min-height: 80px;
    margin: 0 4px;
}
</style>
