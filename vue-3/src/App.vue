<template>
  <main>
    <header>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'other' }">Other</router-link>
      <router-link :to="{ name: 'other-with-button' }">Other with button</router-link>
    </header>
    <router-view />
  </main>
</template>