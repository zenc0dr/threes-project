<template>
    <button @click="executeNode">{{ node.name || 'Button' }}</button>
</template>

<script>
export default {
    props: ['node'],
    methods: {
        executeNode() {
            ths.api({
                api: 'nodes.Node:Execute',
                data: { nid: this.node.nid },
                then: response => console.log(response),
            });
        },
    },
};
</script>
