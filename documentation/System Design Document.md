### **Minimal System Design Document**

#### **1. Ülevaade**

Süsteem kogub ja kuvab tundide kohta kommentaare.  
Kõik kasutajad saavad lisada kommentaare. Õpetajad ja õppekorraldus saavad neid lugeda.

---

#### **2. Andmebaasi skeem**

```sql
CREATE TABLE kommentaar (
  id INTEGER PRIMARY KEY,
  kommenteerija TEXT,
  hinnang INTEGER CHECK(hinnang > 0 and hinnang < 6), -- rating from 1 to 5
  kommentaar TEXT
);
```

**Põhjendus:**

- Skeem on lihtne, sest projekt on väike.
- `tunni_nimi` ja `kommenteerija` on tekstina piisavad, eraldi tabeleid pole vaja.
- `CHECK` välistab vigased hinnangud.
- Tulevikus saab lisada eraldi `tund` ja `kasutaja` tabelid.

---

#### **3. Põhiandmevood**

- **GET `/comments?tunni_nimi=Matemaatika`** – toob kõik konkreetse tunni kommentaarid.
- **POST `/comments`** – lisab uue kommentaari.

> Vaata API.md ehk API dokumentatsiooni

---

#### **4. Kasutaja teekond**

1. Kasutaja valib õppekavast aine → näeb selle tunde.
2. Tunni valimisel kuvatakse kommentaarid ja hinnangud.
3. Kasutaja saab lisada uue kommentaari.
