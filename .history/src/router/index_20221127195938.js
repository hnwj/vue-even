import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/reg',
    component: () => import('@/views/Register')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout')
  }
]

const router = new VueRouter({
  routes
})

export default router
