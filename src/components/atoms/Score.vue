<template>
  <li class="game">
    <div class="game__winner">
      <span>Winner: <strong>{{ game.winnerName }}</strong></span>
    </div>
    <div class="game__cta">
      <button class="btn btn--secondary" @click="openReplay(game)">Replay</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Score',
  props: {
    game: {
      type: Object,
      required: true,
    },
    openReplay: {
      type: Function,
      required: true,
    }
  }
}
</script>
