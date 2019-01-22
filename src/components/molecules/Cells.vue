<template>
  <div class="cells">
    <Cell v-for="(position, i) in positions" :key="i" :index="i" :position="position" />
  </div>
</template>

<script>
import { Cell } from '../atoms';

export default {
  name: 'Cells',
  components: {
    Cell
  },
  props: {
    positions: {
      type: Array,
      required: true,
    }
  },
}
</script>
