### **Minimal System Design Document**

#### **1. Ülevaade**

Süsteem kogub ja kuvab tundide kohta kommentaare.  
Kõik kasutajad saavad lisada kommentaare. Õpetajad ja õppekorraldus saavad neid lugeda.

---

#### **2. Andmebaasi doc**
eraldi fail selle jaoks

---

#### **Arhitektuur**

- shared/lessons.json failis on listina kõik tunnid, mida API kasutab, et leida, valideerida ja tekitada kommentaare. 
lessons.json'i muutes, muudad ka milliseid tunde näiteks 'keeled' või mõni muu leht näitab.
lessons.json on list, mida kasutavad CheckIfLessonIsValid(), et valideerida, kas tund eksisteerib.

---

#### **Põhiandmevood**

- **GET `/comments?tunni_nimi=Matemaatika`** – toob kõik konkreetse tunni kommentaarid.
- **POST `/comments`** – lisab uue kommentaari.

> Vaata API.md ehk API dokumentatsiooni

---

#### **Kasutaja teekond**

1. Kasutaja valib õppekavast aine → näeb selle tunde.
2. Tunni valimisel kuvatakse kommentaarid ja hinnangud.
3. Kasutaja saab lisada uue kommentaari.

