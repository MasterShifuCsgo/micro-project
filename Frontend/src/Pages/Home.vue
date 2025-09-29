<script setup>
import { RouterLink } from 'vue-router'

const oppekavad = [
  {
    title: 'Keeled ja humanitaarteadused',
    route: '/languages'
  },
  {
    title: 'Matemaatika ja loodusteadused',
    route: '/maths'
  },
  {
    title: 'Parktilised ja tehnoloogia ained',
    route: "/practical"
  },
  {
    title: 'Kunsti- ja liikumisained',
    route: "/arts"
  },
  {
    title: 'Sotsiaalained',
    route: "/socials"
  },
]
</script>

<template>
  <div>
    <h1 id="title">Õppekavad</h1>
  </div>

  <div id="oppekavad">
    <div v-for="(item, index) in oppekavad" :key="index">
      <h3>{{ item.title }}</h3>

      <router-link v-if="item.route" :to="item.route" class="btn">
        Vaata õppeained
      </router-link>

      <button v-else class="btn-disabled" disabled>Vaata õppeained</button>
    </div>
  </div>
</template>

<style scoped>
#title {
  text-align: center;
  margin-top: 20px;
  font-size: 2.5em;
}

.button {
  margin-top: 20px;
}

#oppekavad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

#oppekavad div {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#oppekavad h1 {
  font-size: 1.5em;
}
</style>