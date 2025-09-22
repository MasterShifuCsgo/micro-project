# Frontend documentation


## Manual

### Kuidas Kasutada **Api.js**

```js

//Näited
const client = api();
//axios paneb params automaatselt query'ks, ehk ...host:3000/comments?nimi=matemaatika
client.get("/comments", { params: { nimi: "matemaatika" } });
client.post("/comments", { nimi: "uus nimi", kommentaar: "Kaspar", hinnang: 2 });
//teine parameeter on body.
```
