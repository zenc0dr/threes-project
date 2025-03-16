
const axios = require('axios');
const md5 = require('md5');
import { createApp } from 'vue';
import { reactive } from 'vue'
import router from './routes';
import PrimeVue from 'primevue/config';
import vuedraggable from 'vuedraggable';
import Threes from '../vue/Threes.vue'

window._ = require('lodash');
window.ths = {
    requests_register: {},
    auth_token: null,

    /* Объект для хранения глобальных данных */
    data: reactive({
        ui_streams: [],
    }),

    api(opts) {
        let domain = location.origin
        let data = (opts.data) ? opts.data : null
        let axios_options = null
        let api_url = opts.api ? '/threes.api/' + opts.api : opts.url
        let request_key = md5(api_url + JSON.stringify(data))

        /* For debug */
        console.log('Threes query [' + request_key + ']: ' + api_url, data)

        if (this.auth_token) {
            axios_options = {
                withCredentials: true,
                headers: {
                    PlayAuth: this.auth_token
                }
            }
        }

        if (!data) {
            axios.get(api_url, axios_options)
                .then((response) => {
                    console.log('Threes response [' + request_key + ']', response.data) // todo:debug
                    this.afterResponse(response.data, opts.then, request_key)
                })
                .catch((error) => {
                    delete this.requests_register[request_key]
                    this.preloader(false)
                    console.log(error) // todo:debug
                })
        } else {
            axios.post(api_url, data, axios_options)
                .then((response) => {
                    console.log('Threes response [' + request_key + ']', response.data) // todo:debug
                    this.afterResponse(response.data, opts.then, request_key)
                })
                .catch((error) => {
                    delete this.requests_register[request_key]
                    this.preloader(false)
                    console.log(error) // todo:debug
                })
        }
    },

    // Отправить сообщение
    pushMessage(text, type) {
        if ($ && $.oc && typeof $.oc.flashMsg === 'function') {
            if (!type) {
                type = 'info'
            }
            $.oc.flashMsg(text, type)
        } else {
            console.error('$.oc.flashMsg недоступен')
        }
    },

    // Показать сообщения
    pushMessages(messages) {
        for (let i in messages) {
            this.pushMessage(messages[i])
        }
    },

    // Постобработка данных
    afterResponse(response, then, request_key) {
        delete this.requests_register[request_key]
        this.preloader(false)
        if (response.messages) {
            this.pushMessages(response.messages)
        }
        if (then) {
            then(response)
        }
    },
    preloader(state) {
        console.log('Preloader = ' + state)
    },
    nodesUiStreamsRun() {

    }
}

import FormFitter from "../vue/components/ux/forms/FormFitter.vue";
import FormSection from "../vue/components/ux/forms/FormSection.vue";
import vueClickOutsideElement from 'vue-click-outside-element';

const app = createApp(Threes);
app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(vueClickOutsideElement)
app.component('FormFitter', FormFitter);
app.component('FormSection', FormSection);
app.component('draggable', vuedraggable);
app.mount("#threes");
