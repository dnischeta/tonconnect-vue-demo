import Vue from 'vue'
import VueRouter from 'vue-router'
import { TonConnectUIPlugin } from '@townsquarelabs/ui-vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(VueRouter);
Vue.use(TonConnectUIPlugin, { manifestUrl: 'https://telegram-mini-apps.github.io/solidjs-template/tonconnect-manifest.json' });

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
