import { createRouter, createWebHistory } from 'vue-router'
import GeneroView from '@/views/GeneroView.vue'
import PelisGeneroViewVue from '@/views/PelisGeneroView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: GeneroView,
  },
  {
    path: '/Peliculas/:id',
    name: 'Gen-Peliculas',
    component: PelisGeneroViewVue
  },
  
  {
    path: '/MovieDetail/:id',
    component: MovieDetailView,
  },
  {
    path: '/Populares',
    name: 'Populares',
    component: PopularesView
  },
  {
    path: '/Cartelera',
    name: 'Cartelera',
    component: CarteleraView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
