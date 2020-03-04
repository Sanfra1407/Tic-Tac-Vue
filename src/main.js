import Vue from "vue";
import router from "./router";
import store from "./store";
import TicTacVue from "./TicTacVue";

Vue.config.productionTip = false;

new Vue({
  el: '#tic-tac-vue',
  router,
  store,
  render: h => h(TicTacVue)
});
