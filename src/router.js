import { createRouter, createWebHistory } from 'vue-router'
import Game from './components/pages/Game.vue';
const GameHistory = () => import('./components/pages/GameHistory.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Game,
    },
    {
      path: '/history',
      name: 'history',
      component: GameHistory,
    }
  ]
})

export default router;