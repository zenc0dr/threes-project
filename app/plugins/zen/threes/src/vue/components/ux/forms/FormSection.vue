<template>
    <div class="form-section" :class="size" :style="style">
        <div v-if="inner_label !== null" class="form-section__label">
            {{ inner_label }}
        </div>
        <div class="form-section__body">
            <FormFitter :scheme="scheme"
                        :modelValue="modelValue"
                        @update:modelValue="$emit('update:modelValue', $event)">
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormFitter>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormSection",
    emits: ['update:modelValue'],
    props: {
        scheme: null,
        modelValue: null,
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
            default: null,
        },
    },
    created() {
        if (!this.modelValue) {
            let fields = this.getSchemeFields(this.scheme)
            let model = {}
            fields.forEach(field => {
                model[field] = null
            })
            this.$emit('update:modelValue', model)
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
    },
    methods: {
        getSchemeFields(scheme) {
            let fields = []
            this.schemeBypass(scheme, fields)
            return fields
        },
        schemeBypass(scheme, fields) {
            for (let i in scheme) {
                if (scheme[i].field) {
                    fields.push(scheme[i].field)
                }
                if (scheme[i].scheme) {
                    this.schemeBypass(scheme[i].scheme, fields)
                }
            }
        },
    }
}
</script>

<style lang="scss">
.form-section {
    //padding: 15px;

    &.full {
        width: 100%
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

    }
}
</style>
