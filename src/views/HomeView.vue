<script>
import axios from 'axios'
import EmCartazComp from '../components/HomeCopm/EmCartazComp.vue'
import PEstreiasComp from '../components/HomeCopm/PEstreiasComp.vue';
import PopularesComp from '../components/HomeCopm/PopularesComp.vue';
import MaisAvaliadosComp from '../components/HomeCopm/MaisAvaliadosComp.vue';

export default {
    data() {
        return {
            topRated: [],
            upcoming: [],
            popular: [],
            nowPlaing: [],
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
    components: { EmCartazComp, PopularesComp, PEstreiasComp, MaisAvaliadosComp }
}

</script>
<template>
  <main>
    <div class="LandingPage">
      <section class="tghb-section">
        <h2>MoviesFlix</h2>
        <p>
          Filmes, trailers, horários e salas de cinema, notícias, críticas o site
          de <strong>Cinema nº1 do Brasil!</strong> As últimas notícias do cinema, trailers e
          entrevistas, horários de filmes, o mais completo banco de dados sobre
          cinema
        </p>
      </section>
    </div>
    <section class="filmes-section">
      <h3>Recomendados</h3>
        <EmCartazComp />
        <PopularesComp />
        <PEstreiasComp />
        <MaisAvaliadosComp />
    </section>
  </main>
</template>

<style scoped>
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