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
  <div v-for="curso in cursos">
    {{ curso }}
  </div>

  <div>
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(j, index) in json" v-bind:key="j.id">
            <td>{{ j.userId }}</td>
            <td>{{ j.id }}</td>
            <td>{{ j.title }}</td>
            <td>{{ j.completed }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


</template>

<script setup>

  import TheHeader from './components/TheHeader.vue';

  let showHeader = true
  let name = 'Bruno.'
  let sobrenome = 'Gonçalves de Souza.'
  let ShowName = true
  let AcessLevel = 'Bruno'
  let cursos = ['Python', 'JavaScript', 'MySQL', 'Django', 'VueJS']
  let json = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    }
]

</script>

<style>


</style>