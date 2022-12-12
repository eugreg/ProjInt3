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
  
  methods: {
    
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  
   
},
}
</script>
<template>
  <div class="descMovi"></div>
    <div>
      <div class="titulo2">{{ filme.title }}</div>
      <img
        class="poster-filme-pag"
        :src="getPosterUrl(filme.poster_path)"
        
      />
    </div>
      <div class="descMovi">
        {{ filme.overview }}
      </div>
      <div class="descMovi2">
        <h3>Lançamento: {{ filme.release_date }}</h3>

      </div>
      <div class="descMovi3">
        <h3>Avaliação dos usuários: {{ Math.round(filme.vote_average) }}</h3>
      </div>
     
      
      
</template>

<style>
.descMovi {
  color: white;
  display: flex;
  padding: 2vh;
  font-size: vh;
  margin-top: -30vh;
  float: right;
  margin-right: 60vh;

}
.descMovi2 {
  color: white;
  display: flex;
  padding: 2vh;
  font-size: 2vh;
  margin-top: -20vh;
  float: right;
  margin-right: 136vh;
}
.descMovi3 {
  color: white;
  display: flex;
  padding: 2vh;
  font-size: 1,3vh;
  margin-top: -10vh;
  float: right;
  margin-right: 136vh;
  }

.titulo2 {
    font-size: 3vh;
    margin-top: 8vh;
    color: white;
    float: right;
    margin-right: 110vh;
}


</style>