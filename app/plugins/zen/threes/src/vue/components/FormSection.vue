<template>
    <div class="form-section" :class="size" :style="style">
        <div v-if="innerLabel !== null" class="form-section__label">
            {{ innerLabel }}
        </div>
        <div class="form-section__body">
            <FormFitter
                :scheme="scheme"
                :modelValue="internalValue"
                @update:modelValue="handleUpdate"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormFitter>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormSection',
    props: {
        scheme: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: Object,
            default: () => ({})
        },
        size: {
            type: String,
            default: 'full'
        },
        label: {
            type: [String, Function],
            default: null
        },
        style: {
            type: String,
            default: null
        },
        field: {
            type: String,
            default: null
        }
    },
    computed: {
        innerLabel() {
            return typeof this.label === 'function' ? this.label() : this.label
        },
        internalValue() {
            return this.field ? (this.modelValue?.[this.field] ?? {}) : this.modelValue
        }
    },
    methods: {
        handleUpdate(value) {
            if (this.field) {
                this.$emit('update:modelValue', {
                    ...this.modelValue,
                    [this.field]: value
                })
            } else {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<style lang="scss">
.form-section {
    &.full {
        width: 100%;
    }

    &.half {
        width: calc(50% - 7px);
    }

    &.quarter {
        width: calc(25% - 7px);
    }

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
    }

    &__body {
        width: 100%;
    }
}
</style>
