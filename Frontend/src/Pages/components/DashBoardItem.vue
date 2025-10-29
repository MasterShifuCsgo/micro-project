<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true
  },
  style: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="col-6 text-start text-truncate" :style="style">
    {{ content }}
  </div>
</template>
