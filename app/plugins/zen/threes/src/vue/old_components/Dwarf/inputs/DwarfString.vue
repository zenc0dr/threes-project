<!--
Типы полей:
    string (Поле ввода)
        field: 'email',
        label: 'email',
        type: 'string',
        size: 'full'
-->
<template>
    <div class="input-text" :class="size" :style="style">
        <div v-if="inner_label" class="input-text__label">
            {{ inner_label }}
        </div>
        <InputText :type="type"
                   :modelValue="modelValue"
                   autoComplete="new-password"
                   @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
    name: "DwarfString",
    components: {
        InputText
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: 'full'
        },
        style: {
            type: String,
            default: null,
        },
        label: {
            type: [String, Function],
            default: null
        },
        element: {
            type: Object,
            default: null,
        }
    },
    created() {
        if (this.element && this.element.key) {
            APP.data[this.element.key] = this
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
.input-text {
    margin-bottom: 20px;

    > input {
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
