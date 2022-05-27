import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/page/HomePage.vue'
import AboutPage from '../views/page/AboutPage.vue'
import ErrorPage from '../views/page/ErrorPage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: ErrorPage
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
