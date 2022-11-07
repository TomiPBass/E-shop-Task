import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    pathe: '/',
    redirect: '/store',
    name: 'home'
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
