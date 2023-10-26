import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/Header'

import router from './js/router.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives
})

const app = createApp(App);

app.component('Header', Header);

app.use(vuetify);
app.use(router);
app.mount("#app");
