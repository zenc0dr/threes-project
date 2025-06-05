<template>
    <div class="node-text">
        <template v-if="scope === 'schema'">
            <div class="node-text__header">
                {{ node.name }}
            </div>
        </template>
        <textarea
            class="node-text__content"
            v-model="content"
            @input="onInput"
            ref="textarea"
        >
        </textarea>
    </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
    name: "NodeText",
    props: {
        node: {
            type: Object,
            required: true
        },
        scope: {
            type: String,
            required: false,
            default: null
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
            this.ths.enqueue({
                exec: () => this.ths.api({
                    api: 'nodes.node:update-data',
                    data: {
                        nid: this.node.nid,
                        data
                    }
                }),
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
    background: #fff;
    border-radius: 4px;
    &__header {
        font-size: 18px;
        margin-left: 20px;
        font-weight: bold;
        color: #8c8c8c;
        margin-bottom: -6px;
    }
    &__content {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: 17px;
        resize: none;
        overflow: hidden;
        outline: none;
        border: none;
    }
}

</style>
