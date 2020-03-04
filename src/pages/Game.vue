<template>
  <div class="page-game">
    <Title>Game</Title>
    <Cells :positions="positions" />
    <Footer>
      <div class="row">
        <div class="col">
          <h3 class="footer__player">
            <span v-if="winner">
              <strong>{{ getWinnerName }}</strong> wins!
            </span>
            <span v-else-if="!winner && hasEmptyCells">{{ getPlayerName }} plays!</span>
            <span v-else>Draw!</span>
          </h3>
        </div>
        <div class="col">
          <div class="text--right">
            <transition name="bounce">
              <button
                class="btn btn--primary"
                v-if="winner || !hasEmptyCells"
                @click="$store.dispatch('newGame')">
                <span>Play again</span>
              </button>
            </transition>
          </div>
        </div>
      </div>
    </Footer>
  </div>
</template>

<script>
import { 
  mapState,
  mapGetters,
} from 'vuex';

import Title from '@atoms/Title';
import Footer from '@atoms/Footer';
import Cells from '@molecules/Cells';

export default {
  name: 'Game',
  components: {
    Cells,
    Footer,
    Title
  },

  computed: {
    ...mapState([
      'player',
      'winner',
      'positions',
    ]),

    ...mapGetters([
      'getPlayerName',
      'getWinnerName',
      'hasEmptyCells',
    ]),
  },
  
  beforeCreate() {
    document.title = 'Game';
  },
};
</script>