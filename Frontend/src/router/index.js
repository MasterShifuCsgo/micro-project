import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Comments from '../Pages/Comments.vue'
import Lessons from '../Pages/Lessons.vue'
import Dashboard from '../Pages/Dashboard.vue'

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
  {
    path: '/dashboard',    
    component: Dashboard,    
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
