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
            <template #footer>
                <div @click="saveChanges" class="btn btn-default">Применить изменения</div>
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
    data() {
        return {
            json: this.node ? JSON.parse(JSON.stringify(this.node)) : null,
            updated: null,
        }
    },
    watch: {
        node: {
            handler(node) {
                if (node) {
                    this.json = JSON.parse(JSON.stringify(node))
                }
            },
            deep: true,
            immediate: true
        }
    },
    computed: {
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
            this.updated = node
        },
        saveChanges() {
            if (!this.updated) {
                return;
            }
            ths.api({
                api: 'nodes.Node:update',
                data: {
                    fid: this.fid,
                    node: this.updated
                },
                then: response => {
                    this.$emit("update", response.json)
                    this.updated = null
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
