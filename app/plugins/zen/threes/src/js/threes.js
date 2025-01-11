import {createApp} from 'vue';
import router from './routes';

import Threes from '../vue/Threes.vue'

const app = createApp(Threes)
app.use(router)
app.mount("#threes")
