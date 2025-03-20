<template>
    <div class="node-panel">
        <modal max-width="100%" :show="node !== null" @close="close">
            <template #heading>
                {{ title }}
            </template>
            <template #default>
                <div class="node-panel__tabs">
                    <NodeTabs :active_tab="active_tab" @select_tab="selectTab" />
                </div>
                <div class="node-panel__body">
                    <div v-show="active_tab === 'scheme'" class="node-panel__content">
                        <Vue3JsonEditor
                            v-model="edited_node"
                            :show-btns="false"
                            :expandedOnStart="true"
                            @json-change="onNodeChange"
                        />
                    </div>
                    <div v-show="active_tab === 'layers'" class="node-panel__content">
                        <Layers
                            :node="node"
                            :backend="backend"
                            @update="onNodeChange"
                        />
                    </div>
                    <div v-show="active_tab === 'node'" class="node-panel__content">
                        <FormFitter
                            :scheme="node_settings_scheme"
                            v-model="updated_node"
                        />
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="node-panel__footer">
                    <div @click="saveChanges" class="btn btn-default oc-icon-wrench">Применить</div>
                    <div @click="reloadNode" class="btn btn-default oc-icon-refresh">Обновить</div>
                </div>
            </template>
        </modal>
    </div>
</template>
<script>
import modal from "./modal.vue";
import { Vue3JsonEditor } from 'vue3-json-editor'
import NodeTabs from "./NodeTabs.vue";
import Layers from "./Layers.vue";

export default {
    name: "NodePanel",
    props: {
        node: null,
        fid: null,
        backend: null,
    },
    emits: ['close', 'update'],
    components: {
        modal,
        Vue3JsonEditor,
        NodeTabs,
        Layers
    },
    data() {
        return {
            edited_node: this.node ? JSON.parse(JSON.stringify(this.node)) : null,
            updated_node: null,
            active_tab: 'layers',
            node_settings_scheme: [
                {
                    field: 'name',
                    type: 'string',
                    label: 'Название нода',
                    size: 'full'
                },
                {
                    field: 'description',
                    type: 'textEditor',
                    label: 'Описание нода',
                    size: 'full'
                },
            ]
        }
    },
    watch: {
        node: {
            handler(node) {
                if (node) {
                    this.edited_node = JSON.parse(JSON.stringify(node))
                }
            },
            deep: true,
            immediate: true
        },
        active_tab(tab) {
            if (tab === 'node') {
                this.updated_node = JSON.parse(JSON.stringify(this.node))
            }
        }
    },
    computed: {
        title() {
            if (this.node) {
                return `Нод: [${this.node.nid}] ${this.node.name}`;
            }
            return null
        }
    },
    methods: {
        selectTab(tab) {
            this.active_tab = tab
        },
        // Метод эмитирует событие close родителя
        close() {
            this.$emit("close");
        },
        // Событие с обновлённым нодом + обновление открытого нода
        onNodeChange(node, save) {
            this.updated_node = node
            if (save) {
                this.saveChanges()
            }
        },
        // Сохранить данные нода
        saveChanges() {
            if (!this.updated_node) {
                return;
            }
            let node = this.updated_node
            ths.api({
                api: 'nodes.Node:update',
                data: {
                    fid: this.fid,
                    node
                },
                then: response => {
                    this.$emit("update", response.node)
                },
            })
        },
        reloadNode() {
            ths.api({
                api: 'nodes.Node:getNodeDsl',
                data: {
                    fid: this.fid,
                    nid: this.node.nid
                },
                then: response => {
                    this.$emit("update", response.node)
                }
            })
        }
    }
}
</script>
<style lang="scss">
.node-panel {

    &__tabs {

    }

    &__body {

    }

    &__content {

    }

    &__footer {
        .btn:not(:first-child) {
            margin-left: 10px;
        }
    }
}
</style>
