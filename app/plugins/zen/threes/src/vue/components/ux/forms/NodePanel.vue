<template>
    <modal :show="node !== null" @close="close">
        <div class="node-panel">
            Панель управления нодом: {{ node.name }}
        </div>
    </modal>
</template>
<script>
import modal from "../elements/modal.vue";
export default {
    name: "NodePanel",
    props: {
        node: null
    },
    emits: ['close'],
    components: {
        modal
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }
}
</script>
<style lang="scss">
.node-panel {

}
</style>
