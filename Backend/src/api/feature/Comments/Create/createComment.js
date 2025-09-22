import db from "../../../../backend/connectDB.js";
import TypeCheckTunni_nimetus from "../../../../../../shared/typechecks.js";


/** 
 *    
 */
export default function createComment(req, res) {
  const tunni_nimetus = req.query.tunni_nimetus;

  //type check the object
  const { error } = TypeCheckTunni_nimetus.validate(tunni_nimetus);

  if (error) {
    console.log("Sending client Error: ", error);
    return res.status(400).send({ error })
  }

  const { nimi, kommentaar, hinnang } = tunni_nimetus;

  
  try {
    //create the post
    const stmt = db.prepare(`INSERT INTO kommentaar 
              (tunni_nimetus, hinnang, text) VALUES (?,?,?)`);
    stmt.run([nimi, kommentaar, hinnang]);
  } catch(err){        
    console.log("DATABASE ERROR:", err);
    return res.status(500).send({ error: "Andmebaas ei suutnud tekitada kommentaari" });
  }

  return res.sendStatus(204)
}
