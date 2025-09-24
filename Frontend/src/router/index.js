import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Keeled from "../Pages/Keeled.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/keeled', component: Keeled },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
