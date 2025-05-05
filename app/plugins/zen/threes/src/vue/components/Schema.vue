<template>
    <div class="threes-schema">
        Schema
    </div>
</template>
<script>
export default {
    name: "Schema",
    data() {
        return {
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
            console.log('Был выбран нод: ' + nid)
            // ths.api({
            //     api: 'ui:get-tree-nodes',
            //     then: response => {
            //         this.tree = response.tree
            //     }
            // })
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
}
</style>
