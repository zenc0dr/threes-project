<template>
    <div class="threes-ui" :class="{ fullscreen: fullscreen }">
        <div class="threes-settings">
            <div class="threes-settings__button">
                <i
                    :class="fullscreen ? 'oc-icon-compress' : 'oc-icon-expand'"
                    @click="fullscreen = !fullscreen"
                    :title="fullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'"
                />
            </div>
        </div>
        <div class="threes-top">
            <div class="tree-container">
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
    data() {
        return {
            fullscreen: false
        }
    },
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
.threes-settings {
    padding: 3px 4px;
    background: #e4e4e4;

    i {
        padding: 2px 0px 2px 8px;
        background: #939393;
        color: #fff;
        border-radius: 3px;
    }
}
.fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #fff;
    margin: 0 !important;
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .threes-top,
    .threes-bottom {
        flex: 1 1 auto;
        overflow: auto;
        min-height: 0;
    }

    .tree-container,
    .schema-container,
    .store-container {
        height: 100%;
        overflow: auto;
    }
}
</style>
