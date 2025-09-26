# API Documentation

## Standard Error response

`{ error: "Error as a string"}`

## Create Comment

**Endpoint:** `POST /comment`

Request body **peab olema object** milles on järgmised read:

```json
{
  "name": "String",
  "comment": "String",
  "rating": 4 // 0 kuni 5 kaasaarvatud
}
```

> Vaata `/shared/typechecks/tunni_nimetus.js`

### Tulemused

**Result:** Loob uue kommentaari seotud tunniga. Ei saada midagi tagasi, peale error-ite

### Error Codes

| Kood | Kirjeldus                                                       |
| ---- | --------------------------------------------------------------- |
| 201  | Kommentaar tekitatud                                            |
| 400  | Vigane kutse, mida server ei saa kasutada, tavaliset tüübi viga |
| 500  | Andmebaas ei suutnud tekitada kommentaari                       |

---

## Get Comment

**Endpoint:** `GET /comment?name=<tunni_nimi>`

**Query Parameters:**

```json
{
  "name": "String"
}
```

**Result:** Tagastab kõik kommentaarid, mis on seotud antud `tunni_nimi` väärtusega.

### Õnnestunud päringute näited

#### Näide 1

Leidis paar kommentaari

```json
{
  "result": [
    {
      "id": 1,
      "lesson_name": "String",
      "rating": 1,
      "comment": "String"
    },
    {
      "id": 2,
      "lesson_name": "String",
      "rating": 1,
      "comment": "String"
    }
  ]
}
```

#### Näide 2

Ei Leidnud midagi

```json
{
  "result": []
}
```

### Error Codes

| Kood | Kirjeldus                              |
| ---- | -------------------------------------- |
| 200  | Päring õnnestus                        |
| 400  | nimi ei ole tüüpi 'string'             |
| 500  | Andmebaas ei suutnud võtta kommentaari |

---

## Get Comment Count

**Endpoint:** `GET /comment/count?name=<tunni_nimi>`

**Query Parameters:**

```json
{
  "name": "String"
}
```

**Result:** Tagastab kommentaaride koguse, mis on seotud antud `tunni_nimi` väärtusega.

### Õnnestunud päringute näited

```json
{
  "count": 0
}
```

### Error Codes

| Kood | Kirjeldus                                 |
| ---- | ----------------------------------------- |
| 200  | Päring õnnestus                           |
| 400  | Vigane kutse, mida server ei saa kasutada |
| 500  | Andmebaasi viga koguse tagastamisel       |

---

# Further developlement notes

logError.js function is in the shared folder.
that is used to log errors in a strandardized way. Please use it.
