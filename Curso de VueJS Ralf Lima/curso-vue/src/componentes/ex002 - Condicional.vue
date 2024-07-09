<script setup>

  let exibir = true;
  let exibir1 = false;
  let media = window.prompt('Digite a media: ')

</script>

<template>

  <!-- Criação de uma estrutura condicional "if" . -->
  <h1 v-if="exibir">Hello world!</h1>
  <h1 v-if="exibir1">Olá, mundo!</h1>

  <!-- Aplicando a Estrutura de Condição. -->
  <p v-if="media >= 7">Aprovado(a)!</p>
  <p v-else-if="media >= 6.0">Em recuperação!</p>
  <p v-else="media < 6">Reprovado(a)!</p>

</template>