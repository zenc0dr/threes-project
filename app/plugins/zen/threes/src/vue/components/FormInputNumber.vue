<template>
    <div class="input-number" :class="size" :style="style">
        <div v-if="innerLabel" class="input-number__label">
            {{ innerLabel }}
        </div>
        <InputNumber
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            :min="min"
            :max="max"
            :step="step"
            mode="decimal"
            showButtons
        />
    </div>
</template>

<script>
import InputNumber from 'primevue/inputnumber'

export default {
    name: 'FormInputNumber',
    components: { InputNumber },
    emits: ['update:modelValue'],
    props: {
        modelValue: Number,
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
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        step: {
            type: Number,
            default: 1
        }
    },
    computed: {
        innerLabel() {
            return typeof this.label === 'function' ? this.label() : this.label
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
