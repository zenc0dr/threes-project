<template>
    <div class="switcher" :class="size">
        <div class="switcher__label">
            {{ inner_label }}
        </div>
        <InputSwitch v-model="value"/>
    </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch';

export default {
    name: "DwarfSwitcher",
    components: {
        InputSwitch
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        size: {
            type: String,
            default: 'full'
        },
        label: {
            type: [String, Function],
            default: 'Строка'
        },
        type: {
            type: String,
            default: null,
        }
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
        },
        inner_label() {
            if (typeof this.label === 'string') {
                return this.label
            }
            return this.label()
        }
    }
}
</script>

<style lang="scss">
.switcher {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 8px 16px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    margin-bottom: 20px;
    margin-top: 24px;

    .p-inputswitch {
        margin-top: -2px;
        margin-bottom: -1px;
    }

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 13px;
        margin-top: -73px;
        margin-left: -16px;
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
    &.activator {
        padding: 6px 16px;
        margin-top: 25px;

        .activator_label {
            color: #c5c5c5;
            &.active {
                color: green;
            }
        }
    }
}
</style>
