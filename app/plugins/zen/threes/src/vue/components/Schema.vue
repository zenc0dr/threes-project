<template>
    <div v-if="node" class="threes-schema">
        <div class="threes-schema__header">
            <div class="threes-schema__title">
                <icon class="threes-schema__icon" :src="node.icon"/>
                <div class="threes-schema__name">{{ node.name }}</div>
            </div>
            <div class="threes-schema__description">

            </div>
        </div>
    </div>
</template>
<script>
import icon from './icon.vue'
export default {
    name: "Schema",
    components: {
        icon
    },
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
                if (nid) {
                    this.getSchema(nid)
                }
            },
            immediate: true
        }
    },
    methods: {
        getSchema(nid) {
            ths.api({
                api: 'ui:get-schema-nodes',
                data: {
                    nid
                },
                then: response => {
                    this.node = response.node
                    this.tree = response.tree
                }
            })
        }
    }
}
</script>
<style lang="scss">
.threes-schema {
    background: #83ff56;
    padding: 15px;
    flex: 1 1 0;
    min-height: 100%;

    &__header {
        padding: 5px;
        background: #3accf8;
    }
    &__title {
        display: flex;
        flex-direction: row;
    }
    &__name {
        font-size: 24px;
    }
}
</style>
