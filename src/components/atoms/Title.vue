<template functional>
  <div class="container">
    <h1 class="is-title text-center">
      <span v-if="props.label">{{ props.label }}</span>
      <slot v-else></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    label: {
      type: String,
      required: false
    }
  }
}
</script>
