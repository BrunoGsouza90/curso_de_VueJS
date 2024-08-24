import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContatoView from '../views/ContatoView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import ProdutoView from '../views/ProdutoView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/contato', component: ContatoView },
  { path: '/produtos', component: ProdutosView },
  { path: '/produtos/:id', component: ProdutoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router