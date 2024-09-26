<template>
    <main>
      <AppNav />
      <h1>Button</h1>
      <TonConnectButton />
    </main>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import { TonConnectButton } from '@townsquarelabs/ui-vue'
  
  export default Vue.extend({
    name: 'ButtonPage',
    components: { TonConnectButton },
  })
  </script>
  