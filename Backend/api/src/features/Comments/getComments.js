import db from "../../../../database/src/db.js";
import CheckIfLessonIsValid from "./helpers/CheckIfLessonIsValid.js";

export default function getComment(req, res) {

  const nimi = req.query?.nimi || 0;  
  const isValid = CheckIfLessonIsValid(nimi);
  if (!isValid) { return res.status(400).send({ error: `antud tunni nimi '${nimi}' ei meie andmetes defineeritud tunnina` }) }

  //type check the object
  if (typeof nimi !== "string") {
    return res.status(400).send({ error: "nimi ei ole tüüpi 'string'" });
  }

  try {
    const stmt = db.prepare("SELECT * FROM kommentaar WHERE tunni_nimetus = ?");
    const comment = stmt.all([nimi])
    return res.status(200).send({ result: comment }) // happy path ending
  } catch (err) {
    console.log("DATABASE ERROR: ", err)
    return res.status(500).send({ error: "Andmebaas ei suutnud võtta kommentaari" });
  }

}
