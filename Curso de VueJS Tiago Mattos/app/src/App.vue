<!-- Nosso site será renderizado nesse arquivo. -->

<template>
  
  <TheHeader v-if="showHeader"></TheHeader>

  <h1 v-bind:class="classVar">Curso Vue 3</h1>
  <h1 v-bind:class="{ 'titulo': true }">Curso Vue 3</h1>
  <h1 v-bind:class="{ 'titulo': false }">Curso Vue 3</h1>
  <h1 v-bind:class="{ 'titulo': false , 'titulo_lar': umLar }">Curso Vue 3</h1>

  <p :class="[{'titulo': false, 'titulo_lar': false, 'titulo_lar2':pClass2}]">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque 
    animi quo eveniet recusandae, ducimus eius, maiores dignissimos 
    deleniti eligendi omnis nulla ratione pariatur est officiis iusto 
    sequi exercitationem commodi tempore.
  </p>

  <p :style="{ 'color': 'aqua', 'font-size': '25pt' }">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, 
    iure magni velit ipsa excepturi eligendi dolorem sed commodi 
    voluptatem deleniti totam praesentium unde blanditiis, eius ut. 
    Obcaecati vitae saepe quidem!
  </p>

  <form>
    <input
    v-model="nome"
    type="text">
    <br>
    <p>{{ nome }}</p>
  </form>

  <br>

  <form>
    <p>Esportes:</p>

    <select v-model="esportes">
        <option value="">Escolha</option>
        <option value="Futebol">Futebol</option>
        <option value="Skate">Skate</option>
        <option value="Tênis">Tênis</option>
        <option value="Basquete">Basquete</option>
        <option value="Surf">Surf</option>
    </select>
    <p>{{ esportes }}</p>
  </form>
  
  <br>

  <form>
    <h2>Matérias</h2>
    <div>
      <input
      v-model="materias"
      type="radio"
      value="Matemática">
      <label>Matemática</label>
    </div>
    <input
      v-model="materias"
      type="radio"
      value="Português">
      <label>Português</label>
    <div>
      <input
      v-model="materias"
      type="radio"
      value="Inglês">
      <label>Inglês</label>
    </div>
    <div>
      <input
      v-model="materias"
      type="radio"
      value="Geografia">
      <label>Geografia</label>
    </div>
    <div>
      <input
      v-model="materias"
      type="radio"
      value="História">
      <label>História</label>
    </div>
    <p>Você está estudando: <span :style="{ 'text-decoration': 'underline' }">{{ materias }}</span> .</p>
  </form>

  <br>

  <form @submit.prevent="submit_contrato">
    <h2>Contrato</h2>
    <div>
      <input
      v-model="limpeza"
      type="checkbox"
      value="Concordo em manter a limpeza">
      <label>Manter a limpeza</label>
    </div>
    <input
      v-model="respeito"
      type="checkbox"
      value="Concordo em ser respeitoso">
      <label>Ser respeitoso</label>
    <div>
      <input
      v-model="ajuda"
      type="checkbox"
      value="Concordo em ajudar o próximo">
      <label>Ajudar o próximo</label>
    </div>
    <div>
      <input
      v-model="horario"
      type="checkbox"
      value="Concordo em cumprir horários">
      <label>Cumprir horários</label>
    </div>
    <div>
      <input
      v-model="hierarquia"
      type="checkbox"
      value="Concordo em respeitar a hierarquia">
      <label>Respeitar a hirarquia</label>
    </div>
    <p>Eu entendi o contrato:</p>
    <p>Limpeza: {{ limpeza }}.</p>
    <p>Respeito: {{ respeito }}.</p>
    <p>Ajuda: {{ ajuda }}</p>
    <p>Horario: {{ horario }}</p>
    <p>Hierarquia: {{ hierarquia }}</p>
    <p :class="cor">{{ combinado }}</p>
  </form>

  <br>

  <img class="img"
  :src="url" 
  v-bind:alt="Leao">

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
  import { ref, computed } from 'vue';


  let showHeader = true
  var name = 'Bruno.'
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
    
    var url = "https://images.a12.com/source/files/c/282548/Bulma_Amaral_-_Leao_de_Juda_-793353_1280-847-0-0.jpg"
    var Leao = 'Foto do Leão da Tribo de Judá'

    var classVar = { 'titulo' : true }
    var umLar = true

    var pClass = 'titulo_paragrafo'
    var pClass2 = true

    var nome = ref('Bruno Gonçalves')

    var esportes = ref('Futebol')
    var materias = ref('________')
    var combinado = ref('')

    var limpeza = ref([])
    var respeito = ref([])
    var ajuda = ref([])
    var horario = ref([])
    var hierarquia = ref([])
    var cor = ref('')

    var combinado = computed(() => {
      if (limpeza.value == "Concordo em manter a limpeza" && respeito.value == "Concordo em ser respeitoso" && ajuda.value == "Concordo em ajudar o próximo" && horario.value == "Concordo em cumprir horários" && hierarquia.value ==  "Concordo em respeitar a hierarquia"){
        cor.value = 'verde'
        return 'Estamos combinados.'
      } else {
        cor.value = 'vermelho'
        return 'Não estamos combinados.'
      }
    })


</script>

<style>

  .titulo_paragrafo{
    color: green;
    font-size: 40px;
  }

  .titulo{
    font-size: 30pt;
    color: blue;
  }

  .titulo_lar{
    font-size: 40px;
    color: yellow;
  }

  .titulo_lar2{
    font-size: 40px;
    color: rgb(133, 133, 52);
  }

  .img{
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 2px solid black;
  }

  .vermelho{
    width: 180px;
    height: 20px;
    padding: 8px;
    border-radius: 10px;
    border: 2px solid red;
    text-align: center;
    background-color: rgba(255, 0, 0, 0.295);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(117, 3, 3);
  }

  .verde{
    width: 145px;
    height: 20px;
    padding: 8px;
    border-radius: 10px;
    border: 2px solid green;
    text-align: center;
    background-color: rgba(0, 128, 0, 0.151);
    color: rgb(0, 112, 0);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

</style>


Documentação Parte 5