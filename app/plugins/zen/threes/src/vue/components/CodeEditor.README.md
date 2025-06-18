# CodeEditor Vue3 Component

Легковесный редактор кода с подсветкой синтаксиса на основе CodeMirror 6.

## Установленные зависимости

```bash
pnpm add codemirror @codemirror/state @codemirror/view @codemirror/lang-javascript @codemirror/lang-php @codemirror/lang-python @codemirror/lang-html @codemirror/lang-css @codemirror/lang-sql @codemirror/lang-json @codemirror/lang-xml @codemirror/lang-yaml @codemirror/lang-markdown @codemirror/theme-one-dark
```

## Поддерживаемые языки

- JavaScript
- PHP
- Python
- HTML
- CSS
- SQL
- JSON
- XML
- YAML
- Markdown
- TypeScript

## Использование

### Базовое использование

```vue
<template>
  <CodeEditor v-model="code" language="javascript" />
</template>

<script>
import CodeEditor from './CodeEditor.vue'

export default {
  components: { CodeEditor },
  data() {
    return {
      code: 'console.log("Hello, World!");'
    }
  }
}
</script>
```

### С настройками

```vue
<template>
  <CodeEditor 
    v-model="code" 
    language="php"
    theme="dark"
    :height="'400px'"
    :showToolbar="true"
    :readOnly="false"
  />
</template>
```

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `modelValue` | String | `''` | Содержимое редактора |
| `language` | String | `'javascript'` | Язык программирования для подсветки |
| `theme` | String | `'light'` | Тема: `'light'` или `'dark'` |
| `showToolbar` | Boolean | `true` | Показывать панель с выбором языка |
| `height` | String | `'300px'` | Высота редактора |
| `readOnly` | Boolean | `false` | Режим только для чтения |

## События

| Событие | Описание |
|---------|----------|
| `update:modelValue` | Вызывается при изменении содержимого |

## Методы

| Метод | Описание |
|-------|----------|
| `getValue()` | Получить текущее содержимое |
| `setValue(value)` | Установить содержимое |
| `focus()` | Установить фокус на редактор |

## Интеграция с Threes.Method.vue

Для замены `<Textarea v-model="data.code" />` в компоненте `Threes.Method.vue`:

1. Импортируйте компонент:
```javascript
import CodeEditor from '../CodeEditor.vue'
```

2. Добавьте в components:
```javascript
components: {
    modal,
    CodeEditor
}
```

3. Замените textarea:
```vue
<div v-if="data.show_code" class="code-block__code">
    <CodeEditor 
        v-model="data.code" 
        :language="data.language || 'javascript'"
        :height="'300px'"
    />
</div>
```

4. Добавьте поле для выбора языка в настройки:
```javascript
settings_scheme: [
    // ... существующие поля
    {
        type: 'dropdown',
        field: 'language',
        label: 'Язык программирования',
        options: [
            { value: 'javascript', label: 'JavaScript' },
            { value: 'php', label: 'PHP' },
            { value: 'python', label: 'Python' },
            { value: 'html', label: 'HTML' },
            { value: 'css', label: 'CSS' },
            { value: 'sql', label: 'SQL' },
            { value: 'json', label: 'JSON' },
            { value: 'xml', label: 'XML' },
            { value: 'yaml', label: 'YAML' },
            { value: 'markdown', label: 'Markdown' },
            { value: 'typescript', label: 'TypeScript' }
        ]
    }
]
```

## Особенности

- Автоматическое изменение размера
- Debounced обновление (300ms)
- Поддержка темной и светлой темы
- Монопространственный шрифт
- Нумерация строк
- Подсветка синтаксиса в реальном времени 