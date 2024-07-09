<script setup>

import { onMounted, ref, onUnmounted } from 'vue';

let texto = ref('Hello World!');

function repetindo_texto() {
    texto.value = texto.value === 'Hello World!' ? 'Alterando texto!' : 'Hello World!';
}

onMounted(() => {
    const intervalId = setInterval(repetindo_texto, 3000);

    onUnmounted(() => {
        clearInterval(intervalId);
    });
});

</script>

<template>

    <h1>{{ texto }}</h1>

</template>