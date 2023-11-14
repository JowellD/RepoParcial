<template>
  <div class="container mt-4">
    <div class="cards">
      <h1>Descripcion o Sinopsis</h1>
      <p>{{ pelicula.overview }}</p>
    </div>
  </div>
</template>

<script>
import PelicService from "@/services/PelicService";

export default {
  name: "DescripcionView",
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
  height: 85%;
  background-color: lightgray;
  padding-left: 8px;
  padding-right: 8px;
 }
p {
  margin-top: 4px;
  text-align: justify;
  font-family: "Times New Roman", Times, serif;
  font-size: 19px;
}
</style>
