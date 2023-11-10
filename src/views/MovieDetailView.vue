<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-sm-9 col-md-8 mb-4">
        <h1>
          <strong> {{ GPelicula.title }} </strong>
        </h1>
      </div>
    </div>
    <div class="row d-flex justify-content-evenly">
      <div class="col-sm-6">
        <div class="card-image">
          <img
            class="img"
            v-if="GPelicula.poster_path"
            :src="`https://image.tmdb.org/t/p/w500` + GPelicula.poster_path"
            alt=""
          />
          <div class="author">
            Fecha: <span class="name">{{ GPelicula.release_date }}</span>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <router-link
          :to="{ name: 'Descripcion', params: { id: GPelicula.id } }"
        >
          <button class="shadow__btn2 btn1">Descripcion</button>
        </router-link>
        <router-link :to="{ name: 'Generos', params: { id: GPelicula.id } }">
          <!--:to="{ name: 'Generos', params: { id: GPelicula.id } }" -->
          <button class="shadow__btn2 btn2">Generos</button>
        </router-link>
        <router-link :to="{ name: 'Productora', params: { id: GPelicula.id } }">
          <button class="shadow__btn2 btn3">Productoras</button>
        </router-link>
        <router-link :to="{ name: 'Trailer', params: { id: GPelicula.id } }">
          <button class="shadow__btn">Trailer</button>
        </router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import PelicService from '@/services/PelicService'

export default {
    name: 'MovieDetailView',
    data() {
        return {
            GPelicula: {}
        };
    },
    async created() {
        const peliculaId = this.$route.params.id;
        this.GPelicula = await PelicService.getInfoMovie(peliculaId);
        // var Imagen = this.GPelicula.poster_path
        console.log(this.GPelicula)
    }
}
</script>

<style scoped>
.container-fluid {
  background: transparent;
}

strong {
  color: #793fdf;
  text-transform: uppercase;
}
button {
  margin-left: 6px;
  margin-top: 8px;
}
.shadow__btn {
  padding: 10px 18px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}

.shadow__btn {
  background: rgb(0, 140, 255);
  box-shadow: 0 0 25px rgb(0, 140, 255);
}

.shadow__btn:hover {
  box-shadow: 0 0 5px rgb(0, 140, 255), 0 0 25px rgb(0, 140, 255),
    0 0 50px rgb(0, 140, 255), 0 0 100px rgb(0, 140, 255);
}

/* ---------Boton 2 */
.shadow__btn2 {
  font-size: 18px;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
    0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
    inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  padding: 0 2em;
  border-radius: 0.3em;
  color: #fff;
  height: 2.4em;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.shadow__btn2:hover {
  box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
    0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;
  transform: translateY(-0.1em);
}

.shadow__btn2:active {
  box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
  transform: translateY(0em);
}

/* -----BOton Colores */
.btn1 {
  background: #54b435;
}

.btn2 {
  background: #9400ff;
}

.btn3 {
  background: #3f0071;
}
</style>
