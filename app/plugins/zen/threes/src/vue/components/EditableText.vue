<template>
    <span v-if="!is_editing" @click="is_editing = true">
        <slot>{{ model_value }}</slot>
    </span>
    <input
        v-else
        ref="input"
        type="text"
        class="editable-text__input"
        v-model="model_value"
        @input="onInput"
        @blur="stopEditing"
        @keyup.enter="stopEditing"
    />
</template>

<script>
import { debounce } from 'lodash'

export default {
    name: 'EditableText',
    props: {
        modelValue: {
            type: String,
            required: true
        },
        debounceDelay: {
            type: Number,
            default: 2000
        }
    },
    emits: ['update:modelValue', 'save'],
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
    },
    mounted() {
        this.debounced_save = debounce(this.triggerSave, this.debounceDelay)
    }
}
</script>

<style scoped>
.editable-text__input {
    font-size: 24px;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
