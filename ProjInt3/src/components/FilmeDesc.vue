<script>
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  data() {
    return {
      videos: false,
    };
  },
  props: ["filme"],
  // async created() {
  //   console.log(this.filme.id);
  //   this.videos = await filmeapi.BuscarVideos(this.filme.id);
  // },
  
  methods: {
    
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  
   
},
}
</script>
<template>
  <div class="descMovi">
    <div>
      <img
        class="poster-filme-pag"
        :src="getPosterUrl(filme.poster_path)"
        alt="linda imagem do avatar"
      />
    </div>
    <div class="info-movi">
      <div class="titulo">{{ filme.title }}</div>
      </div>
      <div class="descMovi">
        {{ filme.overview }}
      </div>
      <div class="descMovi">
        <h2>lançamento: {{ filme.release_date }}</h2>
        <h3>Avaliação dos usuários: {{ Math.round(filme.vote_average) }}</h3>
      </div>
    </div>
 
</template>

<style>
.videos {
  /* background-color: red; */
  z-index: 1;
}
.descMovi{
    color: white;
}
/* .descMovi {
  background-color: rgb(15, 15, 15);
  color: white;
  display: flex;
  justify-content: center;
  padding: 100px;
  margin: 300px;
  margin-top: 1px;
  font-size: 30px; */

</style>