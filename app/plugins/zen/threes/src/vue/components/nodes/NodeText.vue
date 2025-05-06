<template>
  <textarea
      class="node-text"
      v-model="content"
      @input="onInput"
      ref="textarea"
  ></textarea>
</template>

<script>
import { debounce } from 'lodash'

export default {
    name: "NodeText",
    props: {
        node: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            content: this.node.data,
            ths: window.ths,
            debouncedUpdate: null
        };
    },
    watch: {
        content(new_val, old_val) {
            if (new_val === old_val) {
                return;
            }
            this.debouncedUpdate()
        }
    },
    mounted() {
        this.resize()
        this.debouncedUpdate = debounce(() => this.updateData(this.content), 2000)
    },
    methods: {
        onInput() {
            this.resize()
        },
        resize() {
            const ta = this.$refs.textarea
            if (ta) {
                ta.style.height = "auto"
                ta.style.height = ta.scrollHeight + "px"
            }
        },
        updateData(data) {
            this.ths.api({
                api: 'nodes.node:update-data',
                data: {
                    nid: this.node.nid,
                    data
                },
                then: () => {
                    this.ths.bus.emit('schema:refresh')
                }
            });
        }
    }
};
</script>

<style lang="scss">
.node-text {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    padding: 5px 10px;
    margin: 7px 5px;
    border-radius: 4px;
    font-size: 17px;
    resize: none;
    overflow: hidden;
    outline: none;
    border: none;
}
</style>
