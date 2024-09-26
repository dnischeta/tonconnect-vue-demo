<template>
  <main>
    <AppNav />
    <h1>Hello, world!</h1>
    <div class="greetings">
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
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
  useIsConnectionRestored,
  useTonConnectModal,
  useTonConnectUI
} from '@townsquarelabs/ui-vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { TonConnectButton },
  setup() {
    const address = useTonAddress(true)
    const wallet = useTonWallet()
    const isConnectionRestored = useIsConnectionRestored()
    const modal = useTonConnectModal()
    const { setOptions } = useTonConnectUI()

    setOptions({ language: 'en' })

    return {
      address,
      wallet,
      isConnectionRestored,
      modal,
    }
  }
})
</script>
