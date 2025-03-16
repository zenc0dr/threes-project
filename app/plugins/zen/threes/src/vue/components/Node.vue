<template>
<div v-if="node.nid" class="threes-node">
    <template v-for="layer in node.layers">
        <template v-if="layer.aspect === 'threes.units.oc@write'">
            <NodeCode :node="node" :layer="layer" />
        </template>
        <template v-if="layer.aspect === 'threes.units.ui@css'">
            <UiNode :node="node" :layer="layer" />
        </template>
    </template>
</div>
</template>
<script>
import NodeCode from "./nodes/NodeCode.vue";
import UiNode from "./nodes/UiNode.vue";

export default {
    name: "Node",
    emits: ['update'],
    components: {
        NodeCode,
        UiNode
    },
    props: {
        node: null
    },
    methods: {

    }
}
</script>
<style lang="scss">
.threes-node {

}
</style>
