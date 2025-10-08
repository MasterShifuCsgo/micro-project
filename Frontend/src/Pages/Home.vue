<script setup>
import { RouterLink } from 'vue-router'

const oppekavad = [
  {
    name: 'Keeled ja humanitaarteadused',    
  },
  {
    name: 'Matemaatika ja loodusteadused',    
  },
  {
    name: 'Praktilised- ja tehnoloogia ained',    
  },
  {
    name: "Kunsti- ja liikumisained"
  },
  {
    name: 'Sotsiaalained',
  },
]
</script>

<template>
  
  <div>
    <h1 id="title">Õppekavad</h1>
  </div>

  <div id="oppekavad">
    <div v-for="(item, index) in oppekavad" :key="index">
      <h3>{{ item.name }}</h3>

      <router-link :to="'lesson/' + item.name" class="btn">
        Vaata õppeained
      </router-link>      
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
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  height:80svh;
}

#oppekavad div {
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  gap: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;  
  padding: 20px;
  text-align: center;
  width: clamp(15em, 100vw, 20em);  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#oppekavad h1 {
  font-size: 1.5em;
}

@media only screen and (min-width: 600px) {
  #oppekavad {
    display: flex;
  }
}
</style>
