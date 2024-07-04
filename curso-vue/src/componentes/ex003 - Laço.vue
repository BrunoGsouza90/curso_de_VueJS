<script setup>

    let nomes = ['Alice', 'Bruna', 'Caio', 'Daniel', 'Ellen']

</script>

<template>
    <h1>Nome dos alunos:</h1>
    <ul>
        <li v-for="nome in nomes">{{ nome }}</li>
    </ul>

</template>