<script setup>

</script>
<template>

  <div class="container">
    <div class="areas">
      <h1>Kommentaaride statistika</h1>
      <main>
        <div class="oppekavade_statistika">
        <div>
            <h1 >Õppekavad</h1>
            <div>Keeled ja humanitaarteadused</div>
            <div>Matemaatika ja loodusteadused</div>
            <div>Praktilised- ja tehnoloogia ained</div>
            <div>Kunsti- ja liikumisained</div>
            <div>Sotsiaalained</div>
          </div>
        </div>
        <div class="kommentaaride_statistika">
        2</div>
      </main>
    </div>
  </div>

</template>
<style lang="css">
.container {
  display: flex;
  flex-direction: column;
  height: 100svh;  
  justify-items: center;  
  align-items: center;  
}

main {
  display: flex;
  flex-direction: row;
}

.content {
  padding: 20px 20px;
  background-color: gray;
  width: 100%;
  height: 100%;
}
</style>
