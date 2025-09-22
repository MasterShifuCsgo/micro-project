import { createRouter, createWebHistory } from 'vue-router'


import Home from '../components/Home.vue'
import LanguagePage from '../components/LanguagePage.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/language', component: LanguagePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
