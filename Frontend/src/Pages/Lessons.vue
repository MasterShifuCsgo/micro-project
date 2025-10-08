<script setup>
import { onMounted, ref } from 'vue';
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
    console.error(err.response.data);
    return null; // fetching Comment failed
  }
}

onMounted(async () => {
  console.log('1.', lesson_name)  
  subjects.value = await Promise.all(
    lessonType.map(async (name) => ({
      name, comments: await fetchCommentCount(name)
    }))
  )
})

</script>

<template>  
  <div style="display: flex; justify-content: center; align-content: center; flex-direction: column; overflow-y: auto; height: 100vh; ">
  <h1>
    {{ lesson_name }}
  </h1>
  <div id="oppeained">

    <div v-for="subject in subjects" :key="subject.name" class="lessons">
      <div class="details">
        <div class="title">
          <h2 style="margin: 0px">{{ subject.name }}</h2>
        </div>
        <p>{{ subject.comments || 0 }} kommentaari</p>
      </div>
      <router-link class="btn" :to="`/comments/${subject.name}`">
        Vaata lähemalt
      </router-link>
    </div>
  </div >
    <RouterLink class="btn secondary" to="/" style="margin: auto; margin-top: 3rem;">Mine tagasi</RouterLink>
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
  padding: 0px 3em;
}

.details {
  display: flex;
  flex-direction: column;    
  gap: 5px;  
}

.lessons {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2em 3em;
  min-width:  clamp(10em, 10vw, 20em);  
  max-width:  clamp(10em, 10vw, 20em);
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.lessons > .details > .title > h2 {
  overflow-x: auto;   
}


</style>