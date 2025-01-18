<template>
    <div class="io">
        <div v-for="connector in io" class="io__connector">
            <div class="io__type" :title="connector.io_type">
                <img class="io-icon" :src="`/plugins/zen/threes/assets/images/icons/io_type_${connector.io_type}.svg`">
            </div>
            <div class="io__key" :title="connector.io_name">
                {{ connector.io_key }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NoteIo',
    props: {
        node: {
            type: Object,
            default: null
        },
        io_direction: {
            default: null,
            type: String
        }
    },
    data() {
        return {}
    },
    computed: {
        io() {
            const io = []
            if (!this.node.scheme.data) {
                return []
            }
            for (let i in this.node.scheme.data.io) {
                let connector = this.node.scheme.data.io[i]
                if (connector.io_direction === this.io_direction) {
                    io.push(connector)
                }
            }
            return io
        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
.io {
    color: #fff;
    padding: 5px;
    margin: 2px;

    img.io-icon {
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 4px;
        padding: 2px;
        margin-top: -3px;
    }

    &__connector {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #e0e0e0;
        padding: 2px;
        border-radius: 4px;
        margin-bottom: 4px;

        > div {
            margin: 2px;
        }
    }

    &__key {
        background: #86589e;
        color: #ffffff;
        padding: 0 6px;
        border-radius: 4px;
        font-weight: bold;
        font-size: 14px;
    }

    &__name {
        color: #666;
    }
}
</style>
