<template>
  <transition name="fade">
    <div class="replay__backdrop" v-if="active" @click="$emit('close-replay')">
      <div class="replay__wrapper">
        <div class="container">
          <Cells :positions="game.positions" replay />
        </div>
        <Footer>
          <div class="text--center">
            <h3 class="footer__player">
              <strong>{{ game.winnerName }}</strong> won this match!
            </h3>
          </div>
        </Footer>
      </div>
    </div>
  </transition>
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
    document.querySelector('.page-game-history')
            .addEventListener('keydown', this._keyPressListener);
  },
  destroyed() {
    document.querySelector('.page-game-history')
            .removeEventListener('keydown', this._keyPressListener);
  }
}
</script>