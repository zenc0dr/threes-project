<template>
<div class="threes-layers">
    <div class="threes-layers__panel">
        <div v-for="layer in layers" class="threes-layers__layer">
            <pre>{{ layer }}</pre>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "Layers",
    props: {
        node: null
    },
    computed: {
        layers() {
            return this.node?.layers ?? []
        }
    }
}
</script>
<style lang="scss">
.threes-layers {
    display: flex;
    flex-direction: row;

    &__panel {

    }

    &__layer {

    }
}
</style>
