<template>
  <div id="tic-tac-vue">
    <transition name="fade" mode="out-in" :duration=120>
      <div class="page-wrapper" v-if="hasPlayers">
        <Navbar />
        <transition name="fade" mode="out-in" :duration=120>
          <router-view />
        </transition>
      </div>
      <Players v-else />
    </transition>
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
