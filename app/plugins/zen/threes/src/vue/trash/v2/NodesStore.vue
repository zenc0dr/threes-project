<template>
<div class="nodes-store">
    <Search :text="search_text" @update:text="getStoreNodes"/>
    <div class="nodes-store__items">
        <div @click="addNode(node.nid)" v-for="node in store_nodes" class="nodes-store__item">
            <div class="nodes-store__title">
                <icon width="20px" height="20px" :src="node.icon" class="nodes-store__icon" />
                <div class="nodes-store__name">
                    {{ node.name }}
                </div>
            </div>
            <div class="nodes-store__nid">{{ node.nid }}</div>
            <div class="nodes-store__desc" v-html="node.description"></div>
        </div>
    </div>
</div>
</template>
<script>
import icon from "./icon.vue"
import Search from "./Search.vue"
export default {
    name: "NodesStore",
    props: {
        nid: null,
        line_index: 0
    },
    emits: [
        'update'
    ],
    components: {
        icon,
        Search
    },
    data() {
        return {
            store_nodes: [],
            search_text: null
        }
    },
    mounted() {
        this.getStoreNodes()
    },
    methods: {
        getStoreNodes(filter_text) {
            if (typeof filter_text === 'undefined') {
                return
            }
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.store:get-store-nodes',
                    data: {
                        filter_text: filter_text
                    }
                }),
                then: response => {
                    this.store_nodes = response.store_nodes
                }
            })
        },
        addNode(nid) {
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.node:add-node',
                    data: {
                        nid,
                        parent_nid: this.nid,
                        line_index: this.line_index
                    }
                }),
                then: () => {
                    this.$emit('update')
                }
            })
        }
    }
}
</script>
<style lang="scss">
.nodes-store {
    padding: 15px;

    &__items {
        display: flex;
    }
    &__nid {
        font-size: 12px;
        background: #f4f4f4;
        color: #323232;
        padding: 3px 10px;
        border-radius: 4px;
    }
    &__item {
        border: 1px solid #666;
        border-radius: 4px;
        padding: 9px 10px;
        margin: 5px;
        font-size: 16px;
        width: 250px;
        height: 140px;
        cursor: pointer;
        transition: 200ms;
        &:hover {
            border-color: #0b7ad1;
            background: #f3faff;
        }
    }
    &__title {
        display: flex;
        align-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    &__icon {

    }
    &__name {
        margin-left: 10px;
        font-weight: bold;
        color: #616161;
    }
    &__desc {
        padding: 10px;
        font-size: 15px;
        p {
            margin-bottom: 0;
        }
    }
}
</style>
