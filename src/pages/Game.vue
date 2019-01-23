<template>
  <div class="game">
    <Title>Tic Tac Vue</Title>
    <Cells :positions="positions" />
    <Footer>
      <div class="col">
        <h3 class="footer-player">
          <span v-if="winner">
            <strong>{{ getWinnerName }}</strong> wins!
          </span>
          <span v-else-if="!winner && hasEmptyCells">{{ getPlayerName }} plays!</span>
          <span v-else>Draw!</span>
        </h3>
      </div>
      <div class="col">
        <div class="text-right">
          <button
            class="btn btn--primary"
            v-if="winner || !hasEmptyCells"
            @click="$store.dispatch('newGame')">
            <span>Play again</span>
          </button>
        </div>
      </div>
    </Footer>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { 
  Footer,
  Title,
} from "../components/atoms";

import { Cells } from "../components/molecules";

export default {
  name: "Game",
  components: {
    Cells,
    Footer,
    Title
  },
  computed: {
    ...mapState([
      "player",
      "winner",
      "positions",
    ]),
    ...mapGetters([
      "getPlayerName",
      "getWinnerName",
      "hasEmptyCells"
    ]),
  },
  beforeCreate() {
    document.title = "Game";
  },
};
</script>