import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Usertodo from '../views/Usertodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usertodo/:username',
    name: 'Usertodo',
    component: Usertodo,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
