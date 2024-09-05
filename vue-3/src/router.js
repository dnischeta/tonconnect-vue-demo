import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import OtherPage from './OtherPage.vue'
import OtherPageWithButton from './OtherPageWithButton.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/other', component: OtherPage },
    { path: '/other-with-button', component: OtherPageWithButton },
  ],
})

export default router