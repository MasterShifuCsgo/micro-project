import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Languages from '../Pages/Languages.vue'
import Comments from '../Pages/Comments.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/languages', component: Languages },
  {
    path: '/comments/:name',    
    component: Comments,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
