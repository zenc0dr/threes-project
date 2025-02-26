<template>
    <div class="threes-node" :style="style">
        <template v-if="!node.type">
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
        </template>
        <template v-else-if="ifArchitectNode(node.type)">
            <div class="threes-node__architect" :class="'node-type__' + node.type">
                <icon class="threes-node__architect__icon" :src="`@node_types/${ node.type }.svg`"/>
            </div>
        </template>
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
        hovering: null // тут приходит nid
    },
    computed: {
        style() {
            if (this.hovering && this.nid === this.hovering) {
                return {
                    position: 'absolute',
                    left: (ths.data.mouse.x - 1) + 'px',
                    top: (ths.data.mouse.y - 1) + 'px',
                    zIndex: 1000,
                    opacity: 0.8,
                    filter: 'blur(1px)'
                }
            } else {
                return {}
            }
        }
    },
    methods: {
        io(io, direction) {
            return io.filter(el => el.io_direction === direction)
        },
        icon(src) {
            return {
                'background-image':`url(${src})`
            }
        },
        ifArchitectNode(type) {
            return ['if', 'else', 'do', 'input', 'for', 'end', 'set', 'var'].includes(type)
        }
    }
}
</script>
<style lang="scss">
.threes-node {
    display: flex;
    position: relative;
    flex-direction: row;
    background-color: #ffffff;
    border: 1px solid #96abc3;
    border-radius: 4px;
    min-height: 80px;
    margin: 0 4px;
    justify-content: space-between;
    align-content: space-between;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    transition: 100ms;

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

    &__architect {
        display: flex;
        padding: 15px;
        background: #def0ff;
        color: #6e7987;
        font-size: 27px;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 4px;
        align-items: center;

        &__icon {
            margin-right: 5px;
        }

        &.node-type_if {

        }
        &.node-type_else {

        }
        &.node-type_do {

        }
    }
}
</style>
