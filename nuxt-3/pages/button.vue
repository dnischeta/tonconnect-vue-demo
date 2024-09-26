<template>
    <h1>Button page</h1>
    <nav>
        <ul>
          <li><NuxtLink :to="{ name: 'index' }">Index page</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'button' }">Button page</NuxtLink></li>
        </ul>
    </nav>
    <ClientOnly>
        <TonConnectButton />
    </ClientOnly>
</template>

<script setup lang="ts">
import { TonConnectButton } from '@townsquarelabs/ui-vue'
</script>
  