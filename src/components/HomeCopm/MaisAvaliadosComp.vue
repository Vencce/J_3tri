<script>
import axios from 'axios'

export default {
    data() {
        return {
            topRated: [],
        };
    },
    methods: {
        getImgUrl(poster_path) {
            return `https://image.tmdb.org/t/p/w500${poster_path}`;
        }
    },
    async created() {
        let res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1");
        this.topRated = res.data.results;
        res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=2");
        this.upcoming = res.data.results;
        res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1");
        this.popular = res.data.results;
        res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1");
        this.nowPlaing = res.data.results;
    },
}

</script>

<template>

<div>
    <h4>Mais Bem Avaliados</h4>
    <router-link to="/paginafilme" class="">
        <div class="lista-filmes" >
                <div v-for="filme in topRated.slice(0,6)" :key="filme.id" class="poster">
                    <img :src="getImgUrl(filme.poster_path)" alt="" srcset="" />
                    {{ filme.title}} ({{filme.vote_average}})
                    <div class="poster"></div>
                </div>
            </div>
        </router-link>
        </div>
</template>

<style>
.lista-filmes {
  display: flex;
  flex-direction: row;
  
}

.poster {
    height: 37vh;
    width: 15%;
    margin: 0 10px;
}

.poster img {
  height: 37vh;
  width: 100%;
  
}
</style>