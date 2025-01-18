<template>
<div class="ths-sprite">
    <div class="ths-nodes">
        <div v-for="node in nodes" class="ths-node">
            <div class="ths-node__header">
                <div class="ths-node__header__name">
                    {{ node.name }} ({{ node.nid }})
                </div>
            </div>
            <div class="ths-node__body">
                <div class="ths-node__io">
                    io
                </div>
                <div class="ths-node__ui">
                    UI
                </div>
                <div class="ths-node__io">
                    io
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import ThreesNodeIo from "../components/ThreesNodeIo.vue";
export default {
    name: "SpriteScheme",
    components: {
        ThreesNodeIo
    },
    data() {
        return {
            sid: null,
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
                api: 'Sprites.Records:get',
                data: {
                    sid: this.sid
                },
                then: response => {
                    this.nodes = response.nodes
                }
            })
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
        padding: 6px 12px;
    }

    &__body {
        background-color: #63a2ff;
        display: flex;
        flex-direction: row;
    }

    &__ui {
        background-color: #f69a22;
        flex: 1 1 0;
    }

    &__io {
        background-color: #22e4f6;
        width: 150px;
    }
}
</style>
