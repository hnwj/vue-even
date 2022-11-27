import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/reg',
    component:()=>import('@/views/')
}
]

const router = new VueRouter({
  routes
})

export default router
