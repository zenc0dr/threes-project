import { createApp } from 'vue';
import { reactive } from 'vue';
import router from './routes';
import PrimeVue from 'primevue/config';
import Threes from '../vue/Threes.vue';

import mitt from 'mitt';
import _ from 'lodash';
window._ = _;

import { createApi } from './methods/api';

import vueClickOutsideElement from 'vue-click-outside-element';
import FormFitter from './../vue/components/FormFitter.vue';
import FormSection from "../vue/trash/v2/FormSection.vue";
import FormTabs from "../vue/components/FormTabs.vue";
import ClickOutside from '../vue/directives/ClickOutside';

window.ths = {
    auth_token: null,
    bus: mitt(), // Шина событий

    data: reactive({
        components: {
            Alerts: null, // Сюда монтируются сообщения
            Submit: null, // Сюда монтируется система подтверждения
        },
        ui_streams: [],
        process: false,
        node_selected_nid: null,
        node_actions_nid: null,
        node_action: null,
    }),

    preloader(state) {
        this.data.process = state
    },

    pushMessage(text, type = 'success') {
        const Alerts = this.data.components.Alerts
        if (Alerts) {
            Alerts.push([{ text, type }])
        }
    },

    pushMessages(messages) {
        const Alerts = this.data.components.Alerts
        if (Alerts) {
            Alerts.push(messages)
        }
    },

    afterResponse(response, then, request_key) {
        this.preloader(false)
        if (response.messages) {
            this.pushMessages(response.messages)
        }

        if (response.confirm) {
            const Submit = this.data.components.Submit
            if (Submit) {
                Submit.push(response, then)
            }
            return
        }

        if (then) {
            then(response)
        }
    },
}

// Подключаем API с передачей зависимостей
window.ths.api = createApi({
    getAuthToken: () => window.ths.auth_token,
    onPreloader: state => window.ths.preloader(state),
    onMessages: messages => window.ths.pushMessages(messages),
    onConfirm: (confirmData, then) => {
        const Submit = window.ths.data.components.Submit;
        if (Submit) {
            Submit.push(confirmData, then);
        }
    },
});

const app = createApp(Threes);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(vueClickOutsideElement);

app.component('FormFitter', FormFitter);
app.component('FormSection', FormSection);
app.component('FormTabs', FormTabs);

app.directive('click-outside', ClickOutside);
app.mount("#threes");
