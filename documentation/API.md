# API Documentation

## Create Comment

**Endpoint:** `POST /comment`

Request body **peab olema object** milles on järgmised read:

```json
{
  "nimi": "String",
  "kommentaar": "String",
  "hinnang": "Number (0 kuni 5)"
}
```

> Vaata `/shared/typechecks/tunni_nimetus.js`

**Result:** Loob uue kommentaari seotud tunniga.

### Error Codes

| Kood | Kirjeldus                                 |
| ---- | ----------------------------------------- |
| 204  | Kommentaar tekitatud                      |
| 400  | Vigane kutse, mida server ei saa kasutada |
| 500  | Andmebaasi viga kommentaari loomisel      |

---

## Get Comment

**Endpoint:** `GET /comment?nimi=<tunni_nimi>`

**Query Parameters:**

```json
{
  "nimi": "String"
}
```

**Result:** Tagastab kõik kommentaarid, mis on seotud antud `tunni_nimi` väärtusega.

### Error Codes

| Kood | Kirjeldus                                  |
| ---- | ------------------------------------------ |
| 200  | Päring õnnestus                            |
| 400  | Vigane kutse, mida server ei saa kasutada  |
| 500  | Andmebaasi viga kommentaaride tagastamisel |
