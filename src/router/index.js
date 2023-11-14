import { createRouter, createWebHistory } from 'vue-router'
import GeneroView from '@/views/GeneroView.vue'
import PelisGeneroViewVue from '@/views/PelisGeneroView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import EstrenosView from '@/views/EstrenosView.vue'
import BestsView from '@/views/BestView.vue'
import PopularesView from '@/views/PopularesView.vue'
import CarteleraView from '@/views/CarteleraView.vue'
import DescripcionView from '@/views/DescripcionView.vue'
import GenerosView from '@/views/GenerosView.vue'
import TrailerView from '@/views/TrailerView.vue'
import ProductoraView from '@/views/ProductoraView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: GeneroView,
  },
  {
    path: '/Peliculas/:name-:id',
    name: 'Gen-Peliculas',
    component: PelisGeneroViewVue
  },
  
  {
    path: '/MovieDetail/:id',
    component: MovieDetailView,
    children: [
      {
        path: 'Descripcion',
        name: 'Descripcion',
        component: DescripcionView
      },
      {
        path: 'Generos',
        name: 'Generos',
        component: GenerosView
      },
      {
        path: 'Productora',
        name: 'Productora',
        component: ProductoraView
      },
      {
        path: 'Trailer',
        name: 'Trailer',
        component: TrailerView
      },
    ]
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
  {
    path: '/Bests',
    name: 'Bests',
    component: BestsView
  },
  {
    path: '/Estrenos',
    name: 'Estrenos',
    component: EstrenosView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
