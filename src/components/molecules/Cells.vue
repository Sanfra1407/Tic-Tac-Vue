<template>
  <div class="cells">
    <Cell v-for="(position, i) in positions" 
          :key="i" :index="i" 
          :position="position" 
          :replay="replay"
    />
  </div>
</template>

<script>
import Cell from '@atoms/Cell';

export default {
  name: 'Cells',
  components: {
    Cell
  },
  
  props: {
    positions: {
      type: Array,
      required: true,
    },
    replay: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>
