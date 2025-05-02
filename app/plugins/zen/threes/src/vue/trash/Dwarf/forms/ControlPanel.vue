<template>
    <div v-if="buttons !== null" class="control-panel" :class="float">
        <template v-for="button in buttons">
            <div class="control-panel__separator" v-if="button.type === 'separator'">
                |
            </div>
            <button v-else v-show="show(button)"
                    :class="`btn btn-${ type(button) }`"
                    @click="button.click()"
                    :disabled="disabled(button)"
            >
                <i v-if="button.icon" :class="icon(button)"></i>
                {{ name(button) }}
            </button>
        </template>
    </div>
</template>

<script>
export default {
    name: "ControlPanel",
    props: {
        buttons: {
            type: Array,
            default: null
        },
        float: {
            type: String,
            default: 'right'
        }
    },
    methods: {
        type(button) {
            if (button.type) {
                return button.type
            }
            return 'primary'
        },
        name(button) {
            if (typeof button.name === 'string') {
                return button.name
            }
            return button.name()
        },
        icon(button) {
            if (!button.icon) {
                return null
            }
            if (typeof button.icon === 'string') {
                return button.icon
            }
            return button.icon()
        },
        show(button) {
            if (typeof button.show === 'undefined') {
                return true
            }
            if (typeof button.show === 'boolean') {
                return button.show
            }
            return !!button.show()
        },
        disabled(button) {
            if (typeof button.disabled === 'undefined') {
                return false
            }
            if (typeof button.disabled === 'boolean') {
                return button.disabled
            }
            return !!button.disabled()
        }
    }
}
</script>

<style lang="scss">
.control-panel {
    &__separator {
        color: #d3d3d3;
        display: flex;
        margin-left: 6px;
        margin-right: 16px;
        align-items: center;
        font-size: 24px;
    }
    button {
        transition: 200ms;
        white-space: nowrap;
        &i {
            margin-right: 5px;
        }
    }
    display: flex;
    width: 100%;
    &.right {
        justify-content: flex-end;
    }
    &.left {
        width: auto;
    }
    > button:not(:last-child) {
        margin-right: 10px;
    }
}
</style>
