<template>
    <div v-if="schema" class="threes-schema">
        <div class="threes-schema__header">
            <div class="threes-schema__title">
                <icon
                    @click="triggerIconUpload"
                    class="threes-schema__icon"
                    :src="schema.icon"
                />
                <input
                    type="file"
                    ref="iconUpload"
                    style="display:none"
                    accept=".svg"
                    @change="onSvgSelect"
                />
                <editable-text
                    class="threes-schema__name"
                    v-model="schema.name"
                    @save="saveName"
                />
                <div class="threes-schema__settings">
                    <icon
                        class="threes-schema__settings__icon"
                        @click="getNodeSettings"
                        src="/plugins/zen/threes/assets/images/icons/cog.svg"
                        height="15px"
                        width="15px"
                    />
                </div>
            </div>
            <editable-text
                class="threes-schema__description"
                v-model="schema.description"
                @save="saveDescription"
            />
        </div>

        <Node :node="schema" scope="self_content" />
        <div class="class-schema__content">
            <Node :node="node" v-for="node in schema.nodes" scope="schema" />
        </div>

        <modal :show="settings" @close="setNodeSettings">
            <template #default>
                <div class="threes-schema__title">
                    <icon class="threes-schema__icon" :src="schema.icon"/>
                    <editable-text
                        class="threes-schema__name"
                        v-model="schema.name"
                        @save="saveName"
                    />
                </div>
                <FormFitter
                    :scheme="settings_scheme"
                    v-model="schema.props"
                />
            </template>
        </modal>
    </div>
</template>

<script>
import icon from './icon.vue'
import EditableText from './EditableText.vue'
import modal from './modal.vue'
import Node from './Node.vue'

export default {
    name: "Schema",
    components: {
        icon,
        modal,
        EditableText,
        Node
    },
    data() {
        return {
            ths: window.ths,
            nid: null,
            schema: null,
            settings: null,
            settings_scheme: [
                {
                    type: 'switcher',
                    field: 'self_content',
                    label: 'Показывать собственный контент',
                },
                {
                    type: 'switcher',
                    field: 'show_children',
                    label: 'Показывать потомков',
                },
                {
                    type: 'switcher',
                    field: 'tree',
                    label: 'Показывать в дереве объектов',
                },
                {
                    type: 'switcher',
                    field: 'schema',
                    label: 'Показывать в схеме',
                },
                {
                    type: 'switcher',
                    field: 'store',
                    label: 'Показывать в магазине',
                },
            ],
        }
    },
    mounted() {
        this.ths.mountComponent('Schema', this)
    },
    unmounted() {
        this.ths.unmountComponent('Schema')
    },
    watch: {
        'ths.data.node_selected_nid': {
            handler(nid) {
                if (nid) {
                    this.nid = nid
                    this.getSchema()
                } else {
                    this.nid = null
                    this.schema = null
                }
            },
            immediate: true
        }
    },
    methods: {
        getSchema() {
            this.ths.api({
                api: 'ui:get-schema-nodes',
                data: {
                    nid: this.nid
                },
                then: response => {
                    this.$router.push(ths.getNodeUrl(this.nid))
                    this.schema = response.schema
                }
            })
        },
        saveName(name) {
            if (!this.nid) {
                return
            }
            this.ths.api({
                api: 'nodes.node:set-node-name',
                data: {
                    nid: this.nid, name
                },
                then: response => {
                    this.ths.exe('Tree', 'getTree')
                }
            })
        },
        saveDescription(description) {
            if (!this.nid) {
                return
            }
            this.ths.api({
                api: 'nodes.node:set-node-description',
                data: {
                    nid: this.nid,
                    description
                },
                then: response => {
                    this.ths.exe('Tree', 'getTree')
                }
            })
        },
        getNodeSettings()
        {
            this.settings = true
        },
        setNodeSettings()
        {
            ths.api({
                api: 'nodes.node:set-node-settings',
                data: {
                    nid: this.nid,
                    settings: this.schema.props
                },
                then: response => {
                    this.settings = null
                    this.getSchema()
                    this.ths.exe('Tree', 'getTree')
                    this.ths.exe('Store', 'getStore')
                }
            })
        },
        triggerIconUpload() {
            this.$refs.iconUpload?.click()
        },
        onSvgSelect(event) {
            const file = event.target.files?.[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => {
                ths.api({
                    api: 'nodes.node:set-node-icon',
                    data: {
                        nid: this.nid,
                        svg: reader.result
                    },
                    then: response => {
                        this.ths.exe('Tree', 'getTree')
                        this.ths.exe('Store', 'getStore')
                        this.getSchema()
                    }
                })
                this.$refs.iconUpload.value = null
            }
            reader.readAsText(file)
        }
    }
}
</script>
<style lang="scss">
.threes-schema {
    flex: 1 1 0;
    min-height: 100%;

    &__icon {
        margin-right: 10px;
    }
    &__title {
        padding: 8px 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    &__header {
        padding: 10px;
        background: #ffffff;
    }
    &__description {
        padding-left: 10px;
        color: #7d7d7d;
    }
    &__name {
        font-size: 24px;
    }
    &__settings {
        margin-left: auto;
        &__icon {
            cursor: pointer;
            color: #000
        }
    }
    .modal-settings {
        padding: 20px;
        .checkbox {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            input[type="checkbox"] {
                width: 16px;
                height: 16px;
            }
        }
    }
    .threes-node {

    }
    .node-inside {
        background: #ffffff;
        margin: 10px;
        padding: 15px;
        border-radius: 5px;
    }
}
</style>
