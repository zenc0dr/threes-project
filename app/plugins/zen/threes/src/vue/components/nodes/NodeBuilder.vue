<template>
    <div class="grapes-editor-container">
        <div ref="editorContainer"></div>
    </div>
</template>

<script>
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export default {
    name: 'GrapesEditor',
    mounted() {
        this.editor = grapesjs.init({
            container: this.$refs.editorContainer,
            height: '500px',
            width: 'auto',
            fromElement: false,
            storageManager: { autoload: false }
        });

        this.editor = grapesjs.init({
            container: this.$refs.editorContainer,
            height: '500px',
            width: 'auto',
            fromElement: false,
            storageManager: { autoload: false }
        });

        const bm = this.editor.BlockManager;

        bm.add('header-block', {
            label: 'Шапка',
            category: 'Основные',
            attributes: { class: 'fa fa-header' },
            content: `
        <header style="padding: 20px; background: #333; color: #fff; text-align: center;">
            <h1>Название сайта</h1>
        </header>
    `
        });

        bm.add('button-block', {
            label: 'Кнопка',
            category: 'Основные',
            attributes: { class: 'fa fa-hand-pointer' },
            content: `<button style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px;">Нажми меня</button>`
        });

        bm.add('menu-block', {
            label: 'Меню',
            category: 'Основные',
            attributes: { class: 'fa fa-bars' },
            content: `
        <nav style="background: #f8f8f8; padding: 10px;">
            <ul style="list-style: none; display: flex; gap: 15px; margin: 0; padding: 0;">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Речные круизы</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav>
    `
        });
    },
    unmounted() {
        if (this.editor) {
            this.editor.destroy();
        }
    }
};
</script>

<style scoped>
.grapes-editor-container {
    border: 1px solid #ddd;
}
</style>
