import { createRouter, createWebHashHistory } from 'vue-router';
import Basket from '../views/Basket.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
