<script>
    
    //import Ex001 from './components/Ex001 - Estrutura de Condição.vue' 
    //import Ex002 from './components/Ex002 - Laço de Repetição.vue'
    //import Ex003 from './components/Ex003 - Estrutura v-bind.vue'
    //import Ex004 from './components/Ex004 - Classes e Estilos.vue'
    //import Ex005 from './components/Ex005 - Estrutura v-model.vue'
    //import Ex006 from './components/Ex006 - Eventos.vue'
    //import Ex007 from './components/Ex007 - Propriedade Computada.vue'
    //import Ex008 from './components/Ex008 - Watch.vue'
    //import Ex009 from './components/Ex009 - Ciclo de Vida.vue'
    //import Ex010 from './components/Ex010 - Componentes slot.vue'
    //import Ex011 from './components/Ex011 - Scoped e Global CSS.vue'
    import Ex012 from './components/Ex0012 - Componente Filho.vue'

    export default {
        name: 'App',
        data(){
            return{

            }
        },

        components: {
            Ex012
        },
    }

</script>

<template>
    <header id="principal">
        <nav>
            <!-- O Vue Router aplica a classe 'router-link-active' por padrão -->
            <RouterLink to="/" active-class="custom-active">Home</RouterLink>
            <RouterLink to="/produtos" active-class="custom-active">Produtos</RouterLink>
            <RouterLink to="/contato" active-class="custom-active">Contato</RouterLink>
        </nav>
    </header>
    <main id="principal">
        <RouterView />
    </main>
</template>