import Vue from 'vue';
import TicTacVue from './TicTacVue.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(TicTacVue)
}).$mount('#app')
