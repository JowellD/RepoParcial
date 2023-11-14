<template>
  <div class="container mt-4">
    <h1>Generos</h1>
    <div class="cards">
      <ul class="list-group list-group ms-4 ps-5 mt-4">
        <li
          class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center mb-4 ps-4"
          v-for="generos in pelicula.genres"
          :key="generos.id">
          {{ generos.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PelicService from "@/services/PelicService";

export default {
  name: "GenerosView",
  data() {
    return {
      pelicula: {},
    };
  },
  async created() {
    const pelisid = this.$route.params.id;
    this.pelicula = await PelicService.getInfoMovie(pelisid);
  },
};
</script>

<style scoped>
 .cards {
  width: 100%;
  height: 80%;
 }

 li {
  font-family: 'Times New Roman', Times, serif;
  font-size: 22px;
  font-weight: 600;
  width: 150px;
  height: 80px;
   }
</style>