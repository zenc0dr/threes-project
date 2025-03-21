
const axios = require('axios');
const md5 = require('md5');
import { createApp } from 'vue';
import { reactive } from 'vue'
import router from './routes';
import PrimeVue from 'primevue/config';
import vuedraggable from 'vuedraggable';
import Threes from '../vue/Threes.vue'

$.ajaxSetup({
    beforeSend: function() {
        if (typeof $.oc === "undefined") {
            console.warn("OctoberCMS not loaded yet, retrying...");
        }
    },
    complete: function() {
        if (typeof $.oc !== "undefined") {
            $(document).trigger("render");
        }
    }
});

window._ = require('lodash');
window.ths = {
    requests_register: {},
    auth_token: null,

    // Объект для хранения глобальных данных

    data: reactive({
        // mouse: {
        //     x: 0,
        //     y: 0,
        // },
        sprite_pins: [], // Соединения в спрайте
        ui_streams: [],
    }),

    api(opts) {
        let domain = location.origin
        let data = (opts.data) ? opts.data : null
        let axios_options = null
        let api_url = domain

        if (opts.api) {
            api_url = '/threes.api/' + opts.api
        } else {
            api_url = opts.url
        }

        let request_key = md5(api_url + JSON.stringify(data))

        // if (opts.api) {
        //     api_url = domain + '/threes.api/' + opts.api
        // }

        // For debug
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
    afterResponse(response, then, request_key) {
        delete this.requests_register[request_key]
        this.preloader(false)
        if (response.alerts) {
            this.pushAlerts(response.alerts)
        }
        if (then) {
            then(response)
        }
    },
    preloader(state) {
        console.log('Preloader = ' + state)
    },
    pushAlerts(alerts) {
        console.log('Alerts', alerts)
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
