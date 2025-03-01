<template>
    <span v-if="!html" class="spinner-border spinner-loader" role="status"></span>
    <span v-else v-html="html"></span>
</template>

<script>
export default {
    name: "Spinner",
    props: {
        html: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss">
.spinner-loader {
    font-size: 16px;
    width: 15px;
    height: 15px;
    color: #a181dc;
}
</style>
