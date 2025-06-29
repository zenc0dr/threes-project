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
        <div class="threes-layout">
            <div class="threes-sidebar">
                <Tree />
                <User />
            </div>
            <div class="threes-main">
                <Schema />
            </div>
        </div>
    </div>
</template>
<script>
import Tree from '../components/Tree.vue'
import Schema from '../components/Schema.vue'
import Store from '../components/Store.vue'
import User from '../components/User.vue'

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
        Store,
        User
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

.threes-layout {
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
}

.threes-sidebar {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-right: 1px solid #e2e2e2;
    flex-shrink: 0;
    min-width: 250px;
    max-width: 400px;
    width: 300px;
    height: 100%;
    overflow: hidden;
}

.threes-main {
    flex: 1 1 auto;
    height: 100%;
    overflow-y: auto;
    background: #f4f4f4;
}
</style>
