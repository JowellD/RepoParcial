import axios from "axios"

function New_Date(old_date) {
    let months = [
        {id:1 , name: 'Enero'},
        {id:2 , name: 'Febrero'},
        {id:3 , name: 'Marzo'},
        {id:4 , name: 'Abril'},
        {id:5 , name: 'Mayo'},
        {id:6 , name: 'Junio'},
        {id:7 , name: 'Julio'},
        {id:8 , name: 'Agosto'},
        {id:9 , name: 'Septiembre'},
        {id:10 , name:'"Octubre'},
        {id:11, name: 'Noviembre'},
        {id:12 , name:'"Diciembre'},
    ]
    let array_date = old_date.split("-");
    let year = array_date[0]
    let month_id = array_date[1]
    let month = months.find(element => {return element.id ==month_id})
    let day = array_date[2]
    let fecha = `${day} de ${month.name} del ${year}` 
    return fecha
}
export default{
    async getGenero(){
        return await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.genres
        })
        
        .catch(error =>{
            console.log (error)
        })
    },  
    async getGenPeliculas(id){
        return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=492d218f089fd8c20e9c3a945b482a9f&language=esCO&with_genres=${id}`)
        .then(response =>{
            let Pelis = response.data.results
            for(let i=0; i < Pelis.length; i++) {
                Pelis[i].release_date = New_Date(Pelis[i].release_date)
            }
            return Pelis
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getInfoMovie(id){
        return await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            let Pelis = response.data
            for(let i=0; i < Pelis.length; i++) {
                Pelis[i].release_date = New_Date(Pelis[i].release_date)
            }
            return Pelis
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getCartelera(page){
        return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            let Pelis = response.data.results
            for(let i=0; i < Pelis.length; i++) {
                Pelis[i].release_date = New_Date(Pelis[i].release_date)
            }
            return Pelis
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getPopulares(page){
        return await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            let Pelis = response.data.results
            for(let i=0; i < Pelis.length; i++) {
                Pelis[i].release_date = New_Date(Pelis[i].release_date)
            }
            return Pelis
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getBestCalificadas(page){
        return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            let Pelis = response.data.results
            for(let i=0; i < Pelis.length; i++) {
                Pelis[i].release_date = New_Date(Pelis[i].release_date)
            }
            return Pelis
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getEstrenos(page){
        return await axios.get(`https://api.themoviedb.org/3/movie/upcoming?page=${page}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            let Pelis = response.data.results
            for(let i=0; i < Pelis.length; i++) {
                Pelis[i].release_date = New_Date(Pelis[i].release_date)
            }
            return Pelis
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getTrailer(id){
        return await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data.results
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
}