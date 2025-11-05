<template>
  <div>
    <div v-if="visible">
      <div class="modal-backdrop fade show"></div>

      <div class="modal d-block" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Lisa kommentaar</h5>
              <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
            </div>

            <form @submit.prevent="submit">
              <div class="modal-body">
                <div v-if="error" class="alert alert-danger small" role="alert">{{ error }}</div>

                <!-- Õppeaine is fixed and not editable -->
                <div class="mb-3">
                  <label class="form-label">Õppeaine</label>
                  <p class="form-control-plaintext">{{ lesson_name || '—' }}</p>
                </div>

                <div class="mb-3">
                  <label for="cf-username" class="form-label">Sinu nimi</label>
                  <input id="cf-username" type="text" class="form-control" v-model="form.user_name" placeholder="Sinu nimi" />
                </div>

                <div class="mb-3">
                  <label for="cf-rating" class="form-label">Hinne</label>
                  <select id="cf-rating" class="form-select" v-model.number="form.rating">
                    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="cf-comment" class="form-label">Kommentaar</label>
                  <textarea id="cf-comment" class="form-control" rows="5" v-model="form.comment" placeholder="Kirjuta kommentaar..."></textarea>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="close" :disabled="loading">Tühista</button>
                <button type="submit" class="btn btn-primary" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Salvesta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import client from '../../utils/api.js';

const props = defineProps({
  lesson_name: {
    type: String,
    default: ''
  },
  getNewComments: {
    type: Function,
    required: false
  }
});

const visible = ref(false);
const id = ref('comment-modal');
const loading = ref(false);
const error = ref(null);

const form = reactive({
  user_name: '',
  rating: 5,
  comment: ''
});

// keep form in sync if lesson_name prop changes (no editable name field)
watch(() => props.lesson_name, (v) => {
  // no action needed except ensuring value used on submit
});

function open(customId) {
  if (customId) id.value = customId;
  visible.value = true;
  error.value = null;
  // reset other fields
  form.user_name = '';
  form.rating = 5;
  form.comment = '';
}

function close() {
  visible.value = false;
  error.value = null;
  loading.value = false;
}

async function submit() {
  if (!props.lesson_name) {
    error.value = 'Õppeaine puudub';
    return;
  }
  if (!form.user_name || !form.comment) {
    error.value = 'Palun täida kõigi väljad';
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    await client.post('/comment', {
      name: props.lesson_name,       // use prop, not editable field
      user_name: form.user_name,
      rating: form.rating,
      comment: form.comment
    });

    if (typeof props.getNewComments === 'function') {
      try { await props.getNewComments(); } catch(e){ /* ignore */ }
    }

    close();
  } catch (e) {
    error.value = e.response?.data?.message || e.message || 'Serveri viga';
  } finally {
    loading.value = false;
  }
}

defineExpose({ open, id });
</script>
