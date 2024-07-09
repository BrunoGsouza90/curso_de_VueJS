<script setup>

    function validaFormulario(event) {
        alert('Formulário enviado!');

        event.preventDefault();
    }

</script>

<template>

    <form action="https://github.com/BrunoGsouza90" @submit="validaFormulario">
        <input type="submit" value="Enviar formulário">
    </form>

</template>