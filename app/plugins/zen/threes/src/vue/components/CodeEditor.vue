<template>
  <div class="code-editor">
    <div class="code-editor__toolbar" v-if="showToolbar">
      <select v-model="currentLanguage" @change="changeLanguage" class="code-editor__language-select">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="sql">SQL</option>
        <option value="json">JSON</option>
        <option value="xml">XML</option>
        <option value="yaml">YAML</option>
        <option value="markdown">Markdown</option>
        <option value="typescript">TypeScript</option>
      </select>
    </div>
    <div ref="editorContainer" class="code-editor__container"></div>
  </div>
</template>

<script>
import { EditorView, ViewPlugin, lineNumbers, keymap } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { bracketMatching } from '@codemirror/language'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'
import { javascript } from '@codemirror/lang-javascript'
import { php } from '@codemirror/lang-php'
import { python } from '@codemirror/lang-python'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { sql } from '@codemirror/lang-sql'
import { json } from '@codemirror/lang-json'
import { xml } from '@codemirror/lang-xml'
import { yaml } from '@codemirror/lang-yaml'
import { markdown } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import debounce from 'lodash/debounce'

export default {
  name: 'CodeEditor',
  
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'light', // 'light' или 'dark'
      validator: value => ['light', 'dark'].includes(value)
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '300px'
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      editor: null,
      currentLanguage: this.language,
      debouncedEmit: null,
      languageExtensions: {
        javascript: javascript(),
        php: php(),
        python: python(),
        html: html(),
        css: css(),
        sql: sql(),
        json: json(),
        xml: xml(),
        yaml: yaml(),
        markdown: markdown(),
        typescript: javascript({ typescript: true })
      }
    }
  },

  mounted() {
    this.debouncedEmit = debounce(this.emitUpdate, 300)
    this.$nextTick(() => {
      this.initEditor()
    })
  },

  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy()
    }
  },

  watch: {
    modelValue(newValue) {
      if (this.editor && newValue !== this.editor.state.doc.toString()) {
        this.editor.dispatch({
          changes: {
            from: 0,
            to: this.editor.state.doc.length,
            insert: newValue
          }
        })
      }
    },
    
    language(newLanguage) {
      this.currentLanguage = newLanguage
      this.changeLanguage()
    }
  },

  methods: {
    // Создаем собственный basicSetup
    createBasicSetup() {
      return [
        lineNumbers(),
        bracketMatching(),
        closeBrackets(),
        history(),
        keymap.of([
          ...closeBracketsKeymap,
          ...defaultKeymap,
          ...historyKeymap
        ])
      ]
    },

    initEditor() {
      try {
        const extensions = [
          ...this.createBasicSetup(),
          this.languageExtensions[this.currentLanguage] || javascript(),
          this.theme === 'dark' ? oneDark : [],
          ViewPlugin.define(view => ({
            update: (update) => {
              if (update.docChanged) {
                this.debouncedEmit()
              }
            }
          })),
          EditorView.theme({
            '&': {
              height: this.height,
              fontSize: '14px'
            },
            '.cm-editor': {
              border: '1px solid #ddd',
              borderRadius: '4px'
            },
            '.cm-scroller': {
              fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace'
            }
          })
        ]

        if (this.readOnly) {
          extensions.push(EditorState.readOnly.of(true))
        }

        const state = EditorState.create({
          doc: this.modelValue,
          extensions
        })

        this.editor = new EditorView({
          state,
          parent: this.$refs.editorContainer
        })
      } catch (error) {
        console.error('Ошибка инициализации CodeEditor:', error)
        this.createFallbackTextarea()
      }
    },

    changeLanguage() {
      if (this.editor) {
        try {
          const newExtension = this.languageExtensions[this.currentLanguage] || javascript()
          
          // Создаем новое состояние с обновленными расширениями
          const newState = EditorState.create({
            doc: this.editor.state.doc,
            extensions: [
              ...this.createBasicSetup(),
              newExtension,
              this.theme === 'dark' ? oneDark : [],
              ViewPlugin.define(view => ({
                update: (update) => {
                  if (update.docChanged) {
                    this.debouncedEmit()
                  }
                }
              })),
              EditorView.theme({
                '&': {
                  height: this.height,
                  fontSize: '14px'
                },
                '.cm-editor': {
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                },
                '.cm-scroller': {
                  fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace'
                }
              })
            ]
          })
          
          // Применяем новое состояние
          this.editor.setState(newState)
        } catch (error) {
          console.error('Ошибка смены языка в CodeEditor:', error)
        }
      }
    },

    createFallbackTextarea() {
      const textarea = document.createElement('textarea')
      textarea.value = this.modelValue
      textarea.style.width = '100%'
      textarea.style.height = this.height
      textarea.style.fontFamily = 'Monaco, Menlo, "Ubuntu Mono", monospace'
      textarea.style.fontSize = '14px'
      textarea.style.border = '1px solid #ddd'
      textarea.style.borderRadius = '4px'
      textarea.style.padding = '8px'
      textarea.style.resize = 'vertical'
      
      textarea.addEventListener('input', (e) => {
        this.$emit('update:modelValue', e.target.value)
      })
      
      this.$refs.editorContainer.appendChild(textarea)
    },

    emitUpdate() {
      if (this.editor) {
        const content = this.editor.state.doc.toString()
        this.$emit('update:modelValue', content)
      }
    },

    // Публичные методы для внешнего использования
    getValue() {
      return this.editor ? this.editor.state.doc.toString() : ''
    },

    setValue(value) {
      if (this.editor) {
        this.editor.dispatch({
          changes: {
            from: 0,
            to: this.editor.state.doc.length,
            insert: value
          }
        })
      }
    },

    focus() {
      if (this.editor) {
        this.editor.focus()
      }
    }
  }
}
</script>

<style lang="scss">
.code-editor {
  &__toolbar {
    display: flex;
    align-items: center;
    padding: 8px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }

  &__language-select {
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: white;
    font-size: 12px;
    cursor: pointer;
    
    &:focus {
      outline: none;
      border-color: #007cba;
    }
  }

  &__container {
    .cm-editor {
      border-radius: 0 0 4px 4px;
    }
  }
}

// Стили для темной темы
.cm-theme-dark {
  .code-editor__toolbar {
    background: #2d3748;
    border-color: #4a5568;
  }
  
  .code-editor__language-select {
    background: #4a5568;
    border-color: #718096;
    color: white;
  }
}
</style> 