<script setup>

</script>
<template>

  <div class="container">
    <div class="areas">
      <h1>Kommentaaride statistika</h1>
      <main>
        <div class="oppekavade_statistika"></div>
        <div class="kommentaaride_statistika"></div>
      </main>
    </div>
  </div>

</template>
<style lang="css">
.container {
  display: grid;
  justify-items: center;
  
}

.areas {
  grid-template-areas: "main", "main", "main";
}

main {
  grid-area: main;
}

.content {
  padding: 20px 20px;
  background-color: gray;
  width: 100%;
  height: 100%;
}
</style>
