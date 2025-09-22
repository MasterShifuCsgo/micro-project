# API documentation

## Create comment

### `"/comment?tunni_nimetus" endpoint`

tunni_nimetus peab olema object, mis peab sisaldama väljasi:

```
 {
  nimi: String
  kommentaar: String
  hinnang: Number -- 0 kuni 5
 }
```

vaata `/shared/typechecks/tunni_nimetus.js`

### Error codes:

| Kood | Kirjeldus                                         |
| ---- | ------------------------------------------------- |
| 204  | komentaar tekitatud.                              |
| 400  | klient saatis kutse, mida server ei saa kasutada. |
| 500  | Andmebaas ei suutnud tekitada komentaari          |
