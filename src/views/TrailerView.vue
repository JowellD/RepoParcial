<template>
    <div class="container-fluid">
    <h1>Trailer</h1>
    <YouTube 
    v-if="Trailer" 
        :src="`https://www.youtube.com/watch?v=${Trailer}`" 
        @ready="onReady"
        ref="youtube" /> 
        <h2 v-else> Esta Pelicula Aun no tiene Trailer </h2>
    </div>
</template>

<script>
import {  defineComponent } from 'vue';
import YouTube from 'vue3-youtube';
import PelicService from "@/services/PelicService";

export default defineComponent({
    components: { YouTube },
    data() {
      return {
        Videos: [],
        Trailer: false,
      };
    },
    async created() {
        const pelisid = this.$route.params.id;
        this.Videos = await PelicService.getTrailer(pelisid)
        if(this.Videos.length >0){
            this.Trailer=this.Videos[0].key
        }
        console.log(this.Trailer)
    },
    methods: {
        onReady() {
            this.$refs.youtube.playVideo()
        },
    },
})
</script>