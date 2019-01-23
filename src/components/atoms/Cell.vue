<template>
  <div :class="['cell', isDisabled ? 'disabled' : '']" @click="toggleCell(index)">
    <span v-if="position" :class="['toggle', activeToggleClass]">{{ position }}</span>
  </div>
</template>

<script>
import { 
  mapState,
  mapActions,
  mapGetters,
  mapMutations
} from "vuex";

export default {
  name: "Cell",
  props: {
    index: {
      type: Number,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: ""
    },
    replay: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    ...mapActions([
      "addMarker"
    ]),
    ...mapMutations([
      "checkWinning"
    ]),
    toggleCell(index) {
      if (! this.isDisabled) {
        this.addMarker({
          index
        });
        this.checkWinning({
          player: this.getMarker(this.index)
        });
      }
    }
  },
  computed: {
    ...mapState([
      "winner"
    ]),
    ...mapGetters([
      "getMarker"
    ]),
    isDisabled() {
      return this.position || this.winner || this.replay;
    },
    getPosition() {
      return this.position || this.getMarker(this.index);
    },
    activeToggleClass() {
      if (this.getPosition === "X") {
        return "toggle--one";
      } else if (this.getPosition === "O") {
        return "toggle--two";
      }

      return null;
    }
  }
};
</script>