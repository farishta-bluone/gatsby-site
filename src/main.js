import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import router from "./router"

import '@mdi/font/css/materialdesignicons.css'

import "./filters"
import Default from "./layouts/Default.vue"
import NoHeader from "./layouts/NoHeader.vue"
import store from './store'
import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    // 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}

Vue.use(VueHtmlToPaper, options);

Vue.component('default-layout', Default);
Vue.component('no-header-layout', NoHeader);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
