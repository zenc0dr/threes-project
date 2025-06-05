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
    Submit: null, // Сюда монтируется система подтверждения

    requests_register: {},
    auth_token: null,
    bus: mitt(), // Шина событий

    /* Объект для хранения глобальных данных */
    data: reactive({
        components: {},
        ui_streams: [],
        process: false,
        node_selected_nid: null, // string | null - nid выбранного нода
        node_actions_nid: null, // string | null - nid нода для которого открыты настройки actions
        node_action: null, // string ex: 'move', 'copy', 'link', 'delete' - Выбранный action
    }),

    queue: [],
    loopStarted: false,

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

        const request = !data ?
            axios.get(api_url, axios_options) :
            axios.post(api_url, data, axios_options)

        return request
            .then((response) => {
                console.log('Threes response [' + request_key + ']', response.data)
                return this.afterResponse(response.data, request_key)
            })
            .catch((error) => {
                delete this.requests_register[request_key]
                this.preloader(false)
                console.log(error)
            })
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
    afterResponse(response, request_key) {
        delete this.requests_register[request_key];
        this.preloader(false);
        if (response.messages) {
            this.pushMessages(response.messages);
        }

        if (response.confirm) {
            if (this.Submit !== null) {
                this.Submit.push(response);
            }
            return null;
        }

        return response;
    },

    preloader(state) {
        this.data.process = state;
    },

    exec(path, ...args) {
        if (!path) return;
        const [compName, methodName] = path.split('.');
        const comp = this.data.components[compName];
        if (comp && typeof comp[methodName] === 'function') {
            return comp[methodName](...args);
        }
        console.warn('ths.exec: component or method not found', path);
    },

    processThen(then, result) {
        if (!then) return;
        const call = (t, res) => {
            if (typeof t === 'string') {
                return this.exec(t, res);
            }
            if (typeof t === 'function') {
                return t(res);
            }
        };
        if (Array.isArray(then)) {
            return then.reduce((res, t) => call(t, res), result);
        }
        return call(then, result);
    },

    executeAction(action) {
        let execResult;
        if (typeof action.exec === 'string') {
            execResult = this.exec(action.exec, action.data);
        } else if (typeof action.exec === 'function') {
            execResult = action.exec(action.data);
        }
        Promise.resolve(execResult).then(result => this.processThen(action.then, result));
    },

    tryFlushQueue() {
        if (!this.loopStarted) {
            this.flushLoop()
        }
    },

    enqueue(action) {
        this.tryFlushQueue()
        action.hash = action.hash || md5(JSON.stringify(action.data || {}))
        if (!this.queue.find(a => a.hash === action.hash)) {
            action.delay = action.delay || 0
            this.queue.push(action)
        }
    },

    flushLoop() {
        if (this.loopStarted) {
            return
        }
        this.loopStarted = true
        setInterval(() => {
            for (let i = 0; i < this.queue.length; i++) {
                const action = this.queue[i]
                if (action.delay > 0) {
                    action.delay -= 1
                    continue
                }
                this.queue.splice(i, 1)
                i--
                this.executeAction(action)
            }
        }, 1000)
    },

    exec(path, ...args) {
        if (!path) return;
        const [compName, methodName] = path.split('.');
        const comp = this.data.components[compName];
        if (comp && typeof comp[methodName] === 'function') {
            return comp[methodName](...args);
        }
        console.warn('ths.exec: component or method not found', path);
    },

    processThen(then, result) {
        if (!then) return;
        const call = (t, res) => {
            if (typeof t === 'string') {
                return this.exec(t, res);
            }
            if (typeof t === 'function') {
                return t(res);
            }
        };
        if (Array.isArray(then)) {
            return then.reduce((res, t) => call(t, res), result);
        }
        return call(then, result);
    },

    executeAction(action) {
        let execResult;
        if (typeof action.exec === 'string') {
            execResult = this.exec(action.exec, action.data);
        } else if (typeof action.exec === 'function') {
            execResult = action.exec(action.data);
        }
        Promise.resolve(execResult).then(result => this.processThen(action.then, result));
    },

    tryFlushQueue() {
        if (!this.loopStarted) {
            this.flushLoop();
        }
    },

    enqueue(action) {
        this.tryFlushQueue();
        action.hash = action.hash || md5(JSON.stringify(action.data));
        if (!this.queue.find(a => a.hash === action.hash)) {
            action.delay = action.delay || 0;
            this.queue.push(action);
        }
    },

    flushLoop() {
        if (this.loopStarted) return;
        this.loopStarted = true;
        setInterval(() => {
            for (let i = 0; i < this.queue.length; i++) {
                const action = this.queue[i];
                if (action.delay > 0) {
                    action.delay -= 1;
                    continue;
                }
                this.queue.splice(i, 1);
                i--;
                this.executeAction(action);
            }
        }, 1000);
    },
}

import vueClickOutsideElement from 'vue-click-outside-element'
import FormFitter from './../vue/components/FormFitter.vue'
import FormSection from "../vue/trash/v2/FormSection.vue"
import FormTabs from "../vue/components/FormTabs.vue"
import ClickOutside from '../vue/directives/ClickOutside'
import autoRegisterMixin from './auto-register-mixin'

const app = createApp(Threes)
app.use(router);
app.use(PrimeVue, { ripple: true })
app.use(vueClickOutsideElement)
app.mixin(autoRegisterMixin)
app.component('FormFitter', FormFitter)
app.component('FormSection', FormSection)
app.component('FormTabs', FormTabs)
app.directive('click-outside', ClickOutside)
app.mount("#threes")