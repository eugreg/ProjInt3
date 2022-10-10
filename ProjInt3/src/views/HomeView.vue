<script>
import CardComp from "../components/cardComp.vue";
import imgComp from "../components/imgComp.vue";
import FooterComp from "../components/FooterComp.vue";
import FilmesComp from "../components/FilmesComp.vue";
export default {
  name: "app",
  components: {
    CardComp,
    imgComp,
    FooterComp,
    FilmesComp,
},
};
</script>

<template>
  <div class="fundo">
    <div class="textin">
      <div class="infos">
        <h2><strong>THE BATMAN</strong></h2>
        <p>
          Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. 
          Com poucos aliados confiáveis,
           o vigilante solitário se estabelece como a personificação da vingança para a população.
        </p>
        <button>VER MAIS</button>
      </div>
    </div>
  </div>

  <FilmesComp />
  <FooterComp />
</template>
