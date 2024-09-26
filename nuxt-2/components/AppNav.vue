<template>
    <nav>
      <ul>
        <li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'about' }">About</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'button' }">Button</NuxtLink></li>
      </ul>
    </nav>
</template>