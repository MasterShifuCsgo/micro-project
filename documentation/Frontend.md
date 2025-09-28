# Frontend documentation

## Kuidas Kasutada **Api.js**

```js
//Näited
import client from "api.js"
//axios paneb params automaatselt query'ks, ehk ...host:3000/comments?nimi=matemaatika
client.get('/comment', { params: { name: 'matemaatika' } })
client.post('/comment', { name: 'uus nimi', comment: 'Kaspar', rating: 2 })
//teine parameeter on body.
```

## Kuidas Modal.vue töötab

Modal saadab tagasi objeckti, mille sees on 2 field-i 
1. toggle 
2. id

Kasutus juhend
```js
//võid ükskõik kuidas nimetada
const modalController = ref(null);

onMounted(async () => {  
  //peab näitama väärtuseid
  console.log(modalController.value.id)
  console.log(modalController.value.toggle)
})

</script>

<template>  
  <Modal ref="modalController">
    <h1>Hello! I am alive!</h1>
  </Modal>
  <button @click="modalController.toggle(modalController.id)">Ava</button>
</template>  
```

1. id - määrab millise modaliga on tegu
2. toggle(id) - avab või paneb kinni modali antud id-ga. default on 'modal-0'











