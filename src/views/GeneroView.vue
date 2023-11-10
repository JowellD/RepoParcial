<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-9 col-md-8">
                <h1 class="Funciones" >Generos</h1>
            </div>
        </div>
        <div class="row d-flex justify-content-evenly flex-wrap">
            <div class="d-flex tarjeta">
                <div v-for="Genero in Generos" :key="Genero.id">
                    <router-link :to="{name:'Gen-Peliculas',params:{id:Genero.id}}">
                        <div class="card col-sm-4 me-4 mb-4">
                            <p class="time-text"><span>{{ Genero.name }}</span></p>
                            <p class="day-text">id: <span class="time-sub-text">{{ Genero.id }}</span></p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row d-flex flex-wrap">
            <div class="col-sm-12 mb-6"><h2 class="Funciones" >OTRAS FUNCIONES</h2></div>
                <div class="col-sm-4 gap-3">
                    <div class="button d-flex justify-content: space-around">
                        <router-link to="/Cartelera">
                            <button class="mb-4">
                                <span class="text">Cartelera</span>
                            </button>
                        </router-link>
                        <router-link to="/Bests">
                            <button class="mb-6">
                                <span class="text">Mejor Calificadas</span>
                            </button>
                        </router-link>
                        <router-link to="/Populares">        
                            <button class="mb-6">
                                <span class="text">Populares</span>
                            </button>
                        </router-link>
                        <router-link to="/Estrenos">        
                            <button class="mb-6">
                                <span class="text">Estrenos</span>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import Vue from 'vue'
import YouTube from 'vue3-youtube'
import PelicService from '@/services/PelicService'


export default {
    name: 'GeneroView',
    data() {
        return {
            Generos: []
        }
    },
    async created() {
        this.Generos = await PelicService.getGenero()
        console.log(this.Generos)
    }
}
</script>

<style scoped>

router-link {
    text-decoration: none;
}
.card {
    width: 340px;
    height: 190px;
    background: rgb(17, 4, 134);
    border-radius: 15px;
    box-shadow: rgb(0, 0, 0, 0.7) 5px 10px 50px, rgb(0, 0, 0, 0.7) -5px 0px 250px;
    display: flex;
    color: white;
    justify-content: center;
    position: relative;
    /* background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85)); */
    background: linear-gradient(to right, #85C1E9, #3498DB);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.Funciones{
    color: #5B42F3;
    align-items: center;
}
.tarjeta {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: center;
}

.card:hover {
    box-shadow: rgb(0, 0, 0) 5px 10px 50px, rgb(0, 0, 0) -5px 0px 250px;
}

.time-text {
    font-size: 38px;
    margin-top: 0px;
    margin-left: 15px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.time-sub-text {
    font-size: 15px;
    margin-left: 5px;
}

.day-text {
    font-size: 18px;
    margin-top: 0px;
    margin-left: 15px;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* ------------Botones------- */

button {
    align-items: center;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 90%;
    min-width: 320px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s;
    gap: 10px;
    margin-right: 7px;
}

button:active,
button:hover {
    outline: 0;
}

button span {
    background-color: rgb(5, 6, 45);
    padding: 16px 20px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
}

button:hover span {
    background: none;
}

button:active {
    transform: scale(0.9);
}
</style>