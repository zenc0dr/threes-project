<template>
    <div class="node-panel">
        <modal :show="node !== null" @close="close">
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
                            v-model="json"
                            :show-btns="false"
                            :expandedOnStart="true"
                            @json-change="onNodeChange"
                        />
                    </div>
                    <div v-show="active_tab === 'layers'" class="node-panel__content">
                        <Layers :node="node" @update="onNodeChange" />
                    </div>
                </div>
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
import NodeTabs from "../elements/NodeTabs.vue";
import Layers from "../elements/Layers.vue";

export default {
    name: "NodePanel",
    props: {
        node: null,
        fid: null
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
            json: this.node ? JSON.parse(JSON.stringify(this.node)) : null,
            updated: null,
            active_tab: 'layers'
        }
    },
    watch: {
        node: {
            handler(node) {
                if (node) {
                    node = JSON.parse(JSON.stringify(node))
                    this.exeParser(node, node => {
                        this.json = node
                    })
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
        selectTab(tab) {
            console.log('Выбираю', tab)
            this.active_tab = tab
        },
        // Преобразует атрибут exe из строки в объект в случае существования
        exeParser(node, fn) {
            for (let i in node.layers) {
                if (this.isJsonString(node.layers[i].exe)) {
                    node.layers[i].exe = JSON.parse(node.layers[i].exe)
                }
            }
            fn(node)
        },
        // Преобразует атрибут exe из объекта в строку в случае существования
        exeStringifier(node, fn) {
            node.layers.forEach(layer => {
                if (layer.hasOwnProperty('exe')) {
                    if (typeof layer.exe !== 'string') {
                        layer.exe = JSON.stringify(layer.exe);
                    }
                }
            });
            fn(node)
        },
        // Проверяет, не является ли эта строка json-строкой
        isJsonString(str) {
            try {
                JSON.parse(str);
                return true;
            } catch (e) {
                return false;
            }
        },
        // Метод эмитирует событие close родителя
        close() {
            this.$emit("close");
        },
        // Событие с обновлённым нодом + обновление открытого нода
        onNodeChange(node, save) {
            this.updated = node
            if (save) {
                this.saveChanges()
            }
        },
        // Сохранить данные нода
        saveChanges() {
            if (!this.updated) {
                return;
            }

            let node = this.updated
            this.exeStringifier(node, node => {
                ths.api({
                    api: 'nodes.Node:update',
                    data: {
                        fid: this.fid,
                        node
                    },
                    then: response => {
                        this.$emit("update", response.json)
                        this.updated = null
                    },
                });
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
}
</style>
