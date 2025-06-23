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
import debounce from 'lodash/debounce'

export default {
    name: 'Textarea',
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
            const ta = this.$refs.textarea;
            if (ta) {
                ta.style.height = 'auto';
                const minHeight = parseFloat(getComputedStyle(ta).lineHeight) || 20;
                ta.style.height = Math.max(ta.scrollHeight, minHeight) + 'px';
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
<style lang="scss">
.node-text__content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 17px;
    resize: none;
    overflow: hidden;
    outline: none;
    border: none;
}
.threes-schema > .node-text__content{
    overflow-y: auto;
}
</style>
