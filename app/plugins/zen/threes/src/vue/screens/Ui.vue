<template>
    <div class="threes-ui" :class="{ fullscreen: fullscreen }">
        <div v-if="backend" class="threes-settings">
            <div class="threes-settings__button">
                <i
                    class="oc-icon-expand"
                    style="cursor:pointer"
                    @click="goToApp"
                    title="Полноэкранный режим"
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
    props: {
        nid: {
            type: String,
            default: null
        },
        backend: {
            type: String,
            default: null,
        }
    },
    data() {
        return {
            fullscreen: false
        }
    },
    components: {
        Tree,
        Schema,
        Store
    },
    mounted() {
        if (this.nid) {
            ths.data.node_selected_nid = this.nid
        }
        ths.data.backend = this.backend
        if (!this.backend) {
            this.fullscreen = true
        }
    },
    methods: {
        goToApp() {
            window.location.href = '/app/node'
        }
    }
};
</script>
<style lang="scss">
.threes-ui {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #f5f5f5;
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

.threes-top {
    display: flex;
    flex: 1 1 auto; // занимать всё оставшееся пространство
    overflow: hidden;
}

.tree-container {
    width: 300px;
    height: 100%;
    overflow-y: auto;
    background: #ffffff;
    border-right: 1px solid #e2e2e2;
    flex-shrink: 0;
}

.schema-container {
    flex: 1 1 auto;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: #f4f4f4;
}

.threes-bottom {
    flex-shrink: 0;
    background: #fafafa;
    border-top: 1px solid #ddd;
}

.store-container {
    padding: 10px;
}

/* Полноэкранный режим */
//.fullscreen {
//}
</style>
