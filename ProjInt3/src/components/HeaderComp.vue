<script>
export default {};
</script>
<template>
  <header>
    <nav>
      <div class="logo">
        <RouterLink to="/"><h1>CineWeb</h1></RouterLink>
      </div>
      <div class="links">
        <RouterLink to="animacoes"><a href="">Lançamentos</a></RouterLink>
        <RouterLink to="filmes"><a href="#">Filmes</a></RouterLink>
        <RouterLink to="series"><a href="#">Séries</a></RouterLink>
      </div>
      <input class="buscar" type="text" placeholder="Buscar..." />
    </nav>
  </header>
</template>
