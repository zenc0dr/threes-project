<template>
<div class="threes_nodes_methods">
    <div
        @click="addNewNode"
        class="threes_nodes_methods__button"
        :class="{inactive:!lines}"
        title="Добавить нод на линию"
    >
        <i class="icon-cube"></i>
    </div>
    <div
        @click="selectAllNodes"
        class="threes_nodes_methods__button"
        :class="{inactive:!lines}"
        title="Выбрать все ноды на схеме"
    >
        <i class="icon-bullseye"></i>
    </div>
    <div
        @click="removeNodes"
        class="threes_nodes_methods__button"
        :class="{inactive:selected_none}"
        title="Удалить выбранные ноды"
    >
        <i class="icon-trash-1" ></i>
    </div>
    <div
        @click="copyNodes"
        class="threes_nodes_methods__button"
        :class="{inactive:selected_none}"
        title="Копировать выбранные ноды"
    >
        <i class="icon-copy"></i>
    </div>
    <div class="threes_nodes_methods__info">
        {{ info }}
    </div>
    <FramePreloader class="threes_nodes_methods__preloader" />
</div>
<modal :show="nodes_store" @close="nodes_store = false">
    <template #default>
        <NodesStore
            :nid="nid"
            :line_index="selected_line_index"
            @update="$emit('update')"
        />
    </template>
</modal>
</template>
<script>
import FramePreloader from './FramePreloader.vue'
import NodesStore from "./NodesStore.vue"
import modal from "./modal.vue"

export default {
    name: 'NodesMethods',
    props: {
        nid: null,
        nids: null,
        info: null,
        lines: null,
        selected_line_index: 0,
    },
    emits: ['update', 'selectAllNodes'],
    components: {
        FramePreloader,
        NodesStore,
        modal
    },
    data() {
        return {
            nodes_store: false
        }
    },
    computed: {
        selected_none() {
            return !this.nids || this.nids.length < 1
        },
    },
    methods: {
        selectAllNodes() {
            this.$emit('selectAllNodes');
        },
        removeNodes()
        {
            if (this.selected_none) {
                return
            }
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.Node:removeNodes',
                    data: {
                        nid: this.nid,
                        nids: this.nids
                    }
                }),
                then: () => {
                    this.$emit('update')
                }
            })
        },
        copyNodes()
        {
            if (this.selected_none) {
                return
            }
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.Node:copyNodes',
                    data: {
                        nid: this.nid,
                        nids: this.nids
                    }
                }),
                then: () => {
                    this.$emit('update')
                }
            })
        },
        addNewNode()
        {
            this.nodes_store = true



            //this.$emit('update')
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
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;

    &__info {
        display: flex;
        color: #707070;
        align-content: center;
        align-items: center;
        margin-left: 10px;
    }

    &__preloader {
        margin-left: auto;
        margin-right: 10px;
    }

    &__button {
        cursor: pointer;
        padding: 3px 5px;
        background: #e9e9e9;
        border-radius: 3px;
        color: #777777;
        transition: 200ms;
        margin: 3px;

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
