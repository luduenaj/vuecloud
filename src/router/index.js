import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscografiaView from '@/views/DiscografiaView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/discografia/:artista_id',
    name: 'DiscografiaView',
    props: true,
    component: DiscografiaView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
