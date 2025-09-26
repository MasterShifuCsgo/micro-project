<script setup>

  const props = defineProps({
    disabled: {
      type: Boolean,
      default: true
    }
  })

</script>
<template>
  <div class="star" :class="{disabled: disabled}"></div>
</template>
<style scoped>
.star {
  width: 25px;
  height: 25px;
  background: #2F98D9;
  clip-path: polygon(50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%);
}

.star.disabled {
  background: #acacac;
}
</style>