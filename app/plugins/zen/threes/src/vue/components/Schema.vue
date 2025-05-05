<template>
    <div v-if="node" class="threes-schema">
        <div class="threes-schema__header">
            <div class="threes-schema__title">
                <icon class="threes-schema__icon" :src="node.icon"/>
                <editable-text
                    class="threes-schema__name"
                    v-model="node.name"
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
            <div class="threes-schema__description" v-html="node.description"/>
        </div>
        <div class="class-schema__content">
            <div v-for="item in schema" class="threes-node">

            </div>
        </div>
        <modal :show="settings !== null" @close="setNodeSettings">
            <template #default>
                <div class="threes-schema__title">
                    <icon class="threes-schema__icon" :src="node.icon"/>
                    <editable-text
                        class="threes-schema__name"
                        v-model="node.name"
                        @save="saveName"
                    />
                </div>
                <div class="modal-settings">
                    <label class="checkbox">
                        <input type="checkbox" v-model="settings.self_content" />
                        <span>Показывать собственный контент</span>
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" v-model="settings.show_children" />
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

export default {
    name: "Schema",
    components: {
        icon,
        modal,
        EditableText,
    },
    data() {
        return {
            nid: null,
            node: null,
            schema: null,
            settings: null,
            ths: window.ths,
        }
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
                    this.node = response.node
                    this.schema = response.tree
                }
            })
        },
        saveName(name) {
            if (!this.node?.nid || !name) return
            this.ths.api({
                api: 'nodes.node:set-node-name',
                data: {
                    nid: this.node.nid, name
                },
                then: response => {
                    this.ths.bus.emit('tree:refresh')
                }
            })
        },
        getNodeSettings()
        {
            ths.api({
                api: 'nodes.node:get-node-settings',
                data: {
                    nid: this.node.nid,
                },
                then: response => {
                    this.settings = response.settings
                }
            })
        },
        setNodeSettings()
        {
            ths.api({
                api: 'nodes.node:set-node-settings',
                data: {
                    nid: this.node.nid,
                    settings: this.settings
                },
                then: response => {
                    this.settings = null
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
}
</style>
