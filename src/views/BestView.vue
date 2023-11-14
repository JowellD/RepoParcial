<template>
  <div class="container-fluidr">
    <div class="row d-flex justify-content-center">
      <div class="col-sm-8 mb-5">
        <h1 class="text-success text-center Funciones">Peliculas Mejor Calificadas</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-evenly">
      <div class="col d-flex flex-wrap">
        <div
          class="d-flex col mb-5 mx-6 justify-content-around"
          v-for="Best in Bests"
          :key="Best.id"
        >
          <router-link :to="{ path: '/MovieDetail/' + Best.id }">
            <div class="card">
              <div class="card-image">
                <img
                  class="img"
                  :src="`${imagen}` + Best.poster_path"
                  alt=""
                />
                <!-- {{ Cartelera.poster_path }} -->
              </div>
              <div class="text0">
                <div class="category">{{ Best.title }}</div>
                <div class="heading">
                  <strong>Popularidad: {{ Best.popularity }}</strong>
                  <div class="author">
                    Fecha: <span class="name">{{ Best.release_date }}</span>
                  </div>
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
    name: 'BestView',
    data() {
        return {
            Bests: [],
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
        this.Bests = await PelicService.getBestCalificadas(this.page)
        console.log(this.Bests)
    }
}
</script>

<style scoped>
.card {
  width: 340px;
  height: 520px;
  background-color: #e0e0e0;
  /* background-color: black; */
  padding: 0.4em;
  border-radius: 6px;
}

.card:hover {
  transform: scale(0.98);
  box-shadow: rgb(0, 0, 0) 5px 10px 50px, rgb(0, 0, 0) -5px 0px 250px;
  color: beige;
}

.card-image {
  justify-items: center;
  background-color: rgb(236, 236, 236);
  width: 99%;
  height: 80%;
  border-radius: 6px 6px 0 0;
}

.text0 {
  justify-items: center;
  background-color: rgb(236, 236, 236);
  width: 99%;
  height: 20%;
  border-radius: 6px 6px 0 0;
}

.img {
  width: 100%;
  height: 100%;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: 600;
  color: #1976d2;
  padding: 5px 4px 0;
}

strong {
  color: #009966;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  /* color: rgb(88, 87, 87); */
  color: #90a4ae;
  padding: 3px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: darkslateblue;
  font-weight: 500;
  font-size: 14px;
  padding-top: 4px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
</style>
