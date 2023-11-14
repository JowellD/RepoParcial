<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-sm-8 mb-5">
        <h1 class="text-success text-center Funciones">Populares</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-evenly">
      <div class="col d-flex flex-wrap">
        <div
          class="d-flex col mb-5 mx-6 justify-content-around"
          v-for="pop in popular"
          :key="pop.id"
    >
          <router-link :to="{ path: '/MovieDetail/' + pop.id }">
            <div class="card">
              <div class="card-image">
                <img
                  class="img"
                  :src="
                    `${imagen}` + pop.poster_path
                  "
                  alt=""
                />
                <!-- {{ Cartelera.poster_path }} -->
              </div>
              <div class="category">{{ pop.title }}</div>
              <div class="heading">
                <strong>Popularidad: {{ pop.popularity }}</strong>
                <div class="author">
                  Fecha: <span class="name">{{ pop.release_date }}</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div>
        <!-- Paginación con Bootstrap 
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: page === 1 }">
            <a class="page-link" @click="changePage(page - 1)" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="pageNumber in totalPages" :key="pageNumber" class="page-item" :class="{ active: page === pageNumber }">
            <a class="page-link" @click="changePage(pageNumber)" href="#">{{ pageNumber }}</a>
          </li>
          <li class="page-item" :class="{ disabled: page === totalPages }">
            <a class="page-link" @click="changePage(page + 1)" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>-->
      </div>
    </div>
  </div>
</template>
<script lang="js">
import PelicService from '@/services/PelicService'

export default {
    name: 'PopularesView',
    data() {
        return {
            popular: [],
            imagen: "https://image.tmdb.org/t/p/w500",
            page: 1,
            totalPages: 1,
            itemsPerPage: 10, // Número de elementos por página
            pageResults: [],
        }
    },
    async created() {
        const Generoid = this.$route.params.id;
        this.Peliculas = await PelicService.getGenPeliculas(Generoid)
        this.popular = await PelicService.getPopulares(this.page)
        console.log(this.popular)
    }
}
</script>
