<template>
    <div class="input-textarea" :class="size" :style="style">
        <div v-if="innerLabel" class="input-textarea__label">
            {{ innerLabel }}
        </div>
        <Textarea
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
            :autoResize="true"
        />
    </div>
</template>
<script>
import Textarea from 'primevue/textarea'

export default {
    name: 'FormInputTextArea',
    components: { Textarea },
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
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
.input-textarea {
    margin-bottom: 20px;

    .p-inputtextarea {
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
