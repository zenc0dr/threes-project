<template>
    <div class="input-select" :class="size" :style="style">
        <div v-if="innerLabel" class="input-select__label">
            {{ innerLabel }}
        </div>
        <vSelect
            :options="innerOptions"
            :reduce="record => record.id"
            label="name"
            :modelValue="modelValue"
            :clearable="editable"
            :multiple="multiple"
            :taggable="editable"
            :create-option="text => ({ id: text, name: text })"
            :loading="preloader"
            @search="handleSearch"
            @update:modelValue="onInput"
        >
            <template #selected-option="{ id, name }">
                {{ renderTitle(id, name) }}
            </template>
            <template #no-options="{ search }">
                <span v-if="search">Совпадений не найдено</span>
                <span v-else>Опции отсутствуют</span>
            </template>
        </vSelect>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
    name: 'FormInputSelect',
    components: { vSelect },
    emits: ['update:modelValue'],
    props: {
        modelValue: [String, Number, Array],
        label: [String, Function],
        size: {
            type: String,
            default: 'full'
        },
        style: String,
        options: {
            type: Array,
            default: () => []
        },
        search: String,
        multiple: Boolean,
        editable: Boolean,
        element: Object
    },
    data() {
        return {
            loadedOptions: [],
            searchText: '',
            preloader: false,
            timer: null
        }
    },
    computed: {
        innerLabel() {
            return typeof this.label === 'function' ? this.label() : this.label
        },
        innerOptions() {
            return this.loadedOptions.length ? this.loadedOptions : this.options
        }
    },
    methods: {
        onInput(value) {
            this.$emit('update:modelValue', value)
        },
        handleSearch(text) {
            this.searchText = text
            if (!this.search || text.length < 3) return

            this.preloader = true
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.fetchOptions(text)
            }, 300)
        },
        fetchOptions(query) {
            ths.enqueue({
                exec: () => ths.api({
                    api: '/api/' + this.search,
                    data: {
                        search_text: query
                    }
                }),
                then: options => {
                    this.preloader = false
                    this.loadedOptions = options || []
                    if (!this.editable && this.loadedOptions.length) {
                        this.loadedOptions.unshift({ id: -1, name: 'Все' })
                    }
                }
            })
        },
        renderTitle(id, name) {
            return this.element?.title_override?.(id, name) ?? name
        }
    }
}
</script>

<style lang="scss">
.input-select {
    margin-bottom: 20px;

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
    }

    &.full {
        width: 100%;
    }

    &.half {
        width: calc(50% - 7px);
    }

    &.quarter {
        width: calc(25% - 7px);
    }
}
</style>
