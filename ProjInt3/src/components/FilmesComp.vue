<script>
import ImgsComp from "./ImgsComp.vue";
export default { components: { ImgsComp } };
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
      <option value="Supense">Suspense</option>
      <option value="Ficção Científica">Ficção Científica</option>
      <option value="Guerra">Guerra</option>
      <option value="Musical">Musical</option>
      <option value="Fantasia">Fantasia</option>
    </select>
  </div>
  
  <div>
    <ImgsComp></ImgsComp>
  </div>
  
</template>
