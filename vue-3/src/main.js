import { createApp } from 'vue'
import { TonConnectUIPlugin } from '@townsquarelabs/ui-vue'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router);
app.use(TonConnectUIPlugin, { manifestUrl: 'https://telegram-mini-apps.github.io/solidjs-template/tonconnect-manifest.json' }).mount('#app')
