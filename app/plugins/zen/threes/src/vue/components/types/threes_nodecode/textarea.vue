<template>
  <textarea
      ref="textarea"
      v-model="localContent"
      @input="onInput"
      @keydown="onKeydown"
    class="node-text__content"
    ></textarea>
</template>

<script>
import { debounce } from 'lodash'

export default {
    name: 'NodeText',

    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            localContent: this.modelValue,
            debouncedEmit: null
        }
    },

    watch: {
        modelValue(val) {
            this.localContent = val
        }
    },

    mounted() {
        this.debouncedEmit = debounce(this.emitUpdate, 500)
        this.resize()
    },

    methods: {
        onInput() {
            this.resize()
            this.debouncedEmit()
        },

        resize() {
            const ta = this.$refs.textarea
            if (ta) {
                ta.style.height = 'auto'
                ta.style.height = ta.scrollHeight + 'px'
            }
        },

        emitUpdate() {
            this.$emit('update:modelValue', this.localContent)
        },

        onKeydown(e) {
            if (e.key === 'Backspace' && this.localContent === '') {
                this.$emit('remove')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.node-text__content {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 17px;
    resize: none;
    overflow: hidden;
    outline: none;
    border: none;
}
</style>
