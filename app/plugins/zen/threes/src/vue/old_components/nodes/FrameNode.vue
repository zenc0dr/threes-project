<template>
    <div class="threes_frame_node" @click.stop="addNodes">
        NODE
    </div>
</template>
<script>
export default {
    name: "FrameNode",
    data() {
        return {
            //ths: window.ths
        }
    },
    methods: {
        addNodes() {
            console.log('Выбраны ноды', ths.data.nids)
        }
    }
}
</script>
<style lang="scss">
.threes_frame_node {

}
</style>
