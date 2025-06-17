<template>
    <div class="node-text">
        <template v-if="scope === 'schema'">
            <div class="node-text__header">
                {{ node.name }}
            </div>
        </template>
        <Textarea v-model="content" />
    </div>
</template>

<script>
import Textarea from '../Textarea.vue';

export default {
    name: "NodeText",
    components: {
        Textarea,
    },
    props: {
        node: {
            type: Object,
            required: true,
        },
        scope: {
            type: String,
            required: false,
            default: null,
        },
    },
    data() {
        return {
            content: this.node.data,
            ths: window.ths,
        };
    },
    watch: {
        content(newVal, oldVal) {
            if (newVal === oldVal) return;
            this.updateData(newVal);
        },
    },
    methods: {
        updateData(data) {
            this.ths.api({
                api: 'nodes.node:update-data',
                data: {
                    nid: this.node.nid,
                    data,
                },
            });
        },
    },
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
}
</style>
