import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Comments from '../Pages/Comments.vue'
import Lessons from '../Pages/Lessons.vue'

const routes = [
  { path: '/', component: Home },  
  { 
    path: '/lesson/:lesson_name',
    component: Lessons,
    props: true
  },
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
