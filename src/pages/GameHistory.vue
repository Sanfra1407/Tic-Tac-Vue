<template>
  <div class="game-history">
    <Title>Game history</Title>
    <div class="container">
      <ul>
        <li v-for="(game, index) in gameHistory" :key="index">
          <span>Winner: {{ game.winnerName }}</span>
          <button @click="openReplay(game)">Replay</button>
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