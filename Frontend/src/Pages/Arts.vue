
<script setup>
import { onMounted, ref } from 'vue';
import client from '../utils/api.js';
import lessons from '../../../shared/lessons.json'
import { RouterLink } from 'vue-router'

const arts = lessons.arts
const subjects = ref([]);

async function fetchCommentCount(name) {
  try {
    const res = await client.get("/comment/count", { params: { name } })
    return res.data.count;
  } catch (err) {
    console.error(err.response.data);
    return null; // fetching Comment failed
  }
}

onMounted(async () => {
  subjects.value = await Promise.all(
    arts.map(async (name) => ({
      name, comments: await fetchCommentCount(name)
    }))
  )
})

</script>
<template>
  <h1>
    Kunsti- ja liikumisained
  </h1>
  <div id="oppeained">
    <div v-for="subject in subjects" :key="subject.name" class="lessons">
      <div class="details">
        <h2 style="margin: 0px">{{ subject.name }}</h2>
        <p>{{ subject.comments || 0 }} kommentaari</p>
      </div>
      <router-link class="btn" :to="`/comments/${subject.name}`">
        Vaata lähemalt
      </router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: clamp(2em, 5vw, 2.5em);
}

#oppeained {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

}

.details {
  display: flex;
  flex-direction: column;
  gap: 5px
}

.lessons {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2em 10em;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>