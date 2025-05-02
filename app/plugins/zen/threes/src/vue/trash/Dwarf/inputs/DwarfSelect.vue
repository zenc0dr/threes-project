<template>
    <div class="dwarf-select" :class="size" :style="style">
        <div v-if="inner_label" class="dwarf-select__label">
            {{ inner_label }}
        </div>
        <vSelect
            label="name"
            :reduce="record => record.id"
            :create-option="record => ({id:record, name:record})"
            :options="inner_options"
            :modelValue="modelValue"
            :clearable="!!element.clearable"
            :multiple="!!element.multiple"
            :taggable="!!element.taggable"
            :loading="preloader"
            @update:modelValue="onInput"
            @search="onSearch"
        >
            <template #selected-option="{ id, name }">
                {{ title(id, name) }}
            </template>
            <template #no-options="{ search, searching, loading }">
                <template v-if="search">
                    Совподений не найдено
                </template>
                <template v-else>
                    Опций не обнаружено
                </template>
            </template>
        </vSelect>
    </div>
</template>

<script>
import vSelect from 'vue-select' // https://vue-select.org/guide/install.html#yarn-npm
//import 'vue-select/dist/vue-select.css'; // Стили по умолчанию
import './DwarfSelect.css'

export default {
    name: "DwarfSelect",
    components: {
        vSelect
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        options: {
            type: Array,
            default: null
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
        search: {
            type: String,
            default: null
        },
        element: {
            type: Object,
            default: {}
        },
        loading: {
            type: Boolean,
            default: null
        },
        title_override: {
            type: Function,
            default: null
        }
    },
    mounted() {
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
        },
        inner_options() {
            if (this.loaded_options.length) {
                return this.loaded_options
            }
            return this.options
        }
    },
    data() {
        return {
            search_text: null,
            loaded_options: [],
            preloader: false,
            timer: null,
        }
    },
    watch: {
        loading(state) {
            if (state === null) {
                return
            }
            this.preloader = state
        }
    },
    methods: {
        title(id, name) {

            if (this.title_override) {
                return this.title_override(id, name)
            }

            if (id === name) {
                return name
            }
            if (!this.inner_options.length) {
                return ''
            }
            return name
        },
        onInput(value) {
            this.$emit('update:modelValue', value)
            /* todo:to_docs element.onChange может быть функцией или строкой*/
            if (this.element && this.element.onChange) {
                if (typeof this.element.onChange === 'function') {
                    this.element.onChange(value)
                } else {
                    APP.data[this.element.onChange](value)
                }
            }
        },
        onSearch(text) {
            this.search_text = text
            if (!this.search || !text) {
                return
            }
            if (text.length < 3) {
                return
            }
            this.preloader = true
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                this.getOptions(text)
            }, 300)
        },
        getOptions(text) {
            APP.api({
                url: '/api/' + this.search,
                data: {
                    search_text: text
                },
                then: options => {
                    this.preloader = false
                    if (!options) {
                        this.loaded_options = []
                    } else {
                        if (!this.element.editable) {
                            options.unshift({id: -1, name: 'Все'})
                        }
                        this.loaded_options = options
                    }
                }
            })
        },
        setOptions(options) {
            this.loaded_options = options
        }
    }
}
</script>

<style lang="scss">
.dwarf-select {
    margin-bottom: 20px;

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
