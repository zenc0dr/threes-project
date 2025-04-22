<template>
    <div class="threes-ui">
        <NodeTree />
    </div>
</template>

<script>
import NodeTree from '../components/NodeTree.vue'
export default {
    name: 'Ui',
    props: ['backend'],
    components: {
        NodeTree
    }
};
</script>
<style lang="scss">
.threes-ui {
    padding: 5px;
    background: #f5f5f5;
    margin: 4px;
}
</style>
