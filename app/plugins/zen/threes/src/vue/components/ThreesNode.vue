<template>
    <div class="threes-node" :style="style">
        <div class="threes-node__io">
            <node_io :nid="nid" io_direction="input" :io="io(node.io, 'input')" />
        </div>
        <div class="threes-node__wrap">
            <div class="threes-node__header">
                <icon class="threes-node__icon" width="25px" height="25px" :src="node.icon" />
                <div class="threes-node__name">
                    {{ node.name }}
                </div>
            </div>
            <div class="threes-node__body"></div>
        </div>
        <div class="threes-node__io">
            <node_io :nid="nid" io_direction="output" :io="io(node.io, 'output')" />
        </div>
    </div>
</template>
<script>
import icon from "./ux/elements/icon.vue";
import node_io from "./ux/elements/node_io.vue";
export default {
    name: "ThreesNode",
    components: {
        icon,
        node_io
    },
    props: {
        node: null,
        nid: null, // Вид 0.0, {индекс линии}.{индекс нода}
        hovering: { // Объект содержащий данные о перемещении
            type: Object,
            default: {}
        }
    },
    methods: {
        io(io, direction) {
            return io.filter(el => el.io_direction === direction);
        },
        icon(src) {
            return {
                'background-image':`url(${src})`
            }
        },
        style() {
            if (this.hovering === {}) {
                return {}
            }
            return {
                position: 'absolute',
                left: this.hovering.x,
                top: this.hovering.y
            }
        }
    }
}
</script>
<style lang="scss">
.threes-node {
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border: 2px solid #96abc3;
    border-radius: 4px;
    min-height: 80px;
    margin: 0 4px;
    justify-content: space-between;
    align-content: space-between;
    cursor: pointer;
    user-select: none;
    transition: 200ms;

    &:hover {
        border-color: #3e8fe8;
        background-color: #f1f5fa;
    }

    &__wrap {
        padding: 5px;
    }

    &__io {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;
    }

    &__header {
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
    }

    &__icon {
        margin-right: 5px;
    }

    &__name {
        font-size: 14px;
        line-height: 14px;
        color: #565656;
    }

    &__body {
        background-color: #f6f6f6;
        border-radius: 3px;
        padding: 3px 8px;
        min-height: 10px;
    }
}
</style>
