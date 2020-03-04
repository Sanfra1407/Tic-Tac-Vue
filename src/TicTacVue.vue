<template>
  <div id="tic-tac-vue">
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

import Navbar from '@atoms/Navbar';
import Players from '@molecules/Players';

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
