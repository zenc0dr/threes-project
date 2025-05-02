<template>
    <div class="input-number" :class="size" :style="style">
        <div v-if="inner_label" class="input-number__label">
            {{ inner_label }}
        </div>
        <InputNumber :modelValue="modelValue"
                     @input="$emit('update:modelValue', $event.value)"
                     mode="decimal" showButtons :min="min" :max="max" />
    </div>
</template>

<script>
import InputNumber from 'primevue/inputnumber';

export default {
    name: "DwarfNumber",
    components: {
        InputNumber
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        size: {
            type: String,
            default: 'full'
        },
        label: {
            type: [String, Function],
            default: null
        },
        style: {
            type: String,
            default: null,
        },
        min: {
            type: Number,
            default: null,
        },
        max: {
            type: Number,
            default: null,
        },
        element: {
            type: Object,
            default: null,
        },
        width: {
            type: String,
            default: null
        }
    },
    created() {
        if (this.element && this.element.key) {
            APP.data[this.element.key] = this
        }
    },
    computed: {
        inner_label() {
            if (this.label === null) {
                return null
            }
            if (typeof this.label === 'string') {
                return this.label
            }
            return this.label()
        }
    }
}
</script>

<style lang="scss">
.input-number {
    margin-bottom: 20px;

    .p-inputnumber {
        width: 100%;
    }

    > input {
        width: 100%;
    }

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
    }

    &.full {
        width: 100%
    }

    &.half {
        width: calc(50% - 7px);
    }

    &.quarter {
        width: calc(25% - 7px);
    }
}
</style>
