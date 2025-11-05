<script setup>
import { ref } from 'vue';

const active = ref(false);

let modalId = 0;
const id = ref("modal-" + modalId++);

function open(modalId = "modal-0") {
  //if modals id matches the given id - open the modal
  if (id.value === modalId) {
    active.value = true;
  }
}

function close(modalId = "modal-0") {
  //if modals id matches the given id - open the modal
  if (id.value === modalId) {
    active.value = false;
  }
}

defineExpose({ id, open, close });

</script>
<template>
  <div class="modal" v-show="active" :id="id">

      <div class="content">
        <slot></slot>
      </div>

    </div>
</template>

<style scoped>
.modal {
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(116, 116, 116, 0.589);
}


.modal>.container>.top,
.bottom {
  padding: 1em 1em 0em 1em;
  background-color: white;
}

.modal>.container>.top {
  border-radius: 1.5em 1.5em 0em 0em;
  padding: 1em 1em 0em 1em;
}

.modal>.container>.bottom {
  border-radius: 0em 0em 1.5em 1.5em;
  padding: 0em 1em 1em 1em;
}

.modal>.container>.content {
  display: flex;
  justify-content: center;
  width: max-content;
  align-items: center;
  padding: 0em 3em;
  background-color: white;
}

@media (max-width: 700px){

.modal>.container>.content {
  padding: 0em 1em;
}

}

</style>