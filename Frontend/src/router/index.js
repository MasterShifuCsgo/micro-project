import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Languages from '../Pages/Languages.vue'
import Comments from '../Pages/Comments.vue'
import Maths from '../Pages/Maths.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/languages', component: Languages },
  { path: '/maths', component: Maths },
  {
    path: '/comments/:lesson_name',    
    component: Comments,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
