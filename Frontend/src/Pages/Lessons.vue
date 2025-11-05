// ...existing code...
<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import client from '../utils/api.js';
import lessons from '../../../shared/lessons.json' with {type: "json"}

const { lesson_name } = defineProps({
  lesson_name: {
    type: String,
    default: "Nothing"
  }
})

const lessonType = lessons[lesson_name]
const subjects = ref([]);

async function fetchCommentCount(name) {
  try {
    const res = await client.get("/comment/count", { params: { name } })
    return res.data.count;
  } catch (err) {
    console.error(err.response?.data || err);
    return null;
  }
}

onMounted(async () => {
  subjects.value = await Promise.all(
    (lessonType || []).map(async (name) => ({
      name, comments: await fetchCommentCount(name)
    }))
  )
})
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">{{ lesson_name }}</h1>

    <div class="row g-3 justify-content-center">
      <div
        v-for="subject in subjects"
        :key="subject.name"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate mb-2">{{ subject.name }}</h5>
            <p class="mb-3 text-muted">{{ subject.comments || 0 }} kommentaari</p>
            <RouterLink :to="`/comments/${subject.name}`" class="btn btn-primary mt-auto w-100">
              Vaata lähemalt
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <RouterLink class="btn btn-secondary d-block mx-auto mt-4" to="/">Mine tagasi</RouterLink>
  </div>
</template>

