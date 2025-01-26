<template>
<div v-if="io !== null && io_direction !== null" class="node-io">
    <div class="node-io__pin" v-for="pin in io">
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
        }
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
        padding: 0px 4px;
        line-height: 14px;
        border-radius: 4px;
        margin: 2px 0;
        font-size: 11px;
        font-weight: bold;
        color: #5c3b5d;
    }
}
</style>
