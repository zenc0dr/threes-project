<template>
    <div class="form">
        <template v-for="(element, index) in scheme" :key="element.field || index">
            <slot v-if="element.slot" :name="element.slot" />
            <component
                v-else
                :is="resolveComponent(element.type)"
                v-bind="getProps(element)"
                :modelValue="getValue(element)"
                @update:modelValue="val => updateValue(element, val)"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </component>
        </template>
    </div>
</template>

<script>
import components from '../../js/components-map'

export default {
    name: 'FormFitter',
    props: {
        scheme: Array,
        modelValue: Object,
    },
    emits: ['update:modelValue'],
    methods: {
        resolveComponent(type) {
            return components[type] || 'div'
        },
        getValue(element) {
            return element.field ? this.modelValue?.[element.field] : this.modelValue
        },
        updateValue(element, value) {
            if (element.field) {
                this.$emit('update:modelValue', {
                    ...this.modelValue,
                    [element.field]: value
                })
            } else {
                this.$emit('update:modelValue', value)
            }
        },
        getProps(element) {
            const { type, field, slot, ...rest } = element
            return rest
        }
    }
}
</script>

<style lang="scss">
.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}
</style>
