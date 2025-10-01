<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import Star from './Star.vue';
import client from '../../utils/api';

const modalController = ref(null);

const userName = ref(null);
const description = ref(null);
const rating = ref(1);

const { getNewComments, lesson_name } = defineProps({
  getNewComments: {
    type: Function,
    default: () => { console.error("cannot refresh comments because getNewComments wans't given.")}
  },
  lesson_name: {
    type: String,
    default: ""
  }
})

async function submitForm() {
  await client.post("/comment", {
    lesson_name: lesson_name,
    user_name: userName.value,
    comment: description.value,
    rating: rating.value
  })
  getNewComments();
}

defineExpose(modalController)

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

      <button class="btn" type="submit" @click="modalController.close(modalController.id)">Lisa</button>
    </form>
  </Modal>
</template>

<style scoped>

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

.stars {
  display: flex;
  gap: 2px;

}

</style>