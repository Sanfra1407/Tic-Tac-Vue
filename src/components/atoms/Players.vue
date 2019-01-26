<template>
  <div class="container">
    <div class="flex-container flex-container--players">
      <div class="form players full-width flex--v-centered">
        <div class="player">
          <label for="player-x" class="form__label">
            <strong>Player X</strong>
          </label>
          <input
            v-model="playerX"
            class="form__input"
            id="player-x"
            type="text"
            placeholder="Insert player name"
          >
        </div>
        <div class="player">
          <label for="player-o" class="form__label">
            <strong>Player O</strong>
          </label>
          <input
            v-model="playerO"
            class="form__input"
            id="player-o"
            type="text"
            placeholder="Insert player name"
          >
        </div>
        <div class="next text--center">
          <button 
            :disabled="!hasPlayers" 
            class="btn btn--secondary" 
            @click="start({'O':playerO, 'X':playerX})">
          {{ buttonValue }}  
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Players',
  data() {
    return {
      playerO: '',
      playerX: ''
    };
  },
  methods: {
    ...mapMutations([
      'setPlayers'
    ]),
    start(players) {
      this.setPlayers(players);
      this.$router.push({name: 'homepage'});
    }
  },
  computed: {
    hasPlayers() {
      return this.playerO && this.playerX;
    },
    buttonValue() {
      return this.hasPlayers ? 'Play' : 'Fill out the form'
    },
  },
  mounted() {
    document.title = 'Players';
  },
};
</script>
