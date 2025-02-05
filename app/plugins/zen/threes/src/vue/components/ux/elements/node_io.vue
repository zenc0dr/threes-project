<template>
<div v-if="io !== null && io_direction !== null" class="node-io">
    <div class="node-io__pin"
         :title="getTitle(pin)"
         :class="{active:pinState(pin, pin_index)}"
         v-for="(pin, pin_index) in io"
    >
        <template v-if="pin.io_direction === io_direction">
            {{ io_type(pin.io_type) }}
        </template>
    </div>
</div>
</template>
<script>
import icon from "./icon.vue";
export default {
    name: 'node_io',
    components: {
        icon
    },
    props: {
        io: null,
        nid: null,
        io_direction: null,
    },
    methods: {
        io_type(io_type) {
            const io_types = {
                int: 'd',
                float: 'f',
                array: 'a',
                string: 's',
                object: 'o',
                bool: 'b'
            }
            return io_types[io_type] ?? 'x'
        },
        pinState(pin, pin_index) {
            let position = this.nid.split('.')
            let line_index = parseInt(position[0])
            let node_index = parseInt(position[1])
            let direction = pin.io_direction === 'input' ? 0 : 1

            let pin_token = [
                line_index, // Индекс линии
                direction ? node_index + 1 : node_index - 1, // Индекс нода
                direction ? 0 : 1, // Направление
                pin_index, // Индекс пина
                pin.io_type // Тип пина
            ].join('.')

            return ths.data.sprite_pins.includes(pin_token)
        },
        getTitle(pin) {
            let title = pin.io_key + '[' + pin.io_type + '] ' + pin.io_name
            if (pin.io_description) {
                const description = pin.io_description.replace(/<[^>]*>/g, '')
                title += ' (' + description + ')'
            }
            return title
        },
    }
}
</script>
<style lang="scss">
.node-io {
    display: flex;
    flex-direction: column;

    &__pin {
        display: flex;
        border: 1px solid #666;
        background: #f1f1f1;
        padding: 0 4px;
        line-height: 14px;
        border-radius: 4px;
        margin: 2px 0;
        font-size: 11px;
        font-weight: bold;
        color: #5c3b5d;

        &.active {
            background: #1ba135;
            color: #fff;
        }
    }
}
</style>
