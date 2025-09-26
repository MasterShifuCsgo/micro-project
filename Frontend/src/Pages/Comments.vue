<script setup>
import { onMounted, ref } from 'vue';
import client from '../utils/api.js';
import Star from './components/Star.vue';

const { name } = defineProps({
  name: {
    type: String,
    default: ""
  }  
})

const comments = ref([]);

// fetch comments from the server
async function getComments(){
  return await client.get("/comment", {params: {name: name}});
}

onMounted(async () => {
  const { data } = await getComments();
  console.log(data.result)
  comments.value = data.result;
})


</script>

<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <div class="content">
      <nav class="buttons">
        <button class="btn">Lisa</button>
      </nav>
      <div class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-container">
          <div class="details">
            <p class="title">{{ comment.lesson_name }}</p>
            <div class="stars">
              <Star v-for="i in 5" :key="i" :disabled="comment.rating < i"/>
            </div>
          </div>
          <p class="comment">{{ comment['comment'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: row-reverse;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 80vh;
}

.comments-list {
  display: flex;
  flex-direction: column;
  min-width: 600px;
  height: 100%;
  gap: 10px;
  overflow-y: auto;
}

.comment-container {
  display: flex;
  flex-direction: column;
  border: solid;
  border-color: #2F98D9;
  border-radius: 15px;
  padding: 18px 22px;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  gap: 10px;
}

.comment-container>.details {
  display: flex;
  flex-direction: row;
  gap: 12px
}

.comment-container>.details>.title {
  font-weight: bold;
  font-size: 1.4em;
}

.comment-container>.comment {}

.stars {
  display: flex;
  gap: 5px;

}
</style>