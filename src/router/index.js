import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import("../views/AdminView.vue")
  },
  {
    path: '/products',
    name: 'products',
    component: () => import("../views/ProductsView.vue")
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import("../views/ProductView.vue"),
    props: true
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import("../views/CheckoutView.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("../views/CartView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
