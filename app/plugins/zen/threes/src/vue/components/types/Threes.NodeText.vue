<template>
    <div class="node-text" v-if="scope === 'schema'">
        <div class="node-text__header">
            {{ node.name }}
        </div>
        <Textarea v-model="content" />
    </div>
    <template v-else>
        <Textarea v-model="content" @remove="$emit('remove')" />
        <div class="node-text__content">
            <Node :node="node" v-for="node in node.nodes" scope="content" />
        </div>
    </template>
</template>

<script>
import Textarea from '../Textarea.vue';
import Node from "../Node.vue";
export default {
    name: "NodeText",
    components: {
        Node,
        Textarea,
    },
    emits: ["remove"],
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

    &__content {

    }
}
</style>
