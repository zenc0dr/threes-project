<template>
<div v-if="node.nid" class="threes-node">
    {{ node.nid }}
</div>
</template>
<script>

export default {
    name: "Node",
    emits: ['update'],
    components: {

    },
    computed: {
        hasCssLayer() {
            //return this.node.layers.some(layer => layer.aspect === 'threes.units.ui@css');
        }
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
