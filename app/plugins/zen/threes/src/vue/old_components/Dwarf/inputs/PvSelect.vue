<template>
    <div class="input-select" :class="size" :style="style">
        <div v-if="inner_label" class="input-text__label">
            {{ inner_label }}
        </div>
        <Dropdown
            :modelValue="modelValue"
            @change="onInput"
            :editable="!!element.editable"
            :options="inner_options"
            option-label="name"
            option-value="id"
            :loading="preloader"
            :filter="true"
            @filter="filter($event.value)"
            empty-filter-message="Нет совпадений"
            empty-message="Выполните поиск"
        />
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown'; // https://www.primefaces.org/primevue/dropdown
export default {
    name: "PvSelect",
    components: {
        Dropdown
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        options: {
            type: Array,
            default: []
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
            loaded_options: [],
            preloader: false,
            timer: null,
        }
    },
    methods: {
        onInput(event) {
            let data = event.value
            this.$emit('update:modelValue', data)
            /* todo:to_docs element.onChange может быть функцией или строкой*/
            if (this.element && this.element.onChange) {
                if (typeof this.element.onChange === 'function') {
                    this.element.onChange(data)
                } else {
                    APP.data[this.element.onChange](data)
                }
            }
        },
        filter(text) {
            if (!this.search || !text) {
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
        getOptions(text)
        {
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
                        options.unshift({id: -1, name: 'Все'})
                        this.loaded_options = options
                    }
                }
            })
        },
        queryOptions(query) {
            APP.api({
                url: '/api/' + query.url,
                data: query.data,
                then: options => {
                    this.preloader = false
                    if (!options) {
                        this.loaded_options = []
                    } else {
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
.p-dropdown-panel {
    z-index: 10000!important;
}
.input-select {
    margin-bottom: 20px;

    .p-dropdown {
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
