<template>
    <div class="threes-icon" :style="style"></div>
</template>
<script>
export default {
    name: "icon",
    props: {
        src: null,
        width: '30px',
        height: '30px'
    },
    computed: {
        style() {
            return {
                backgroundImage: `url(${this.src})`,
                width: this.width,
                height: this.height
            }
        }
    }
}
</script>
<style lang="scss">
.threes-icon {
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
