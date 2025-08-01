// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/recordOrder',
    name: 'RecordOrder',
    component: () => import('@/views/RecordOrder.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
