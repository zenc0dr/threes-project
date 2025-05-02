<template>
    <InputSwitch v-model="value"/>
</template>

<script>
import InputSwitch from 'primevue/inputswitch';
export default {
    name: "DwarfSwitch",
    components: {
        InputSwitch
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
    },
    watch: {
        modelValue(modelValue) {
            this.$emit('update:modelValue', modelValue)
        }
    },
    computed: {
        value: {
            get() {
                return !!this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', !!value)
            }
        }
    }
}
</script>
