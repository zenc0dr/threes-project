const axios = require('axios');
const md5 = require('md5');
import mitt from 'mitt';
import { createApp } from 'vue';
import { reactive } from 'vue'
import router from './routes';
import PrimeVue from 'primevue/config';
import Threes from '../vue/Threes.vue'

window._ = require('lodash');
window.ths = {

    Alerts: null, // Сюда монтируются сообщения

    requests_register: {},
    auth_token: null,
    bus: mitt(), // Шина событий

    /* Объект для хранения глобальных данных */
    data: reactive({
        ui_streams: [],
        process: false,
        node_settings: null // Все операции с нодами
    }),

    api(opts) {
        let domain = location.origin
        let data = (opts.data) ? opts.data : null
        let axios_options = null
        let api_url = opts.api ? '/threes.api/' + opts.api : opts.url
        let request_key = md5(api_url + JSON.stringify(data))

        /* Прерываем незавершенный запрос */
        if (this.requests_register[request_key]) {
            return
        }

        /* For debug */
        console.log('Threes query [' + request_key + ']: ' + api_url, data)

        /* Enable preloader after 2 seconds */
        this.requests_register[request_key] = setTimeout(() => {
            if (this.requests_register[request_key]) {
                this.preloader(true)
            }
        }, 2000)

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

    // Показать 1 сообщение
    pushMessage(text, type) {
        if (this.Alerts !== null) {
            this.Alerts.push([{
                text: text,
                type: type
            }])
        }
    },

    // Показать сообщения
    pushMessages(messages) {
        if (this.Alerts !== null) {
            this.Alerts.push(messages)
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
        this.data.process = state
    },
}

import vueClickOutsideElement from 'vue-click-outside-element';
import FormFitter from './../vue/components/FormFitter.vue'
import FormSection from "../vue/trash/v2/FormSection.vue";
import FormTabs from "../vue/components/FormTabs.vue";

const app = createApp(Threes);
app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(vueClickOutsideElement)
app.component('FormFitter', FormFitter)
app.component('FormSection', FormSection)
app.component('FormTabs', FormTabs)
app.mount("#threes");
