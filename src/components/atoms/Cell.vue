<template>
  <div :class="['cell', position || winner ? 'disabled' : '']" @click="toggleCell(index)">
    <span v-if="position" :class="['toggle', activeToggleClass]">{{ position }}</span>
  </div>
</template>

<script>
import { 
  mapActions,
  mapGetters,
  mapMutations,
  mapState
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
      if (this.winner === null && !this.getMarker(this.index)) {
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
    activeToggleClass() {
      if (this.getMarker(this.index) === "X") {
        return "toggle--one";
      } else if (this.getMarker(this.index) === "O") {
        return "toggle--two";
      }

      return null;
    }
  }
};
</script>