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
  <CommentForm ref="modalController" :lesson_name="lesson_name" :getNewComments="getNewComments" />


  <div class="container py-4 page-scrollable">
    <h1 class="mb-4">{{ lesson_name }}</h1>

    <div class="mb-3 d-flex justify-content-end">
      <button class="btn btn-primary" @click="modalController.open(modalController.id)">Lisa</button>
    </div>

    <div class="row">
      <div class="col-12">
        <div v-if="comments.length === 0" class="alert alert-secondary" role="alert">
          Pole kommentaare
        </div>

        <div v-else class="list-group">
          <div v-for="comment in comments" :key="comment.id" class="list-group-item p-3 mb-2">
            <div class="d-flex justify-content-between align-items-start">
              <div class="me-3">
                <h5 class="mb-1">{{ comment.user_name }}</h5>
              </div>
              <div class="d-flex align-items-center">
                <div class="d-flex" role="img" aria-label="rating">
                  <Star v-for="i in 5" :key="i" :disabled="comment.rating < i" />
                </div>
              </div>
            </div>
            <p class="mb-0 mt-2 text-break">{{ comment['comment'] }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <RouterLink class="btn btn-secondary" to="/">Mine tagasi</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.text-break { word-break: break-word; }

.page-scrollable {
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-right: 0.5rem;
}
</style>