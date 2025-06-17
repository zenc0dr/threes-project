<template>
    <div class="node-document">
        <Node
            :node="node"
            v-for="node in node.nodes"
            scope="document"
            @remove="removeNode(node)"
        />
        <div v-click-outside="closePanel" @click.self="closePanel" class="node-document__buttons">
            <i v-if="!add_panel" @click.stop="add_panel = true" class="oc-icon-plus node-document__buttons__add"></i>
            <div v-if="add_panel" class="node-document__add-panel">
                <div v-for="type in types" @click.stop="addType(type)" class="node-document__node-type">
                    <i :class="type.icon" :title="type.description"></i>
                    {{ type.name }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Node from '../Node.vue'

export default {
    name: "Document",
    components: {
        Node
    },
    props: {
        node: {
            type: Object,
            required: true
        },
        scope: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            add_panel: false,
            types: [
                {
                    name: 'Текст',
                    icon: 'oc-icon-font',
                    code: 'Threes.NodeText',
                    description: 'Добавляет текстовый блок'
                },
                {
                    name: 'H1',
                    icon: 'oc-icon-heading',
                    code: 'Header',
                    description: 'Добавляет заголовок H1'
                },
            ],
        }
    },
    methods: {
        closePanel() {
            this.add_panel = false;
        },
        addType(type) {
            ths.api({
                api: 'nodes.node:add-node',
                data: {
                    nid: null,
                    type: type.code,
                    target_nid: ths.data.node_selected_nid,
                    direction: 'inside',
                },
                then: response => {
                    ths.exe('Tree', 'getTree')
                    ths.exe('Schema', 'getSchema')
                }
            })
        },
        removeNode(node) {
            ths.api({
                api: 'nodes.node:delete-node',
                data: {
                    nid: node.nid,
                    without_submit: true
                },
                then: response => {
                    ths.exe('Tree', 'getTree')
                    ths.exe('Schema', 'getSchema')
                }
            })
        }
    }
}
</script>
<style lang="scss">
.node-document {
    background: #fff;

    &__buttons {
        background: #f9f9f9;
        padding: 6px 6px;
        display: flex;

        &__add {
            background: #e5e5e5;
            border-radius: 4px;
            padding: 3px 1px 2px 10px;
            font-size: 12px;
            cursor: pointer;
            transition: 300ms;

            &:hover {
                background: #8df1b7;
                color: #1f4a22;
            }
        }
    }
    &__add-panel {
        display: flex;
        flex-direction: row;
    }
    &__node-type {
        padding: 3px 7px;
        background: #f1f1f1;
        border: 1px solid #e7e7e7;
        border-radius: 4px;
        margin: 0px 5px;
        cursor: pointer;

        i {
            margin-right: -5px;
        }
    }
}
</style>
