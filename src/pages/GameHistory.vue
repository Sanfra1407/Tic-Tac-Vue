<template>
  <div class="page-game-history">
    <Title>Game history</Title>
    <div class="container">
      <ul class="games">
        <Score v-for="(game, index) in gameHistory" 
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
import { mapState } from 'vuex';
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
    }
  },
  components: {
    Title,
    Score,
    Replay,
  },
  computed: {
    ...mapState([
      'gameHistory'
    ]),
  },
  methods: {
    openReplay(game) {
      this.replayActive = true;
      this.selectedGame = game;
    }
  },
  beforeCreate() {
    document.title = 'Game history';
  }
};
</script>