<template>
  <div class="game">
    <Title>Tic Tac Vue</Title>
    <div class="tic-tac">
      <Cell v-for="(position, i) in positions" :key="i" :index="i" :position="position"/>
    </div>
    <Footer>
      <div class="col">
        <h3 style="margin:0; padding:5px 0;font-size:1rem">
          <span v-if="winner">
            <strong>{{ getWinnerName }}</strong> wins!
          </span>
          <span v-else>{{getPlayerName}} plays!</span>
        </h3>
      </div>
      <div class="col">
        <div class="text-right">
          <button
            class="btn btn--primary"
            v-if="winner"
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
  Cell, 
  Footer,
  Title,
} from "../components/atoms";

export default {
  name: "Game",
  components: {
    Cell,
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
      "getWinnerName"
    ]),
  },
  beforeCreate() {
    document.title = "Game";
  }
};
</script>