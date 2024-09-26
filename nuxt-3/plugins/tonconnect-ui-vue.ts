import { TonConnectUIPlugin } from '@townsquarelabs/ui-vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(TonConnectUIPlugin, { manifestUrl: 'https://telegram-mini-apps.github.io/solidjs-template/tonconnect-manifest.json' })
})