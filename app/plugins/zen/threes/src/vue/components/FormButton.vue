<template>
    <button
        v-if="isShown"
        class="btn"
        :class="`btn-${variant}`"
        :disabled="isDisabled"
        @click="handleClick"
    >
        <i v-if="resolvedIcon" :class="resolvedIcon" class="me-1"></i>
        {{ resolvedLabel }}
    </button>
</template>

<script>
export default {
    name: 'FormButton',
    props: {
        label: {
            type: [String, Function],
            default: 'Button'
        },
        icon: {
            type: [String, Function],
            default: null
        },
        variant: {
            type: String,
            default: 'primary'
        },
        show: {
            type: [Boolean, Function],
            default: true
        },
        disabled: {
            type: [Boolean, Function],
            default: false
        },
        onClick: {
            type: Function,
            default: null
        },
        modelValue: {
            type: Object,
            default: null
        }
    },
    emits: ['action'],
    computed: {
        resolvedLabel() {
            return typeof this.label === 'function'
                ? this.label(this.modelValue)
                : this.label ?? 'Button'
        },
        resolvedIcon() {
            return typeof this.icon === 'function'
                ? this.icon(this.modelValue)
                : this.icon
        },
        isShown() {
            return typeof this.show === 'function'
                ? this.show(this.modelValue)
                : this.show !== false
        },
        isDisabled() {
            return typeof this.disabled === 'function'
                ? this.disabled(this.modelValue)
                : !!this.disabled
        }
    },
    methods: {
        handleClick() {
            if (this.isDisabled) return
            if (typeof this.onClick === 'function') {
                this.onClick(this.modelValue)
            }
            this.$emit('action') // опционально
        }
    }
}
</script>

<style scoped>
button {
    transition: 0.2s;
    white-space: nowrap;
    padding: 6px 12px;
    border-radius: 6px;
    font-weight: 500;
}
</style>
