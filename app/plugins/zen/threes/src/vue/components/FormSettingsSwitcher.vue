<template>
    <div class="settings-switch" :class="{active: modelValue}">
        <div v-if="innerLabel" class="settings-switch__label">
            {{ innerLabel }}
        </div>
        <InputSwitch v-model="value" />
    </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch'

export default {
    name: 'FormSettingsSwitcher',
    components: { InputSwitch },
    emits: ['update:modelValue'],
    props: {
        modelValue: Boolean,
        label: {
            type: [String, Function],
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
.settings-switch {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background: #eeeeee;
    border-radius: 5px;
    padding: 8px 10px;
    align-items: center;
    margin-bottom: 4px;
    transition: 400ms;

    &__label {
        color: #525252;
        font-size: 15px;
    }

    &.active {
        background: #dbffcf;
    }
}
</style>
