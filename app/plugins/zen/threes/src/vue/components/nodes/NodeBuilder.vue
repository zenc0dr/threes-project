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


        const bm = this.editor.BlockManager;

    //     bm.add('header-block', {
    //         label: 'Шапка',
    //         category: 'Основные',
    //         attributes: { class: 'fa fa-header' },
    //         content: `
    //     <header style="padding: 20px; background: #333; color: #fff; text-align: center;">
    //         <h1>Название сайта</h1>
    //     </header>
    // `
    //     });
    //
    //     bm.add('title-block', {
    //         label: 'Заголовок',
    //         category: 'Основные',
    //         attributes: { class: 'bi bi-type-h1' },
    //         content: `<h1 class="text-center my-4">Заголовок лендинга</h1>`
    //     })
    //
    //     bm.add('text-block', {
    //         label: 'Текст',
    //         category: 'Основные',
    //         attributes: { class: 'bi bi-paragraph' },
    //         content: `<p class="lead text-muted">Это пример параграфа для описания продукта или услуги.</p>`
    //     })
    //
    //     bm.add('image-block', {
    //         label: 'Изображение',
    //         category: 'Основные',
    //         attributes: { class: 'bi bi-image' },
    //         content: `<img src="https://via.placeholder.com/600x300" class="img-fluid rounded" alt="placeholder">`
    //     })
    //
    //     bm.add('button-block', {
    //         label: 'Кнопка',
    //         category: 'Основные',
    //         attributes: { class: 'bi bi-hand-index-thumb' },
    //         content: `<a href="#" class="btn btn-primary">Нажми меня</a>`
    //     })
    //
    //     bm.add('hero-block', {
    //         label: 'Hero',
    //         category: 'Интерфейс',
    //         attributes: { class: 'bi bi-layout-text-window' },
    //         content: `
    // <section class="text-center py-5 bg-light">
    //     <div class="container">
    //         <h1 class="display-4">Добро пожаловать!</h1>
    //         <p class="lead">Создай красивый лендинг прямо сейчас.</p>
    //         <a href="#" class="btn btn-success btn-lg mt-3">Начать</a>
    //     </div>
    // </section>
    // `
    //     });
    //
    //     bm.add('features-block', {
    //         label: 'Особенности',
    //         category: 'Интерфейс',
    //         attributes: { class: 'bi bi-grid-3x3-gap' },
    //         content: `
    // <section class="container py-5">
    //     <div class="row text-center">
    //         <div class="col-md-4">
    //             <i class="bi bi-lightning-charge-fill fs-1 text-primary"></i>
    //             <h5>Быстро</h5>
    //             <p>Моментальная загрузка страниц.</p>
    //         </div>
    //         <div class="col-md-4">
    //             <i class="bi bi-shield-lock-fill fs-1 text-success"></i>
    //             <h5>Безопасно</h5>
    //             <p>Данные под надёжной защитой.</p>
    //         </div>
    //         <div class="col-md-4">
    //             <i class="bi bi-palette-fill fs-1 text-warning"></i>
    //             <h5>Красиво</h5>
    //             <p>Современный и чистый дизайн.</p>
    //         </div>
    //     </div>
    // </section>
    // `
    //     });
    //
    //     bm.add('contact-form-block', {
    //         label: 'Форма',
    //         category: 'Контакты',
    //         attributes: { class: 'bi bi-envelope-fill' },
    //         content: `
    // <section class="container py-5">
    //     <h2>Связаться с нами</h2>
    //     <form>
    //         <div class="mb-3">
    //             <label class="form-label">Имя</label>
    //             <input type="text" class="form-control" placeholder="Ваше имя">
    //         </div>
    //         <div class="mb-3">
    //             <label class="form-label">Email</label>
    //             <input type="email" class="form-control" placeholder="email@example.com">
    //         </div>
    //         <div class="mb-3">
    //             <label class="form-label">Сообщение</label>
    //             <textarea class="form-control" rows="4"></textarea>
    //         </div>
    //         <button type="submit" class="btn btn-primary">Отправить</button>
    //     </form>
    // </section>
    // `
    //     });
    //
    //     bm.add('map-block', {
    //         label: 'Карта',
    //         category: 'Контакты',
    //         attributes: { class: 'bi bi-geo-alt-fill' },
    //         content: `
    // <div class="my-4">
    //     <iframe src="https://yandex.ru/map-widget/v1/-/CCUNZ1EIdB" width="100%" height="300" frameborder="0"></iframe>
    // </div>
    // `
    //     });
    //
    //     bm.add('container-block', {
    //         label: 'Контейнер',
    //         category: 'Сетка',
    //         attributes: { class: 'bi bi-box' },
    //         content: `<div class="container py-4">Контейнер для контента</div>`
    //     });
    //
    //     bm.add('row-cols-block', {
    //         label: 'Ряд с колонками',
    //         category: 'Сетка',
    //         attributes: { class: 'bi bi-columns' },
    //         content: `
    // <div class="container py-4">
    //     <div class="row">
    //         <div class="col-md-6">Левая колонка</div>
    //         <div class="col-md-6">Правая колонка</div>
    //     </div>
    // </div>
    // `
    //     });

        bm.add('full-height-text', {
            label: 'Текст 400px',
            category: 'Layout',
            attributes: { class: 'bi bi-file-text' },
            content: `
    <div style="height: 400px; width: 100%; display: flex; align-items: center; justify-content: center; background: #f8f9fa;">
        <p style="font-size: 1.5rem;">Это текстовый блок 400px высотой</p>
    </div>
    `
        });

        bm.add('half-width-block', {
            label: 'Половинка',
            category: 'Layout',
            attributes: { class: 'bi bi-square-half' },
            content: `
    <div style="width: 50%; float: left; min-height: 300px; background: #e9ecef; display: flex; align-items: center; justify-content: center;">
        <p>50% ширины</p>
    </div>
    `
        });

        bm.add('half-screen-block', {
            label: 'Полэкрана',
            category: 'Layout',
            attributes: { class: 'bi bi-arrows-expand-vertical' },
            content: `
    <div style="width: 100%; height: 50vh; background: #dee2e6; display: flex; align-items: center; justify-content: center;">
        <p style="font-size: 1.25rem;">Блок на полэкрана</p>
    </div>
    `
        });

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
