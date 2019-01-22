import Vue from 'vue';
import Router from 'vue-router';
import Game from './pages/Game.vue';

const GameHistory = () => import('./pages/GameHistory.vue');

Vue.use(Router)

export default new Router({
  mode: 'history', // Prevents /# in the URL. Being a pure Vue application, /# is useless.
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game,
    },
    {
      path: '/history',
      name: 'history',
      component: GameHistory,
    }
  ]
})
