<template>
    <div class="node-panel">
        <modal :show="node !== null" @close="close">
            <template #heading>
                {{ title }}
            </template>
            <template #default>
                <Vue3JsonEditor
                    v-model="json"
                    :show-btns="false"
                    :expandedOnStart="true"
                    @json-change="onNodeChange"
                />
            </template>
        </modal>
    </div>
</template>
<script>
import modal from "../elements/modal.vue";
import { Vue3JsonEditor } from 'vue3-json-editor'
export default {
    name: "NodePanel",
    props: {
        node: null,
        fid: null
    },
    emits: ['close', 'update'],
    components: {
        modal,
        Vue3JsonEditor
    },
    computed: {
        json: {
            get() {
                return this.node
            },
            set() {

            }
        },
        title() {
            if (this.node) {
                return `Нод: [${this.node.nid}] ${this.node.name}`;
            }
            return null
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
        onNodeChange(node) {
            ths.api({
                api: 'nodes.Node:update',
                data: {
                    fid: this.fid,
                    node
                },
                then: () => {
                    this.$emit("update");
                },
            });
        }
    }
}
</script>
<style lang="scss">
.node-panel {

}
</style>
