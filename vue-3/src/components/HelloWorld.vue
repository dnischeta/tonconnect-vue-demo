<script setup>
import { ref, getCurrentInstance } from 'vue'
import { TonConnectButton, useTonAddress, useTonWallet, useIsConnectionRestored, useTonConnectModal, useTonConnectUI } from '@townsquarelabs/ui-vue'

defineProps({
  msg: String,
})
const count = ref(0)
const address = useTonAddress(true)
const wallet = useTonWallet()
const isConnectionRestored = useIsConnectionRestored()
const modal = useTonConnectModal()
const { setOptions } = useTonConnectUI()

setOptions({ language: 'en' })
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
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
    
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
