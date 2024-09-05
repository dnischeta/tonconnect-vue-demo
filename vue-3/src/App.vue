<script setup lang="ts">
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue'
</script>

<template>
  <TonConnectUIProvider
    :options="{ manifestUrl: 'https://telegram-mini-apps.github.io/solidjs-template/tonconnect-manifest.json' }"
  >
  <main>
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/other">Other</router-link>
      <router-link to="/other-with-button">Other with button</router-link>
    </header>
    <router-view />
  </main>
</TonConnectUIProvider>
</template>