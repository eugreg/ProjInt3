<script>
import PictureCard from "../components/PictureCard.vue";
import FilmesComp from "../components/FilmesComp.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: { PictureCard,    FilmesComp, },
  data() {
    return {
      filmes: [],
    
    };  
  },  
  async created() {
    this.filmes = await filmeapi.BuscaBatman();
  },  
  methods: {
    getPosterUrl(backdrop_path) {
      return `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    },  
  },  
}  


</script>
<template>
  
    <div class="">


      <img
          class="fundo"
          :src="getPosterUrl(filmes.backdrop_path)"
          alt="linda imagem do avatar"
        />
      </div>
      <div class="textin">
        <div class="infos">
  
        <main>
        <h2><strong>{{filmes.original_title}}</strong></h2>
        <p>
         {{filmes.overview}}
        </p>

      </main>
      </div>
    </div>
 

  <FilmesComp />
</template>
