<template>
    <div class="code-block">
        <div class="code-block__header">
            <input
                v-model="localValue.name"
                class="code-block__input"
                placeholder="Имя метода"
            />
            <input
                v-model="localValue.desc"
                class="code-block__input"
                placeholder="Описание"
            />
        </div>
        <Textarea
            v-model="localValue.code"
            @input="onInput"
        />
    </div>
</template>

<script>
import debounce from 'lodash/debounce'
import Textarea from './textarea.vue'

export default {
    name: "Method",

    components: {
        Textarea
    },

    props: {
        modelValue: {
            type: Object,
            default: () => ({
                name: 'Блок кода без названия',
                desc: 'Описание блока кода',
                code: ''
            })
        }
    },

    data() {
        return {
            localValue: { ...this.modelValue },
            debouncedEmit: null
        }
    },

    watch: {
        modelValue: {
            handler(val) {
                this.localValue = { ...val }
            },
            deep: true
        }
    },

    mounted() {
        this.debouncedEmit = debounce(this.emitUpdate, 500)
    },

    methods: {
        onInput() {
            this.debouncedEmit()
        },

        emitUpdate() {
            this.$emit('update:modelValue', this.localValue)
        }
    }
}
</script>

<style scoped lang="scss">
.code-block {
    background: #f5f5f5;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0;

    &__header {
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
    }

    &__input {
        margin-bottom: 5px;
        padding: 5px 10px;
        font-size: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        width: 100%;

        &:focus {
            border-color: #8df1b7;
        }
    }
}
</style>
