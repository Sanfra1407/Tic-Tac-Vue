<template>
  <div class="page-game-history">
    <Title>Game history</Title>
    <div class="container">
      <div class="row" v-if="showGoldenWins">
        <div class="text--left col">
          <button class="btn btn--primary btn--small is-full-width" @click="filterGames">
            <span v-if="showOnlyGoldenWin">Show all</span>
            <span v-else>Show only golden wins*</span>
          </button>
        </div>
        <div class="text--right col">
          <small v-if="!showOnlyGoldenWin" class="is-italic">*Match with only 5 moves</small>
        </div>
      </div>
      <ul class="games">
        <Score v-for="(game, index) in games" 
              :key="index" 
              :game="game"
              :openReplay="openReplay"
        />
      </ul>
    </div>
    <Replay v-if="selectedGame && replayActive"
            :game="selectedGame"
            :active="replayActive" 
            @close-replay="replayActive = false"
    />
  </div>
</template>

<script>
import {
  mapState, 
  mapGetters
} from 'vuex';

import Title from '@atoms/Title';
import Score from '@atoms/Score';
import Replay from '@molecules/Replay';

export default {
  name: 'GameHistory',
  components: {
    Title,
    Score,
    Replay,
  },

  data() {
    return {
      replayActive: false, 
      selectedGame: null,
      showOnlyGoldenWin: false,
    }
  },
  
  computed: {
    ...mapState([
      'gameHistory',
    ]),
    
    ...mapGetters([
      'hasGoldenWins',
    ]),

    showGoldenWins() {
      return this.hasGoldenWins 
        && this.gameHistory.length > 1
        && this.gameHistory.length > this.getGoldenWins.length;
    },

    getGoldenWins() {
      return this.gameHistory.filter(game => game.isGoldenWin);
    },

    games() {
      return this.showOnlyGoldenWin ? 
        this.getGoldenWins : 
        this.gameHistory;
    }
  },

  methods: {
    openReplay(game) {
      this.replayActive = true;
      this.selectedGame = game;
    },

    filterGames() {
      this.showOnlyGoldenWin = !this.showOnlyGoldenWin;
    }
  },

  beforeCreate() {
    document.title = 'Game history';
  },

  created() {
    if(this.gameHistory.length === 0) {
      this.$router.push({ name: 'homepage' });
    }
  }
};
</script>