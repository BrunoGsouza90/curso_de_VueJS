<script>

    export default{
        name: 'App',
        data() {
            return{
                imagem_on: true,
                url:'https://images.a12.com/source/files/c/282548/Bulma_Amaral_-_Leao_de_Juda_-793353_1280-847-0-0.jpg',
                texto: 'Leão da Tribo de Judá'
            }
        }
    }

</script>

<template>

    <h1>Estrutura <q><em>v-bind</em></q></h1>
    <img class="img" v-bind:src="url" v-bind:alt="texto">

</template>

<style>

    .img{
        width: 400px;
        height: 400px;
        border-radius: 100%;
        border: 2px solid black;
    }

</style>