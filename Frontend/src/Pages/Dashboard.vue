<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import DashBoardItem from './components/DashBoardItem.vue';
import lessons from "../../../shared/lessons.json" with { type: 'json' };
import client from '../utils/api';

const hinnangud = [
  { nimetus: 'Keeled ja humanitaarteadused', hinne: '4/5' },
  { nimetus: 'Matemaatika ja loodusteadused', hinne: '4/5' },
  { nimetus: 'Praktilised ja tehnoloogia ained', hinne: '4/5' },
  { nimetus: 'Kunsti- ja liikumisained', hinne: '4/5' },
  { nimetus: 'Sotsiaalained', hinne: '4/5' },
  { nimetus: '', hinne: '' },
  { nimetus: 'keskmine', hinne: '4.5/5' },
];


const kommentaarid = [
  { nimetus: 'Matemaatika', kommentaarid: '13' },
  { nimetus: 'loodusteadused', kommentaarid: '13' },
  { nimetus: 'tehnoloogia ained', kommentaarid: '13' },
];

const available_lessons = computed(() => {

  const lessonsSet = new Set();
  Object.values(lessons)
    .map(category => {
      category.map(lesson => {
        lessonsSet.add(lesson);
      });
    });

  return lessonsSet;
});

const lessons_data = reactive([]);
onMounted(async () => {
  for (const lesson of available_lessons.value) {
    //get all the lessons all ratings    
    try {
      const res = await client.get('/comment/commentstats', { params: { name: lesson } });
      lessons_data.push(res.data);
    } catch (error) {
      console.error('Error fetching comment stats or counts:', error);
    }
  }
});


</script>

<template>
  <div class="container d-flex align-items-center justify-content-center min-vh-100 ">
    <div class="w-100">
      <h1 class="text-center mb-4">Kommentaaride statistika</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4 ">
        <div class="col">
          <div class="oppekavade-statistika p-4">

            <div class="row border-bottom mb-2 pb-2 fw-bold">
              <DashBoardItem content="Õppekava nimetus" />
              <DashBoardItem content="Keskmine hinnang" />
            </div>
            <div class="row align-items-center py-2 border-bottom" :key="i">            
              <template v-for="(value, i) in lessons_data">
                <DashBoardItem :content="value.lesson" />
                <DashBoardItem :content="value.average_rating | 0" />
              </template>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="oppekavade-statistika p-4">

            <div class="row border-bottom mb-2 pb-2 fw-bold">
              <DashBoardItem content="Õppekava" />
              <DashBoardItem content="Kommentaarid" />
            </div>

            <div class="row align-items-center py-2 border-bottom" :key="i">            
              <template v-for="(value, i) in lessons_data">
                <DashBoardItem :content="value.lesson" />
                <DashBoardItem :content="value.comment_count | 0" />
              </template>
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
