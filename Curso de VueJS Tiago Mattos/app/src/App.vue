<!-- Nosso site será renderizado nesse arquivo. -->

<template>
  
  <TheHeader v-if="showHeader"></TheHeader>

  <div v-show="ShowName">
    <p>Nome: {{ name }}</p>
    <p>Sobrenome: {{ sobrenome }}</p>
  </div>

  <div v-if="AcessLevel === 'Admin' || AcessLevel === 'Bruno'">Usuário Admin</div>
  <div v-else-if="AcessLevel === 'Marketing'">Usuário Marketing</div>
  <div v-else>Usuário Normal</div>

</template>

<script setup>

  import TheHeader from './components/TheHeader.vue';

  let showHeader = true
  let name = 'Bruno.'
  let sobrenome = 'Gonçalves de Souza.'
  let ShowName = true
  let AcessLevel = 'Bruno'

</script>

<style>

  body{
    text-align: center;
  }

</style>