<template>
    <div class="layer-form" v-html="formHtml"></div>
    <button class="btn btn-default" @click="submitForm">Сохранить</button>
</template>
<script>

export default {
    name: 'LayerForm',
    props: {
        layer: null
    },
    data() {
        return {
            formHtml: ''  // здесь будет храниться HTML код загруженной формы
        };
    },
    watch: {
        layer: {
            handler(layer, old_layer) {
                console.log('layer, old_layer', layer, old_layer);

                if (layer) {
                    this.loadForm();
                } else {
                    this.formHtml = '';
                }
            },
            immediate: true // Важно!
        }
    },
    methods: {
        loadForm() {

            // console/zen/threes/layercontroller/update/sgolxee9

            ths.api({
                url: '/console/zen/threes/layercontroller/update/sgolxee9',// Путь к новому API-классу
                then: response => {
                    this.formHtml = response  // Ответ, содержащий HTML формы
                }
            });


            // ths.api({
            //     api: 'layers.Layer:loadForm',  // Путь к новому API-классу
            //     data: {
            //         lid: 'sgolxee9'
            //     },
            //     then: response => {
            //         this.formHtml = response.formHtml;  // Ответ, содержащий HTML формы
            //     }
            // });
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
