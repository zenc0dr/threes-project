<template>
    <div class="node-document">
        <Node :node="node" v-for="node in node.nodes" scope="document" />
    </div>
</template>
<script>
import Node from '../Node.vue'
export default {
    name: "Document",
    components: {
        Node
    },
    props: {
        node: {
            type: Object,
            required: true
        },
        scope: {
            type: String,
            default: null
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
.node-document {
    background: #fff;
}
</style>
