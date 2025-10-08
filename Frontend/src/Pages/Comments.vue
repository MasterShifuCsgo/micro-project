<script setup>
import { onMounted, ref } from 'vue';
import client from '../utils/api.js';
import Star from './components/Star.vue';
import CommentForm from './components/CommentForm.vue';
import { RouterLink } from 'vue-router';

const { lesson_name } = defineProps({
  lesson_name: {
    type: String,
    default: ""
  }
})

const modalController = ref(null);
const comments = ref([]);

async function getNewComments() {
  const oldCommentsLen = comments.value.length;
  while (oldCommentsLen === comments.value.length) {
    console.log("Fetching comments");
    await fetchComments()
  }
}

async function fetchComments() {
  // fetch comments from the server
  const { data } = await client.get("/comment", { params: { name: lesson_name } });
  comments.value = data.result;
  console.log("Comments Fetched")
}

onMounted(async () => {
  await fetchComments();
})

</script>

<template>
  <!-- sending getNewComments is ok. its alright because CommentForm only needs to access the current 'comments' in the Parent Component. 
  The inital problem was that sending this prop would cause tech debt; i thought this component was going to get used somewhere else too, so getNewComments would be impossible to implement 
  lesson_name is a requirement by default for the API call -->
  <CommentForm ref="modalController" :lesson_name="lesson_name" :getNewComments="getNewComments" />  
  
  <div class="container">
    <h1>{{ lesson_name }}</h1>
  <RouterLink class="btn secondary" to="/">Mine tagasi</RouterLink>
    <div class="content">
      <nav class="buttons">
        <button class="btn" @click="modalController.open(modalController.id)">Lisa</button>
      </nav>
      <div class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <div class="details">
            <p class="title">{{ comment.user_name }}</p>
            <div class="stars">
              <Star v-for="i in 5" :key="i" :disabled="comment.rating < i" />
            </div>
          </div>
          <p class="comment-body">{{ comment['comment'] }}</p>
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
  box-sizing: border-box;
  padding: 0px 2em;
}

.comments-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  overflow-y: auto;
}

.comment {
  display: flex;
  flex-direction: column;
  border: solid;
  border-color: #2F98D9;
  border-radius: 15px;
  padding: 18px 22px;
  width: 100%;
  box-sizing: border-box;
  gap: 10px;
}

.comment>.details {
  display: flex;
  flex-wrap: wrap;
  gap: 12px
}

.comment>.details>.title {
  font-weight: bold;
  white-space: pre;
  font-size: 1.4em;
}

.stars {
  display: flex;
  gap: 2px;

}
</style>