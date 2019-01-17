<template>
  <div class="container">
    <div class="form players">
      <div class="player">
        <label for="player-x">
          <strong>Player X</strong>
        </label>
        <input
          v-model="playerX"
          class="form-input"
          id="player-x"
          type="text"
          placeholder="Insert player name"
        >
      </div>
      <div class="player">
        <label for="player-o">
          <strong>Player O</strong>
        </label>
        <input
          v-model="playerO"
          class="form-input"
          id="player-o"
          type="text"
          placeholder="Insert player name"
        >
      </div>
      <div class="next text-center">
        <button 
          :disabled="!hasPlayers" 
          class="btn btn--secondary" 
          @click="setPlayers({'O':playerO, 'X':playerX})">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Players",
  data() {
    return {
      playerO: "",
      playerX: ""
    };
  },
  methods: {
    ...mapMutations([
      "setPlayers"
    ]),
  },
  computed: {
    hasPlayers() {
      return this.playerO && this.playerX;
    }
  }
};
</script>
