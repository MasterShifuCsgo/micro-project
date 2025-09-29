import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Languages from '../Pages/Languages.vue'
import Comments from '../Pages/Comments.vue'
import Maths from '../Pages/Maths.vue'
import Practical from '../Pages/Practical.vue'
import Arts from '../Pages/Arts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/languages', component: Languages },
  { path: '/maths', component: Maths },
  { path: '/practical', component: Practical },
  { path: '/arts', component: Arts },
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
