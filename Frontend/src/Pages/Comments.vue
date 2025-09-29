<script setup>
import { onMounted, ref } from 'vue';
import client from '../utils/api.js';
import Star from './components/Star.vue';
import Modal from './components/Modal.vue';

const { lesson_name } = defineProps({
  lesson_name: {
    type: String,
    default: ""
  }
})

const modalController = ref(null);
const comments = ref([]);

//form
const userName = ref(null);
const description = ref(null);
const rating = ref(1);



async function fetchComments(){  
  // fetch comments from the server
  const { data } = await client.get("/comment", { params: { name: lesson_name } });
  comments.value = data.result;
}

async function submitForm() {  
  client.post("/comment", { user_name: userName.value, lesson_name: lesson_name, comment: description.value, rating: rating.value })  

  const oldComments = comments.value;
  await fetchComments()      
  console.log(oldComments, comments.value)
  while(oldComments.length === comments.value.length){    
    setTimeout(() => {console.log("waiting for change")}, 200)    
    await fetchComments()    
  }  

}

onMounted(async () => {
  await fetchComments();
})


</script>

<template>
  <Modal ref="modalController">
    <form @submit.prevent="submitForm" class="form">
      <div class="inputs">
        <div class="field">
          <label>Sinu nimi</label>
          <input type="text" v-model="userName" required />
        </div>

        <div class="field">
          <label>Lisa Kommentaar</label>
          <textarea rows="10" cols="45" v-model="description" required></textarea>
        </div>

        <div class="field" style="display: flex; flex-direction: column; gap: 4px;">
          <label>Anna Hinnang</label>
          <div class="stars">
            <Star style="cursor: pointer;" :size="33" v-for="i in 5" :key="i" :disabled="rating < i"
              @click="() => { rating = i }" />
          </div>
        </div>
      </div>

      <button class="btn" type="submit" @click="modalController.toggle(modalController.id)">Lisa</button>
    </form>

  </Modal>
  <div class="container">
    <h1>{{ lesson_name }}</h1>
    <div class="content">
      <nav class="buttons">
        <button class="btn" @click="modalController.toggle(modalController.id)">Lisa</button>
      </nav>
      <div class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-container">
          <div class="details">
            <p class="title">{{ comment.user_name }}</p>
            <div class="stars">
              <Star v-for="i in 5" :key="i" :disabled="comment.rating < i" />
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

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 2em 0em;
}

.form>.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form button {
  width: min-content;
}

.form .field label {
  display: flex;
  flex-direction: column;
  font-size: large;
}

.form .field>input,
textarea {
  border: solid 2px #2D72C2;
  border-radius: 0px 1em 1em;
  padding: 12px 14px;
  font-size: larger;
}

.form .field>textarea {
  padding: 7px 10px;
  width: 460px;
}

.form .field>input {
  width: 350px;
}

.form .field>label {
  font-weight: 500;
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

.stars {
  display: flex;
  gap: 2px;

}
</style>