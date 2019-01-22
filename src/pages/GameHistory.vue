<template>
  <div class="game-history">
    <Title>Game history</Title>
    <div class="container">
      <ul>
        <li v-for="(game, index) in gameHistory" :key="index">
          <span>Winner: {{ game.winnerName }}</span>
          <button>Replay</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Title } from "../components/atoms";

export default {
  name: "GameHistory",
  components: {
    Title
  },
  computed: {
    ...mapState([
      "gameHistory"
    ]),
  },
  beforeCreate() {
    document.title = "Game history";
  }
};
</script>