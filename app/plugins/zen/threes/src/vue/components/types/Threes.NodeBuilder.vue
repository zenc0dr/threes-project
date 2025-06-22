<template>
    <div class="grapes-editor-container">
        <div ref="editorContainer"></div>
        <div class="grapes-editor-container__panel">
            <button class="save-button" @click="saveContent">
                💾 Сохранить
            </button>
        </div>
    </div>
</template>

<script>
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export default {
    name: 'GrapesEditor',
    props: {
        node: {
            type: Object,
            required: true
        },
        scope: {
            type: String,
            required: false,
            default: null
        }
    },
    mounted() {
        console.log('Монтирую grapesjs')
        this.editor = grapesjs.init({
            container: this.$refs.editorContainer,
            height: '500px',
            width: 'auto',
            fromElement: false,
            storageManager: { autoload: false },
            canvas: {
                styles: [
                    'http://threes.dc/modules/backend/assets/vendor/bootstrap/bootstrap.css',
                    'http://threes.dc/modules/backend/assets/vendor/bootstrap-icons/bootstrap-icons.css',
                    'http://threes.dc/modules/backend/assets/css/october.css',
                    'http://threes.dc/plugins/zen/threes/assets/css/threes.css'
                ],
                scripts: [
                    'http://threes.dc/modules/system/assets/js/vendor/jquery.min.js',
                    'http://threes.dc/modules/backend/assets/vendor/bootstrap/bootstrap.min.js'
                ]
            }
        })

        if (this.node.data) {
            try {
                this.editor.setComponents(this.node.data);
            } catch (e) {
                console.warn('Ошибка при загрузке компонента:', e);
            }
        }

        const bm = this.editor.BlockManager;

        bm.add('spacer-block', {
            label: 'Пустое место',
            category: 'Layout',
            attributes: { class: 'bi bi-arrow-down' },
            content: `<div style="height: 100px;"></div>`
        });

        bm.add('centered-box', {
            label: 'Центрированный блок',
            category: 'Layout',
            attributes: { class: 'bi bi-layout-text-center' },
            content: `
    <div style="width: 100%; display: flex; align-items: center; justify-content: center; padding: 50px 0; background: #f1f3f5;">
        <div style="max-width: 600px; text-align: center;">
            <h2>Центрированный контент</h2>
            <p>Абзац или любой другой элемент.</p>
        </div>
    </div>
    `
        });

        bm.add('background-image-block', {
            label: 'Фон-картинка',
            category: 'Layout',
            attributes: { class: 'bi bi-image-alt' },
            content: `
    <div style="height: 60vh; background: url('https://via.placeholder.com/1200x600') center/cover no-repeat;">
        <div style="height: 100%; display: flex; align-items: center; justify-content: center; color: white; text-shadow: 1px 1px 4px #000;">
            <h2>Заголовок на фоне</h2>
        </div>
    </div>
    `
        });
    },

    methods: {
        saveContent() {
            const html = this.editor.getHtml()
            ths.enqueue({
                exec: () => ths.api({
                    api: 'nodes.node:update-data',
                    data: {
                        nid: this.node.nid,
                        data: html,
                        scope: this.scope,
                    }
                })
            });
        }
    },

    unmounted() {
        if (this.editor) {
            this.editor.destroy()
        }
    }
};
</script>

<style scoped>
.grapes-editor-container {
    border: 1px solid #ddd;
    position: relative;
    padding-bottom: 60px; /* под панель */
}

.grapes-editor-container__panel {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 10px;
    background: #fafafa;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
}

.save-button {
    background-color: #3490dc;
    color: white;
    border: none;
    padding: 8px 20px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.save-button:hover {
    background-color: #2779bd;
}
</style>
