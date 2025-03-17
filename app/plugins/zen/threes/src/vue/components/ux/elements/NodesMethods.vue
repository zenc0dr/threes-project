<template>
<div class="threes_nodes_methods">
    <div
        @click="removeNodes"
        class="threes_nodes_methods__button"
        :class="{inactive: (!nids || nids.length < 1)}"
        title="Удалить выбранные ноды"
    >
        <i class="icon-trash-1" ></i>
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
    emits: ["node_removed"],
    methods: {
        removeNodes()
        {
            ths.api({
                api: 'frames.Frame:removeNodes',
                data: {
                    fid: this.fid,
                    nids: this.nids
                },
                then: () => {
                    this.$emit('node_removed')
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

        &.inactive {
            background: #f9f9f9;
            color: #cdcdcd;
        }
    }
}
</style>
