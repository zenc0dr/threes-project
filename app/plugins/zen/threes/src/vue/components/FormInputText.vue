<template>
    <div class="input-text" :class="size" :style="style">
        <div v-if="innerLabel" class="input-text__label">
            {{ innerLabel }}
        </div>
        <InputText
            :type="type"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
        />
    </div>
</template>

<script>
import InputText from 'primevue/inputtext'

export default {
    name: 'FormInputText',
    components: { InputText },
    emits: ['update:modelValue'],
    props: {
        modelValue: [String, Number],
        type: {
            type: String,
            default: 'text' // или 'password'
        },
        size: {
            type: String,
            default: 'full'
        },
        style: {
            type: String,
            default: null
        },
        label: {
            type: [String, Function],
            default: null
        },
        element: {
            type: Object,
            default: null
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
.input-text {
    margin-bottom: 20px;

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
