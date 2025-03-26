<template>
    <div class="input-textarea" :class="size">
        <div v-if="inner_label" class="input-text__label">
            {{ inner_label }}
        </div>
        <Textarea :modelValue="modelValue"
                  @input="$emit('update:modelValue', $event.target.value)"
                  :autoResize="true"/>
    </div>
</template>

<script>
import Textarea from 'primevue/textarea';
export default {
    name: "DwarfTextArea",
    components: {
        Textarea
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
