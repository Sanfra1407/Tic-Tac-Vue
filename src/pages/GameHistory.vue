<template>
  <div class="game-history">
    <Title>Game history</Title>
    <div class="container">
      <ul class="games">
        <li class="game" v-for="(game, index) in gameHistory" :key="index">
          <div class="game__winner">
            <span>Winner: <strong>{{ game.winnerName }}</strong></span>
          </div>
          <div class="game__cta">
            <button class="btn btn--secondary" @click="openReplay(game)">Replay</button>
          </div>
        </li>
      </ul>
    </div>
    <Replay v-if="selectedGame && replayActive"
            :active="replayActive" 
            :game="selectedGame"
            @close-replay="replayActive = false"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Title } from "../components/atoms";
import { Replay } from "../components/molecules";

export default {
  name: "GameHistory",
  data() {
    return {
      replayActive: false, 
      selectedGame: null,
    }
  },
  components: {
    Title,
    Replay
  },
  computed: {
    ...mapState([
      "gameHistory"
    ]),
  },
  methods: {
    openReplay(game) {
      this.replayActive = true;
      this.selectedGame = game;
    }
  },
  beforeCreate() {
    document.title = "Game history";
  }
};
</script>

<style lang="scss" scoped>
.games {
  margin-top: 0;
  padding-left: 0;

  .game {
    padding: 7px;
    list-style-type: none;
    border: 1px solid #eee;

    + .game {
      border-top: 0;
    }

    &__winner,
    &__cta {
      display: inline-block
    }

    &__winner {
      width: 60%;
    }

    &__cta {
      width: 40%;
      text-align: right;
    }
  }
}
</style>

