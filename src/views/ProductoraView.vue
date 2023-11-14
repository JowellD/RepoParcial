<template>
  <div class="container mt-4">
    <h1>Productoras</h1>
    <div v-for="Productora in pelicula.production_companies"
      :key="Productora.id">
    <div class="cards" style="width: 18rem">
      <img class="imgs"
        v-if="Productora.logo_path"
        :src="`https://image.tmdb.org/t/p/w500` + Productora.logo_path"
        alt=""
      />
      </div>
      <div class="card-body">
        <h5 class="card-title mt-2">{{ Productora.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import PelicService from "@/services/PelicService";

export default {
  name: "ProductoraView",
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
  margin-top: 10px;
  min-width: 450px;
  max-width: auto;
  height: 310px;
  background: #EEEEEE;
}

h1 {
  margin-top: 14px;
  margin-bottom: 6px;
}

.card-body{
  margin-top: 10px;
  max-width: 450px;
  height: 50px;
  background: #B4AEE8;
}

h5 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  padding-top: 8px;

  text-align: center;
}
.imgs {
  width: 98%;
  height: 98%;
}
</style>