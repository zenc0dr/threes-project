<template>
    <div class="threes-ui">
        <Tree />
    </div>
</template>

<script>
import Tree from '../components/Tree.vue'
export default {
    name: 'Stand',
    props: ['backend'],
    components: {
        Tree
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
