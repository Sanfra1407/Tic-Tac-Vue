<template>
  <div class="game">
    <Title>Tic Tac Vue</Title>
    <div class="tic-tac">
      <Cell v-for="(position, i) in positions" :key="i" :index="i" :position="position"/>
    </div>
    <Footer>
      <div class="col">
        <h3 class="footer-player">
          <span v-if="winner">
            <strong>{{ getWinnerName }}</strong> wins!
          </span>
          <span v-else-if="!winner && this.hasEmptyCells()">{{ getPlayerName }} plays!</span>
          <span v-else>Draw!</span>
        </h3>
      </div>
      <div class="col">
        <div class="text-right">
          <button
            class="btn btn--primary"
            v-if="winner || !this.hasEmptyCells()"
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
  methods: {
    hasEmptyCells() {
      return this.positions.filter(position => !!position).length < 9;
    }
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
    ]),
  },
  beforeCreate() {
    document.title = "Game";
  },
};
</script>