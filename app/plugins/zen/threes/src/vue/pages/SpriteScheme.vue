<template>
<div class="ths-sprite">
    <div class="ths-nodes">
        <div v-for="node in nodes" class="ths-node">
            <div class="ths-node__header">
                <div class="ths-node__header__name">
                    {{ node.name }} ({{ node.nid }})
                </div>
                <div class="ths-node__header__settings">
                    <div @click="openNodeSettings(node)" class="ths-node__header__btn"></div>
                </div>
            </div>
            <div class="ths-node__body">
                <div class="ths-node__io">
                    <ThreesNodeIo io_direction="input" :node="node"/>
                </div>
                <div class="ths-node__ui">
                    UI
                </div>
                <div class="ths-node__io">
                    <ThreesNodeIo io_direction="output" :node="node"/>
                </div>
            </div>
        </div>
        <div @click="addNode" class="ths-add">
            +
        </div>
    </div>
    <ThreesModal :show="!!node" @close="closeNodeSettings">
        <template #heading>
            {{ node ? `[ ${node.nid} ]: ` + node.name : null }}
        </template>
        <template #default>
            <FormFitter
                :scheme="node_scheme"
                v-model="node_data"
            />
        </template>
        <template #footer>
        </template>
    </ThreesModal>
</div>
</template>
<script>
import ThreesNodeIo from "../components/ThreesNodeIo.vue";
import ThreesModal from "../components/ThreesModal.vue";
export default {
    name: "SpriteScheme",
    components: {
        ThreesNodeIo,
        ThreesModal
    },
    data() {
        return {
            node_scheme: null,
            node_data: null,
            sid: null,
            node: null,
            nodes: [],
        }
    },
    mounted() {
        this.sid = this.$route.params.sid
        this.loadNodes()
    },
    watch: {
        node_data: {
            handler(value, precursor) {
                if (precursor) {
                    console.log('Изменил настройки нода')
                }
            },
            deep: true
        },
    },
    methods: {
        loadNodes() {
            ths.api({
                api: 'Sprites.Nodes:getNodes',
                data: {
                    sid: this.sid
                },
                then: response => {
                    this.nodes = response.nodes
                }
            })
        },
        addNode() {
            ths.api({
                api: 'Sprites.Nodes:addNode',
                then: response => {
                    this.nodes.push(response.node)
                }
            })
        },
        openNodeSettings(node) {
            this.buildNodeScheme(node)
            this.node = node
        },
        closeNodeSettings() {
            this.node = null
            this.node_scheme = null
            this.node_data = null
        },
        buildNodeScheme(node)
        {
            let node_scheme = [
                {
                    field: 'name',
                    type: 'string',
                    label: 'Название нода',
                    size: 'half',
                },
                {
                    field: 'nid',
                    type: 'string',
                    label: 'Код нода',
                    size: 'quarter',
                },
                {
                    field: 'type',
                    type: 'select',
                    label: 'Тип нода',
                    size: 'quarter',
                    options: [
                        {
                            id: 'unit',
                            name: 'unit'
                        }
                    ],
                },
            ]
            let node_data = {
                nid: node.nid,
                name: node.name,
                type: node.type,
            }

            if (node.type === 'unit') {
                node_scheme.push({
                    field: 'uid',
                    type: 'string',
                    label: 'Код юнита',
                    size: 'half',
                })
                node_data.uid = node.scheme.uid
            }

            this.node_data = node_data
            this.node_scheme = node_scheme
        }
    },
}
</script>
<style lang="scss">

$border: 1px solid #cdcdcd;
$border_radius: 4px;

.ths-sprite {
    min-height: 300px;
    background-color: #e9edf3;
    border-radius: $border_radius;
}

.ths-nodes {
    padding: 15px;
    border-radius: $border_radius;
}

.ths-node {
    background-color: #f8f8f8;
    border-radius: $border_radius;
    border: $border;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    &__header {
        display: flex;
        flex-direction: row;
        padding: 6px 12px;
        justify-content: space-between;

        &__name {

        }

        &__settings {

        }

        &__btn {
            width: 20px;
            height: 20px;
            cursor: pointer;
            background-image: url("/plugins/zen/threes/assets/images/icons/cog.svg");
            background-size: contain;
            background-repeat: no-repeat;
            transition: 200ms;
            &:hover {
                transform: scale(1.3);
            }
            &:active {
                transform: scale(0.8);
            }
        }
    }

    &__body {
        display: flex;
        flex-direction: row;
    }

    &__ui {
        background-color: #f69a22;
        flex: 1 1 0;
    }

    &__io {
        width: 300px;
    }
}

.ths-add {
    background: #d1d1d1;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: #7a7a7a;
    transition: 200ms;
    cursor: pointer;
    &:hover {
        background: #efc7ff;
    }
}

</style>
