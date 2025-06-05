export default {
    mounted() {
        if (this.$options.name) {
            ths.data.components[this.$options.name] = this
        }
    },
    unmounted() {
        if (this.$options.name && ths.data.components[this.$options.name] === this) {
            delete ths.data.components[this.$options.name]
        }
    }
}
