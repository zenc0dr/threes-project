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
        <textarea
            ref="textarea"
            v-model="localValue.code"
            @input="onInput"
            @keydown="onKeydown"
            class="code-block__textarea"
            placeholder="Код метода..."
        ></textarea>
    </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
    name: "Method",

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
        this.resize()
    },

    methods: {
        onInput() {
            this.resize()
            this.debouncedEmit()
        },

        resize() {
            const ta = this.$refs.textarea
            if (ta) {
                ta.style.height = 'auto'
                ta.style.height = ta.scrollHeight + 'px'
            }
        },

        emitUpdate() {
            this.$emit('update:modelValue', this.localValue)
        },

        onKeydown(e) {
            if (e.key === 'Backspace' && !this.localValue.code.trim()) {
                this.$emit('remove')
            }
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

    &__textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: 15px;
        resize: none;
        overflow: hidden;
        outline: none;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: #fff;

        &:focus {
            border-color: #8df1b7;
        }
    }
}
</style>
