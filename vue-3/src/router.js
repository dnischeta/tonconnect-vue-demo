import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import OtherPage from './OtherPage.vue'
import OtherPageWithButton from './OtherPageWithButton.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/other', name: 'other', component: OtherPage },
    { path: '/other-with-button', name: 'other-with-button', component: OtherPageWithButton },
  ],
})

export default router