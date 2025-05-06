<template>
<div class="threes-store">
    Store
</div>
</template>
<script>
export default {
    name: "Store",
    data() {
        return {
            ths: window.ths,

        }
    },
    // mounted() {
    //     this.getTree()
    //     this.ths.bus.on('tree:refresh', this.getTree)
    // },
    // unmounted() {
    //     this.ths.bus.off('tree:refresh', this.getTree)
    // },
    // methods: {
    //     getStore() {
    //
    //     }
    // }
}
</script>
<style lang="scss">
.threes-store {
    background: #c156ff;
    padding: 15px;
}
</style>
