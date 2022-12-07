<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import FilmesAtorComp from "@/components/FilmesAtorComp.vue";
</script>

<template>
    <nav>
        <HeaderComp></HeaderComp>
    </nav>

    <div class="NomeAtor">
        <h1>Daniel Kaluuya</h1>
    </div>
    <div class="info-ator">
        <img class = "daniel" src="@/assets/img/daniel.jpg" alt="">
        <div class="informações-ator">
        <p class="FilmesDesc">
        <h3>Sobre: </h3> É um ator e roteirista britânico, mais conhecido por interpretar Chris Washington no filme Corra! (2017) e Fred Hampton no filme Judas and the Black 
        Messiah, papel pelo qual recebeu aclamação da crítica e lhe rendeu uma vitória no Globo de Ouro, SAG, ao BAFTA, ao Critics' Choice Movie Awards e seu primeiro Oscar.
        filho de imigrantes ugandeses.  Ele foi criado por sua mãe junto com uma irmã mais velha. Seu pai morava em Uganda e raramente visitava.
        Kaluuya começou sua carreira como adolescente no teatro de improvisação. Ele apareceu posteriormente nas duas primeiras temporadas da série de televisão britânica 
        Skins, a qual também co-escreveu. Apareceu em um episódio da série Black Mirror. Em 2018, ele interpretou W'Kabi no filme Black Panther, do Universo Cinematográfico Marvel.
        </p>
            
            <h3 class="Ator">Nascimento: 24 de fevereiro de 1989 (idade 33 anos), Londres, Reino Unido</h3>
            <h3 class="Ator2">Altura: 1,74 m</h3>  
            <h3 class="Ator3">Pais: Damalie Namusoke, Stephen Kaluuya</h3>
            
        </div>
    </div>    
    <div >
        <h1 class="FilmesDaniel">Filmes com Daniel Kaluuya</h1>
    </div>
    <div>
        <FilmesAtorComp></FilmesAtorComp>
    </div>  
</template>