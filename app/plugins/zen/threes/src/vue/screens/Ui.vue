<template>
    <div class="threes-ui">
        <div class="threes-top">
            <div class="three-container">
                <Tree />
            </div>
            <div class="schema-container">
                <Schema />
            </div>
        </div>
        <div class="threes-bottom">
            <div class="store-container">
                <Store />
            </div>
        </div>
    </div>
</template>

<script>
import Tree from '../components/Tree.vue'
import Schema from '../components/Schema.vue'
import Store from '../components/Store.vue'
export default {
    name: 'Stand',
    props: ['backend'],
    components: {
        Tree,
        Schema,
        Store
    }
};
</script>
<style lang="scss">
.threes-ui {
    display: flex;
    background: #f5f5f5;
    margin: 4px;
    flex-direction: column;
}
.threes-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.tree-container {
    border-right: 1px solid #e2e2e2;
    padding-right: 5px;
}
.schema-container {
    display: flex;
    flex: 1 1 0;
    background: #ededed;
}
</style>
