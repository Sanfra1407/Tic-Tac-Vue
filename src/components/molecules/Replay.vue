<template>
  <div class="replay-backdrop" v-if="active" @click="$emit('close-replay')">
    <div class="replay-wrapper">
      <div class="container">
        <Cells :positions="game.positions" replay />
      </div>
      <Footer>
        <div class="text-center">
          <h3 class="footer-player">
            <strong>{{ game.winnerName }}</strong> won this match!
          </h3>
        </div>
      </Footer>
    </div>
  </div>
</template>

<script>
import { Cells } from "./";
import { Footer } from "../atoms";

export default {
  name: 'Replay',
  components: {
    Cells,
    Footer,
  },
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    game: {
      type: Object,
      required: true,
    }
  },
  methods: {
    _keyPressListener (e) {
      if (e.keyCode === 27) {
        this.$emit('close-replay');
      }
    }
  },
  mounted() {
    document.querySelector('.game-history').addEventListener('keydown', this._keyPressListener);
  },
  destroyed() {
    document.querySelector('.game-history').removeEventListener('keydown', this._keyPressListener);
  }
}
</script>

<style lang="scss" scoped>
  .replay {
    &-backdrop {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      position: fixed;
      background-color: rgba(#000000, 0.7);
    }

    &-wrapper {
      padding: 25px 0;
      max-width: 600px;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      background-color: #FFFFFF;
    }
  }
</style>
