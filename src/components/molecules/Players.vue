<template>
  <div class="container">
    <div class="flex-container flex-container--100vh">
      <div class="flex--v-centered">
        <Title>Tic-Tac-Vue - Insert players</Title>
        <div class="form players is-full-width">
          <div class="player">
            <div class="player__mark player__mark--x">
              <strong>X</strong>
            </div>
            <input
              v-model="playerX"
              class="form__input"
              id="player-x"
              type="text"
              placeholder="Insert player name"
            >
          </div>
          <div class="player">
            <div class="player__mark player__mark--o">
              <strong>O</strong>
            </div>
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
              :disabled="!hasPlayers || invalidPlayers" 
              :class="`btn ${hasPlayers && invalidPlayers ? 'btn--error' : 'btn--secondary'}`" 
              @click="start({'O':playerO, 'X':playerX})">
            {{ buttonValue }}  
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Title from '../atoms/Title.vue';

export default {
  name: 'Players',
  components: {
    Title
  },

  data() {
    return {
      playerX: 'Player 1',
      playerO: 'Player 2',
    };
  },

  computed: {
    hasPlayers() {
      return this.playerO && this.playerX;
    },

    invalidPlayers() {
      return this.playerO === this.playerX;
    },

    buttonValue() {
      if(this.hasPlayers && this.invalidPlayers) {
        return 'Players must have different names!';
      }

      return this.hasPlayers ? 'Play' : 'Insert players names';
    },
  },

  methods: {
    ...mapMutations([
      'setPlayers'
    ]),
    
    start(players) {
      this.setPlayers(players);
      this.$forceUpdate();
    }
  },

  mounted() {
    document.title = 'Players';
  },
};
</script>
