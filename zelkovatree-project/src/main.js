import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/Header'

import router from './js/router.js'

const app = createApp(App);

app.use(router);

app.component('Header', Header);

app.mount("#app");
