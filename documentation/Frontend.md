# Frontend documentation

## Manual

### Kuidas Kasutada **Api.js**

```js
//Näited
import client from "api.js"
//axios paneb params automaatselt query'ks, ehk ...host:3000/comments?nimi=matemaatika
client.get('/comment', { params: { nimi: 'matemaatika' } })
client.post('/comment', { nimi: 'uus nimi', kommentaar: 'Kaspar', hinnang: 2 })
//teine parameeter on body.
```
