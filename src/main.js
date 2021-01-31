import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import router from "./router"

import '@mdi/font/css/materialdesignicons.css'

import "./filters"
import Default from "./layouts/Default.vue"
import NoHeader from "./layouts/NoHeader.vue"
import store from './store'

Vue.component('default-layout',Default);
Vue.component('no-header-layout',NoHeader);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
