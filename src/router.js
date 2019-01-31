import Vue from 'vue';
import Router from 'vue-router';
import Game from './pages/Game.vue';

const GameHistory = () => import('./pages/GameHistory.vue');

Vue.use(Router)

export default new Router({
  //mode: 'history', // Prevents /# in the URL.
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
