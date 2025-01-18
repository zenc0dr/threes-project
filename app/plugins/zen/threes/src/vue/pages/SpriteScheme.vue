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
    </div>
    <ThreesModal :heading="node ? `[ ${node.nid} ]: ` + node.name : null" :show="node" @close="node = null">
        <pre>{{ node }}</pre>
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
            sid: null,
            node: null,
            nodes: [],
            scheme: [
                {
                    code: null,

                }
            ]
        }
    },
    mounted() {
        this.sid = this.$route.params.sid
        this.testLoadContent()
    },
    methods: {
        testLoadContent() {
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
        openNodeSettings(node) {
            this.node = node
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
</style>
