// ...existing code...
<script setup>
import { RouterLink } from 'vue-router'

const oppekavad = [
  { name: 'Keeled ja humanitaarteadused' },
  { name: 'Matemaatika ja loodusteadused' },
  { name: 'Praktilised- ja tehnoloogia ained' },
  { name: "Kunsti- ja liikumisained" },
  { name: 'Sotsiaalained' },
]
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center my-4">Õppekavad</h1>

    <div class="row g-3 justify-content-center">
      <div
        v-for="(item, index) in oppekavad"
        :key="index"
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
      >
        <!-- use only Bootstrap classes; inline min-height to keep cards equal -->
        <div class="card shadow-sm d-flex flex-column w-100 h-100" style="min-height:150px;">
          <div class="card-body d-flex flex-column h-100">
            <div class="mb-3 flex-grow-1 overflow-auto">
              <h5 class="card-title mb-0">{{ item.name }}</h5>
            </div>

            <div class="mt-3">
              <RouterLink :to="'lesson/' + item.name" class="btn btn-primary w-100">
                Vaata õppeained
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
// ...existing code...