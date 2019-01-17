<template>
  <div id="app">
    <div class="page" v-if="hasPlayers">
      <Navbar/>
      <router-view/>
    </div>
    <Players v-else />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { 
  Navbar,
  Players
} from "./components/atoms/";

export default {
  components: {
    Navbar,
    Players
  },
  computed: {
    ...mapState([
      "gameHistory"
    ]),
    ...mapGetters([
      'hasPlayers'
    ])
  }
};
</script>

<style lang="scss">
@import "src/scss/app.scss";
</style>
