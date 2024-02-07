import { createApp } from 'vue';
import App from './components/pages/App.vue';
import router from './router';
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#tic-tac-vue');
