<template>
    <div class="threes-node">
        NODE
    </div>
</template>

<script>
export default {
    name: 'Node',
    props: ['backend', 'nid'],
    data() {
        return {
            nodes: [
                {

                }
            ]
        }
    },
    mounted() {
    },
    methods: {

    }

};
</script>
<style lang="scss">
.threes-node {
    padding: 5px;
    background: #777;
    margin: 4px;
}
</style>
