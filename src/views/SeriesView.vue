<script>
import SeriesCard from "../components/SeriesCard.vue";
import SerieApi from "../api/series.js";
const serieapi = new SerieApi();
export default {
  components: { SeriesCard },
  data() {
    return {
      series: [],
    };
  },
  async created() {
    this.series = await serieapi.BuscaTodasAsSeries();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="conteudo">
      <SeriesCard
        v-for="serie of series"
        :key="serie.id"
        :pictur_src="getPosterUrl(serie.poster_path)"
        :pice_link="serie"
      />
    </div>
  </div>
</template>

<style>
.conteudo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 60px;
}
</style>