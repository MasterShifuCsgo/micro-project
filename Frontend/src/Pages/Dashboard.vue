<script setup>
const hinnangud = [
  { nimetus: 'Keeled ja humanitaarteadused', hinne: '4/5' },
  { nimetus: 'Matemaatika ja loodusteadused', hinne: '4/5' },
  { nimetus: 'Praktilised ja tehnoloogia ained', hinne: '4/5' },
];

</script>
<template>

  <div class="container">
    <div class="areas">
      <h1>Kommentaaride statistika</h1>
      <main>
        <div class="oppekavade-statistika py-4">
          <div class="oppekavade-statistika py-4">
            <div class="container">

              <div class="row border-bottom mb-2 pb-1 fw-bold">
                <div class="col-sm-8 text-start">
                  Nimetus
                </div>
                <div class="col-sm-4 text-start">
                  Hinnang
                </div>
              </div>

              <!-- Rea kordused -->
              <div class="row align-items-center py-2 border-bottom" v-for="(item, i) in hinnangud" :key="i">
                <div class="col-sm-8 text-start">
                  {{ item.nimetus }}
                </div>
                <div class="col-sm-4 text-start fw-semibold">
                  {{ item.hinne }}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="kommentaaride_statistika">
        </div>
      </main>
    </div>
  </div>

</template>
<style lang="css">
.oppekavade-statistika {
  background-color: #f8f9fa;
  border-radius: 10px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  height: 50%; 
}

.oppekavade-statistika .row {
  font-size: 1rem;
}

.oppekavade-statistika .row:last-child {
  border-bottom: none;
}

.oppekavade-statistika .col-sm-8,
.oppekavade-statistika .col-sm-4 {
  padding-left: 1rem;
}


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
