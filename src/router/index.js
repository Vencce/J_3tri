import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmeView from '../views/filmesView.vue'
import SerieView from '../views/serieView.vue'
import PaginaFilme from '../views/PaginaFilme.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: FilmeView
    },
    {
      path: '/series',
      name: 'series',
      component: SerieView
    },
    {
      path: '/paginafilme',
      name: 'paginafilme',
      component: PaginaFilme
    },
  ]
})

export default router
