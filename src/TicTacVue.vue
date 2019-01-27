<template>
  <div id="app">
    <div class="page-wrapper" v-if="hasPlayers">
      <Navbar />
      <router-view />
    </div>
    <Players v-else />
  </div>
</template>

<script>
import { 
  mapState, 
  mapGetters 
} from 'vuex';

import { Navbar } from './components/atoms/';
import { Players, } from './components/molecules/';

export default {
  name: 'TicTacVue',
  components: {
    Navbar,
    Players,
  },
  computed: {
    ...mapState([
      'gameHistory'
    ]),
    ...mapGetters([
      'hasPlayers'
    ])
  }
};
</script>

<style lang="scss">
@import 'src/scss/app.scss';
</style>
