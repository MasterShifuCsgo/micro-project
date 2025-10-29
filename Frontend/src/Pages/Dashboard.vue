<script setup>
import DashBoardItem from './components/DashBoardItem.vue';


const hinnangud = [
  { nimetus: 'Keeled ja humanitaarteadused', hinne: '4/5' },
  { nimetus: 'Matemaatika ja loodusteadused', hinne: '4/5' },
  { nimetus: 'Praktilised ja tehnoloogia ained', hinne: '4/5' },
];


const kommentaarid = [
  { nimetus: 'Matemaatika', kommentaarid: '13' },
  { nimetus: 'loodusteadused', kommentaarid: '13' },
  { nimetus: 'tehnoloogia ained', kommentaarid: '13' },
];

</script>

<template>
  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="w-100">
      <h1 class="text-center mb-4">Kommentaaride statistika</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="oppekavade-statistika p-4">
            <!-- Header Row -->
            <div class="row border-bottom mb-2 pb-2 fw-bold">
              <DashBoardItem content="Nimetus"/>
              <DashBoardItem content="Hinnang"/>
            </div>

            <!-- Data Rows -->
            <div class="row align-items-center py-2 border-bottom" v-for="(item, i) in hinnangud" :key="i">
              <DashBoardItem :content="item.nimetus"/>
              <DashBoardItem :content="item.hinne"/>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="oppekavade-statistika p-4">
            <!-- Header Row -->
            <div class="row border-bottom mb-2 pb-2 fw-bold">
              <DashBoardItem content="Õppekava"/>
              <DashBoardItem content="Kommentaarid"/>
            </div>

            <!-- Data Rows -->
            <div class="row align-items-center py-2 border-bottom" v-for="(item, i) in kommentaarid" :key="i">
              <DashBoardItem :content="item.nimetus"/>
              <DashBoardItem :content="item.kommentaarid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.oppekavade-statistika {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.max-w-900 {
  max-width: 900px;
}

.oppekavade-statistika .row:last-child {
  border-bottom: none !important;
}
</style>
