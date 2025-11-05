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


  userName.value = null;
  description.value = null;
  rating.value = 1;
}

defineExpose(modalController)

</script>

<template>
  <Modal ref="modalController">
    <div class="card mx-auto shadow-sm" role="dialog" aria-modal="true">
      <div class="card-body p-4">
        <h5 class="card-title mb-3">Lisa kommentaar</h5>

        <form @submit.prevent="submitForm" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="cf-name" class="form-label">Sinu nimi</label>
            <input id="cf-name" type="text" v-model="userName" required class="form-control" />
          </div>

          <div class="mb-3">
            <label for="cf-comment" class="form-label">Lisa Kommentaar</label>
            <textarea id="cf-comment" rows="6" v-model="description" required class="form-control"></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label d-block">Anna Hinnang</label>
            <div class="stars d-flex align-items-center" role="radiogroup" aria-label="Hinnang">
              <Star
                v-for="i in 5"
                :key="i"
                :size="28"
                :disabled="rating < i"
                @click="() => { rating = i }"
                :aria-checked="rating === i"
                role="radio"
                :title="`${i} täht`"
              />
            </div>
          </div>

          <div class="d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-secondary" @click="modalController.close(modalController.id)">Tühista</button>
            <button type="submit" class="btn btn-primary" @click="modalController.close(modalController.id)">Lisa</button>
          </div>
        </form>
      </div>
    </div>
  </Modal>
</template>

<style scoped>

.card {
  width: 100%;

  border-radius: 0.75rem;
}

.card-title {
  font-weight: 600;
}

.stars {
  gap: 0.5rem;
}


.stars ::v-deep svg,
.stars ::v-deep .star {
  cursor: pointer;
  transition: transform 0.08s ease;
}
.stars ::v-deep svg:hover,
.stars ::v-deep .star:hover {
  transform: scale(1.05);
}


textarea.form-control {
  resize: vertical;
  min-height: 6rem;
}


@media (min-width: 992px) {
  .card-body {
    padding: 1.5rem;
  }
}
</style>