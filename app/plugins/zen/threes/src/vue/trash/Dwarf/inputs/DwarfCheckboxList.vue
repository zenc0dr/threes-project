<template>
    <div class="checkbox-list" :class="size">
        <div class="checkbox-list__label">
            {{ inner_label }}
        </div>
        <div class="checkbox-list__body">
            <DwarfSearchField v-model="filter_text" :timout="0">
                <template #button>
                    <Button
                        :title="show_checked ? 'Скрыть отмеченные' : 'Показать отмеченные'"
                        @click="show_checked = !show_checked"
                        :icon="button_icon"
                        class="p-button"/>
                </template>
            </DwarfSearchField>
            <div class="checkbox-list__options">
                <DwarfCheckbox
                    v-show="filterAllows(item) && filterChecked(item)"
                    v-for="item in list"
                    :label="item.name"
                    :checked="isChecked(item)"
                    @check="check(item)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import DwarfCheckbox from "./DwarfCheckbox";
import DwarfSearchField from "./DwarfSearchField";
import Button from 'primevue/button';
export default {
    name: "DwarfCheckboxList",
    components: {
        DwarfCheckbox, DwarfSearchField, Button
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Array,
            default: []
        },
        size: {
            type: String,
            default: 'full'
        },
        list: {
            type: Array,
            default: []
        },
        label: {
            type: [String, Function],
            default: 'Строка'
        }
    },
    created() {
        if (!this.modelValue) {
            this.$emit('update:modelValue', [])
        }
    },
    data() {
        return {
            filter_text: null,
            show_checked: false,
        }
    },
    watch: {
        modelValue(modelValue) {
            this.$emit('update:modelValue', modelValue)
        }
    },
    computed: {
        inner_label() {
            if (typeof this.label === 'string') {
                return this.label
            }
            return this.label()
        },
        button_icon() {
            return this.show_checked ? 'pi pi-times-circle' : 'pi pi-check'
        }
    },
    methods: {
        isChecked(item) {
            if (!this.modelValue) {
                return false
            }
            return this.modelValue.includes(item.id)
        },
        check(item) {
            if (this.modelValue.includes(item.id)) {
                let index = this.modelValue.indexOf(item.id)
                this.modelValue.splice(index, 1)
            } else {
                this.modelValue.push(item.id)
            }
        },
        filterAllows(item)
        {
            if (!this.filter_text) {
                return true
            }
            return item.name.toLowerCase().includes(this.filter_text)
        },
        filterChecked(item)
        {
            if (!this.show_checked) {
                return true
            }
            return this.isChecked(item)
        }
    }
}
</script>

<style lang="scss">
.checkbox-list {
    margin-bottom: 20px;

    &__label {
        font-weight: bold;
        color: #676B89;
    }

    .search-field {
        margin-bottom: 7px;
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

    &__options {
        max-height: 291px;
        overflow-y: auto;
    }
}
</style>
