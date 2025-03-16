<template>
<div class="threes_nodes_methods">
    <div @click="removeNodes" class="threes_nodes_methods__button">
        <i class="icon-trash-1"></i>
    </div>
</div>
</template>
<script>
export default {
    name: "NodesMethods",
    props: {
        fid: null,
        nids: null,
    },
    emits: ["remove_nodes"],
    methods: {
        removeNodes()
        {
            ths.api({
                api: 'frames.Frame:removeNodes',
                data: {
                    fid: null,
                    nids: this.selected_nodes
                }
            })
        }
    }
}
</script>

<style lang="scss">
.threes_nodes_methods {
    margin-bottom: 8px;
    display: flex;
    background: #ffffff;
    border: 1px solid #dddddd;
    padding: 6px 7px;
    border-radius: 4px;

    &__button {
        cursor: pointer;
        padding: 3px 5px;
        background: #e9e9e9;
        border-radius: 3px;
        color: #777777;
        transition: 200ms;

        &:hover {
            background: #ffe7ba;
            color: #795512;
        }
    }
}
</style>
