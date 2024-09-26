<template>
    <div>
      <nav>
        <ul>
          <li><NuxtLink :to="{ name: 'index' }">Index page</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'button' }">Button page</NuxtLink></li>
        </ul>
      </nav>
      <ClientOnly>
        <TonConnectButton />
       </ClientOnly>
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
  
<script setup lang="ts">
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
  useIsConnectionRestored,
  useTonConnectModal,
  useTonConnectUI
} from '@townsquarelabs/ui-vue'

const address = useTonAddress(true)
const wallet = useTonWallet()
const isConnectionRestored = useIsConnectionRestored()
const modal = useTonConnectModal()
const { setOptions } = useTonConnectUI()

setOptions({ language: 'en' })
</script>