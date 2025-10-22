<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">Lessons Dashboard</h1>

    <div class="grid grid-cols-3 gap-4">
      <div class="bg-gray-100 p-4 rounded-xl text-center">
        <h2 class="text-lg font-semibold">Total Lessons</h2>
        <p class="text-3xl">{{ dashboard.totals?.totalLessons }}</p>
      </div>
      <div class="bg-gray-100 p-4 rounded-xl text-center">
        <h2 class="text-lg font-semibold">Total Comments</h2>
        <p class="text-3xl">{{ dashboard.totals?.totalComments }}</p>
      </div>
      <div class="bg-gray-100 p-4 rounded-xl text-center">
        <h2 class="text-lg font-semibold">Avg Comments/Lesson</h2>
        <p class="text-3xl">{{ dashboard.totals?.avgComments?.toFixed(1) }}</p>
      </div>
    </div>

    <section>
      <h2 class="text-xl font-bold mt-6 mb-2">Top Lessons</h2>
      <ul class="list-disc ml-5">
        <li v-for="lesson in dashboard.topLessons" :key="lesson.id">
          {{ lesson.title }} — {{ lesson.comments }} comments
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-xl font-bold mt-6 mb-2">Recent Comments</h2>
      <div v-for="c in dashboard.recentComments" :key="c.id" class="border-b py-2">
        <p><strong>{{ c.author || 'Anonymous' }}</strong> on <em>{{ c.lesson_title }}</em></p>
        <p class="text-gray-600">{{ c.content }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const dashboard = ref({});

onMounted(async () => {
  const res = await fetch("/api/dashboard");
  dashboard.value = await res.json();
});
</script>

<style scoped>

</style>
