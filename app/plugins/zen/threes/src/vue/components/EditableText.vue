<template>
    <input
        ref="input"
        type="text"
        class="editable-text"
        v-model="model_value"
        @input="onInput"
        @blur="stopEditing"
        @keyup.enter="stopEditing"
    />
</template>

<script>
import debounce from 'lodash/debounce'

export default {
    name: 'EditableText',
    props: {
        modelValue: {
            type: String,
            required: true
        },
        debounceDelay: {
            type: Number,
            default: 1000
        }
    },
    emits: ['update:modelValue', 'save'],
    mounted() {
        this.debounced_save = debounce(this.triggerSave, this.debounceDelay)
    },
    data() {
        return {
            is_editing: false,
            model_value: this.modelValue,
            debounced_save: null
        }
    },
    watch: {
        modelValue(val) {
            this.model_value = val
        }
    },
    methods: {
        onInput() {
            this.$emit('update:modelValue', this.model_value)
            this.debounced_save()
        },
        stopEditing() {
            this.is_editing = false
        },
        triggerSave() {
            this.$emit('save', this.model_value)
        }
    }
}
</script>

<style>
.editable-text {
    all: unset;
    width: 100%;
    white-space: nowrap;
    border: none;
    text-overflow: ellipsis;
}
</style>
