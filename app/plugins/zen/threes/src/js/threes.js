import { createApp } from 'vue';
import { reactive } from 'vue';
import router from './routes';
import PrimeVue from 'primevue/config';
import Threes from '../vue/Threes.vue';

import mitt from 'mitt';
import _ from 'lodash';
window._ = _;

import vueClickOutsideElement from 'vue-click-outside-element';
import FormFitter from './../vue/components/FormFitter.vue';
import FormSection from "../vue/trash/v2/FormSection.vue";
import FormTabs from "../vue/components/FormTabs.vue";
import ClickOutside from '../vue/directives/ClickOutside';

import { createApi } from './methods/api';

window.ths = {
    auth_token: null, // Токен авторизации
    bus: mitt(), // Шина событий

    // Реактивные данные
    data: reactive({

        // Пользователь Threes
        user: null,

        // Компоненты Threes
        components: {},

        // Глобальный флаг прелоадера
        process: false,

        // url-админпанели ocms
        backend: null,

        // Операции с нодами
        node_selected_nid: null,
        node_actions_nid: null,
        node_action: null,
    }),

    // Определение мобильного устройства
    isMobile() {
        return window.innerWidth <= 768 || 
               /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    getNodeUrl(nid) {
        if (this.data.backend) {
            return `/${this.data.backend}/zen/threes/nodecontroller/node/${nid}`
        } else {
            return `/app/node/${nid}`
        }
    },

    clearNodeActions() {
        this.data.node_actions_nid = null;
        this.data.node_action = null;
    },

    // Монтирование компонента
    mountComponent(name, instance) {
        this.data.components[name] = instance
    },

    // Размонтирование компонента
    unmountComponent(name) {
        this.data.components[name] = null
    },

    // Выполнение метода компонента
    exe(name, method, ...args) {
        this.data.components[name][method](...args)
    }
}

// Сервис отправки запросов
window.ths.api = createApi();

const app = createApp(Threes);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(vueClickOutsideElement);

app.component('FormFitter', FormFitter);
app.component('FormSection', FormSection);
app.component('FormTabs', FormTabs);

app.directive('click-outside', ClickOutside);
app.mount("#threes");
