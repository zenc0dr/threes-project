<template>
    <div class="input-switch" :class="size" :style="style">
        <div v-if="innerLabel" class="input-switch__label">
            {{ innerLabel }}
        </div>
        <InputSwitch v-model="value" />
    </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch'

export default {
    name: 'FormInputSwitcher',
    components: { InputSwitch },
    emits: ['update:modelValue'],
    props: {
        modelValue: Boolean,
        label: {
            type: [String, Function],
            default: null
        },
        size: {
            type: String,
            default: 'full'
        },
        style: {
            type: String,
            default: null
        }
    },
    computed: {
        value: {
            get() {
                return !!this.modelValue
            },
            set(val) {
                this.$emit('update:modelValue', !!val)
            }
        },
        innerLabel() {
            return typeof this.label === 'function' ? this.label() : this.label
        }
    }
}
</script>

<style lang="scss">
.input-switch {
    margin-bottom: 20px;

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
    }

    &.full {
        width: 100%;
    }

    &.half {
        width: calc(50% - 7px);
    }

    &.quarter {
        width: calc(25% - 7px);
    }
}
</style>
