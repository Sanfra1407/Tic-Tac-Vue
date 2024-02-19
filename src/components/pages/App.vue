<template>
  <div id="tic-tac-vue">
    <Transition name="fade" mode="out-in" :duration=120>
      <div class="page-wrapper" v-if="hasPlayers">
        <Navbar />
        <router-view v-slot="slotProps">
          <Transition name="fade" mode="out-in" :duration=120>
            <component :is="slotProps.Component"></component>
          </Transition>
        </router-view>
      </div>
      <Players v-else />
    </Transition>
  </div>
</template>

<script>
import { 
  mapState, 
  mapGetters 
} from 'vuex';

import Navbar from '../atoms/Navbar.vue';
import Players from '../molecules/Players.vue';

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
