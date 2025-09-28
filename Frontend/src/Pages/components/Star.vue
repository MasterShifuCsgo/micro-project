<script setup>

  const props = defineProps({
    disabled: {
      type: Boolean,
      default: true
    },
    size: {
      type:Number,
      default: 25
    }
  })
  

</script>
<template>
  <div class="star" 
  :style="{
    width: size + 'px',
    height: size + 'px'
  }"
  :class="{disabled: disabled}"></div>
</template>
<style scoped>
.star {  
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