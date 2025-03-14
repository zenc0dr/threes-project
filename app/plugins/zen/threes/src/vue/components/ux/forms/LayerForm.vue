<template>
    <div v-html="formHtml"></div>
    <button class="btn btn-default" @click="submitForm">Сохранить</button>
</template>
<script>

export default {
    name: 'LayerForm',
    data() {
        return {
            formHtml: ''  // здесь будет храниться HTML код загруженной формы
        };
    },
    mounted() {
        this.loadForm();
    },
    unmounted() {
        this.formHtml = ''
    },
    methods: {
        loadForm() {
            ths.api({
                api: 'layers.Layer:loadForm',  // Путь к новому API-классу
                data: {
                    lid: 'sgolxee9'
                },
                then: response => {
                    this.formHtml = response.formHtml;  // Ответ, содержащий HTML формы
                }
            });
        },
        submitForm() {

        }
    }
}
</script>
<style lang="scss">

</style>
