import Vue from "vue";
import router from "./router";
import store from "./store";
import TicTacVue from "./TicTacVue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(TicTacVue)
}).$mount("#tic-tac-vue");
