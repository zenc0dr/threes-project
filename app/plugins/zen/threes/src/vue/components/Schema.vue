<template>
    <div v-if="schema" class="threes-schema">
        <div class="threes-schema__header">
            <div class="threes-schema__title">
                <icon class="threes-schema__icon" :src="schema.icon"/>
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
            <Node :node="node" v-for="node in schema.children" scope="schema" />
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
                <div class="modal-settings">
                    <label class="checkbox">
                        <input type="checkbox" v-model="schema.props.self_content" />
                        <span>Показывать собственный контент</span>
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" v-model="schema.props.show_children" />
                        <span>Показывать потомков</span>
                    </label>
                </div>
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
            nid: null,
            schema: null,
            settings: null,
            ths: window.ths,
        }
    },
    mounted() {
        this.ths.bus.on('schema:refresh', this.getSchema)
    },
    unmounted() {
        this.ths.bus.off('schema:refresh', this.getSchema)
    },
    watch: {
        'ths.data.selected_nid': {
            handler(nid) {
                if (nid) {
                    this.nid = nid
                    this.getSchema()
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
                    this.ths.bus.emit('tree:refresh')
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
                    this.ths.bus.emit('tree:refresh')
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
                }
            })
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
