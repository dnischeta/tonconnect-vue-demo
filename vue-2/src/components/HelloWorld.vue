<script setup lang="ts">
import { TonConnectButton, useTonAddress, useTonWallet, useIsConnectionRestored, useTonConnectModal, useTonConnectUI } from '@townsquarelabs/ui-vue'
defineProps<{
  msg: string
}>()

const address = useTonAddress(true)
const wallet = useTonWallet()
const isConnectionRestored = useIsConnectionRestored()
const modal = useTonConnectModal()
const { setOptions } = useTonConnectUI()

setOptions({ language: 'en' })
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://v2.vuejs.org/">Vue 2</a>. What's next?
    </h3>
    <TonConnectButton />
    <div>{{ modal.state }}</div>
    <button type="button" @click="modal.open()">Open modal</button>
    <button type="button" @click="modal.close()">Close modal</button>

    <dl>
      <dt>Is connection restored</dt>
      <dd>{{ isConnectionRestored }}</dd>
    </dl>

    <template v-if="wallet">
      <dl>
        <dt>Address</dt>
        <dd>{{ address }}</dd>
      </dl>
      <h3>Wallet object:</h3>
      <code>{{ wallet }}</code>
    </template>
    <template v-else>
      No wallet connected
    </template>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
