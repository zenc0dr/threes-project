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
    data() {
        return {
            aliases: {
                '@node_types': '/plugins/zen/threes/assets/images/node_types'
            }
        }
    },
    computed: {
        aliased_src() {
            if (!this.src) {
                return ''
            }

            let processed = this.src;
            for (const key in this.aliases) {
                processed = processed.replace(key, this.aliases[key])
            }

            return processed;
        },
        style() {
            if (!this.aliased_src) {
                return {}
            }

            return {
                backgroundImage: `url(${this.aliased_src})`,
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
