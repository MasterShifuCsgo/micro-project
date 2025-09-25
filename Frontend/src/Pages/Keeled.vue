<script setup>
import { onMounted, ref } from 'vue';
import api from '../utils/api.js';

const client = api();

const subjects = ref([]);

async function fetchCommentCount(nimi) {

    try {
        const res = await client.get("/comment/count", { params: { nimi } })
        console.log("--------")
        console.log(res)
        console.log("--------")
    } catch (err) {
        console.error(err.response.data);
        return null; // fetching Comment failed     
    }

    return res.data;
}

const subjectsNames = [
    "Eesti keel",
    "Inglise keel",
    "Kirjandus",
    "Ajalugu",
    "Filosoofia",
    "Kunstiajalugu"
]

onMounted(async () => {
    subjects.value = await Promise.all(
        subjectsNames.map(async (nimi) => ({
            nimi: nimi, comments: await fetchCommentCount(nimi)
        }))
    )
    console.log(subjects.value)
},)

</script>
<template>
    <h1>
        Keeled ja humanitaarteadused
    </h1>
    <div id="oppeained">
        <div v-for="subject in subjects" :key="subject.nimi">
            <h2>{{ subject.nimi }}</h2>
            <p>{{ subject.comments || 0 }} kommentaari</p>
            <button>Vaata lähemalt</button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;    
    font-size: 2.5em;
}

#oppeained {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

#oppeained div {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#oppeained h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

#oppeained button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

#oppeained button:hover {
    background-color: #0056b3;
}

#oppeained button:focus {
    background-color: #6a6a6b;
}

#oppeained p {
    font-size: 1em;
    color: #555;
    margin-bottom: 10px;
}
</style>