<template>
    <milkdown :editor="editor" />
</template>

<script setup>
import { Milkdown, useEditor } from '@milkdown/vue'
import { Editor, defaultValueCtx } from '@milkdown/core'

// 🥇 ПЕРВЫМ подключаем GFM — он регистрирует `doc`, `paragraph`, `list_item`, и др.
import { gfm } from '@milkdown/preset-gfm'

// Остальные плагины
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { history } from '@milkdown/plugin-history'
import { clipboard } from '@milkdown/plugin-clipboard'
import { indent } from '@milkdown/plugin-indent'
import { block } from '@milkdown/plugin-block'
import { cursor } from '@milkdown/plugin-cursor'
import { slashFactory } from '@milkdown/plugin-slash'
import { commonmark } from '@milkdown/preset-commonmark'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['update:modelValue'])

const editor = useEditor((root) =>
    Editor.make({ root })
        .config((ctx) => {
            ctx.set(defaultValueCtx, props.modelValue)
            ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
                emit('update:modelValue', markdown)
            })
        })
        .use(commonmark)        // добавляем commonmark первым
        .use(gfm)               // затем gfm с поддержкой подсветки синтаксиса
        .use(listener)
        .use(history)
        .use(clipboard)
        .use(indent)
        .use(block)
        .use(cursor)
        .use(slashFactory())
)

</script>

<style scoped>
/* 🌿 Milkdown UI базовая стилизация */
:deep(.milkdown) {
    font-family: 'Exo 2', sans-serif;
    font-size: 16px;
    padding: 12px 16px;
    background: #f5fff8;
    color: #1e4620;
    border: 1px solid #a4d4b4;
    border-radius: 8px;
    line-height: 1.6;
    min-height: 200px;
    outline: none;
    white-space: pre-wrap;
}

:deep(.milkdown h1) {
    font-size: 1.6em;
    color: #227c4a;
}
:deep(.milkdown code) {
    background: #e1f6ed;
    padding: 2px 4px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 90%;
}
</style>
