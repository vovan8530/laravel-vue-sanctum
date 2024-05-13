
import './bootstrap';
import { createApp } from 'vue';

import App from './components/App.vue'


import router from "./router.js";





const app = createApp({})
    .component('App', App)
    .use(router)
    .mount('#app');






export default app
