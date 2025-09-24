<script setup>
import { onMounted } from 'vue';
import api from '../utils/api.js';

const client = api();
onMounted(async () => {
    const { data, status } = await client.get("/comment", {
        params: { nimi: "matemaatika" }
    })
    console.log(data, status)
})

</script>

<template>
    <div>
        <h1 id="title">Õppekavad</h1>
    </div>
    <div id="oppekavad">
        <div>
            <h1>Keeled ja humanitaarteadused</h1>
            <button><router-link to="/keeled">Vaata õppeained</router-link></button>
        </div>
        <div>
            <h1>Matemaatika ja loodusteadused</h1>
            <button>Vaata õppeained</button>
        </div>
        <div>
            <h1>Parktilised ja tehnoloogia ained</h1>
            <button>Vaata õppeained</button>
        </div>
        <div>
            <h1>Kunsti- ja liikumisained</h1>
            <button>Vaata õppeained</button>
        </div>
        <div>
            <h1>Elu- ja sotsiaalained</h1>
            <button>Vaata õppeained</button>
        </div>
    </div>
</template>

<style scoped>
#title {
    text-align: center;
    margin-top: 20px;
    font-size: 2.5em;
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

#oppekavad button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

#oppekavad button:hover {
    background-color: #0056b3;
}

#oppekavad button:focus {
    background-color: #6a6a6b;
}
</style>