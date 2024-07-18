<script setup>
    import { ref } from 'vue';

    var texto = ref('')

    function validaFormulario() {
        texto.value = 'Formulário Enviado!'
    }

</script>

<template>

    <form @submit="validaFormulario">
        <input type="submit">
        <p v-html="texto"></p>
    </form>

</template>