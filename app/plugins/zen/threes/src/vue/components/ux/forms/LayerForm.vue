<template>
    <div class="layer-form" v-html="formHtml"></div>
    <div class="btn btn-default" @click="submitForm">Сохранить</div>
</template>
<script>

export default {
    name: 'LayerForm',
    props: {
        layer: null
    },
    data() {
        return {
            formHtml: ''
        }
    },
    watch: {
        layer: {
            handler(layer) {
                if (layer) {
                    this.loadForm();
                } else {
                    this.formHtml = ''
                }
            },
            immediate: true
        }
    },
    methods: {
        loadForm() {
            ths.api({
                url: '/console/zen/threes/layercontroller/update/sgolxee9',// Путь к новому API-классу
                then: response => {
                    this.formHtml = response  // Ответ, содержащий HTML формы
                }
            });
        },
        submitForm() {

        }
    }
}
</script>
<style lang="scss">
.layer-form {
    padding: 20px;
}
</style>
