<template>
  <textarea
      class="node-text"
      v-model="content"
      @input="resize"
      ref="textarea"
  ></textarea>
</template>

<script>
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
            content: this.node.data
        };
    },
    watch: {
        content(newVal) {
            //this.$emit("update:data", newVal);
            console.log('Ввод данных', newVal, this.node)
            this.resize();
        }
    },
    mounted() {
        this.resize();
    },
    methods: {
        resize() {
            const ta = this.$refs.textarea;
            if (ta) {
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
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
