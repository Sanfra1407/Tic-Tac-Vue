<template>
  <div class="page-game-history">
    <Title>Game history</Title>
    <div class="container">
      <div class="row" v-if="hasGoldenWins">
        <div class="text--left col">
          <button class="btn btn--primary btn--small is-full-width" @click="filterGames">
            <span v-if="showOnlyGoldenWin">Show all</span>
            <span v-else>Show only golden wins*</span>
          </button>
        </div>
        <div class="text--right col">
          <small class="is-italic">*Match with only 5 moves</small>
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
import { 
  Title, 
  Score,
} from '../components/atoms';
import { Replay } from '../components/molecules';

export default {
  name: 'GameHistory',
  data() {
    return {
      replayActive: false, 
      selectedGame: null,
      showOnlyGoldenWin: false,
    }
  },
  components: {
    Title,
    Score,
    Replay,
  },
  computed: {
    ...mapState([
      'gameHistory',
    ]),
    ...mapGetters([
      'hasGoldenWins',
    ]),
    games() {
      return this.showOnlyGoldenWin ? 
        this.gameHistory.filter(game => game.isGoldenWin) : 
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
  }
};
</script>