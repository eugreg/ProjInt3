<script>
import CardFilmesComp from "./CardFilmesComp.vue";
export default { components: { CardFilmesComp } };
</script>
<template>
    <div class="filtros">
    <label for="Filtros"></label>
    <select name="Filmes" id="Filtros">
      <option value="Filmes">Filmes</option>
      <option value="Animações">Animações</option>
      <option value="Séries">Séries</option>
      <option value="Animes">Animes</option>
    </select>
  
    <label for="Filtros"></label>
    <select name="Terror" id="Filtros">
      <option value="Ação">Ação</option>
      <option value="Aventura">Aventura</option>
      <option value="Comédia">Comédia</option>
      <option value="Romance">Romance</option>
      <option value="Terror">Terror</option>
    </select>
  </div>
  
  <div class="section3">
    <div class="filmes-homeview">
      <div>
        <div class="filmes-linhas">
          <CardFilmesComp />
          <CardFilmesComp />
          <CardFilmesComp />
          <CardFilmesComp />
        </div>
      </div>
    </div>
  </div>
</template>
