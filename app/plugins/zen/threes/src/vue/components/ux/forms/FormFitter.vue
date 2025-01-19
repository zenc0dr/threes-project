<template>
    <div class="form">
        <template v-for="element in scheme">
            <template v-if="element.slot">
                <slot :name="element.slot"></slot>
            </template>
            <Tabs v-if="element.type === 'tabs'"
                  :element="element"
                  :modelValue="modelValue"
                  @update:modelValue="$emit('update:modelValue', $event)"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </Tabs>
            <FormSection
                v-if="element.type === 'section' && element.field"
                :size="element.size"
                :label="element.label"
                :scheme="element.scheme"
                :style="element.style"
                :modelValue="modelValue[element.field]"
                @update:modelValue="modelValue[element.field] = $event"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormSection>
            <FormSection
                v-if="element.type === 'section' && !element.field"
                :size="element.size"
                :label="element.label"
                :scheme="element.scheme"
                :style="element.style"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormSection>
            <template v-if="modelValue">
                <String
                    v-if="element.type === 'string'|| element.type === 'password'"
                    :type="element.type === 'password' ? 'password' : 'text'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :style="element.style"
                    :element="element"
                />

                <Number
                    v-if="element.type === 'number'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :style="element.style"
                    :min="element.min"
                    :max="element.max"
                    :element="element"
                />

                <Select
                    v-if="element.type === 'select'"
                    :size="element.size"
                    :label="element.label"
                    :options="element.options"
                    :style="element.style"
                    :search="element.search"
                    :element="element"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                />
            </template>
        </template>
    </div>
</template>

<script>
import Tabs from "./Tabs";
import String from "../inputs/String.vue";
import Number from "../inputs/Number.vue";
import Select from "../inputs/Select.vue";

export default {
    name: "FormFitter",
    emits: ['update:modelValue'],
    components: {
        Tabs,
        String,
        Number,
        Select
    },
    props: {
        scheme: {
            type: Object,
            default: null
        },
        modelValue: null
    },
    data() {
        return {
            form_data: null
        }
    },
    watch: {
        modelValue: {
            handler(modelValue) {
                this.$emit('update:modelValue', modelValue);
            },
            deep: true
        }
    }
}
</script>

<style lang="scss">
.form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
