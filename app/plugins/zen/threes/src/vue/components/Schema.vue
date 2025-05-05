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
            </div>
            <div class="threes-schema__description" v-html="node.description"/>
        </div>
    </div>
</template>

<script>
import icon from './icon.vue'
import EditableText from './EditableText.vue'

export default {
    name: "Schema",
    components: { icon, EditableText },
    data() {
        return {
            node: null,
            schema: null,
            ths: window.ths,
        }
    },
    watch: {
        'ths.data.selected_nid': {
            handler(nid) {
                if (nid) this.getSchema(nid)
            },
            immediate: true
        }
    },
    methods: {
        getSchema(nid) {
            this.ths.api({
                api: 'ui:get-schema-nodes',
                data: { nid },
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
    }
    &__name {
        font-size: 24px;
    }
}
</style>
