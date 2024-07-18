<script setup>

    function validaFormulario() {
        window.document.getElementByTagName('p')[0]
        
    }

</script>

<template>

    <form @submit="validaFormulario">
        <input type="submit" value="Enviar formulário">
        <p></p>
    </form>

</template>