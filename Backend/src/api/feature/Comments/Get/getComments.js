import db from "../../../../backend/connectDB.js";

//TODO: create documentation for api endpoint
export default function getComment(req, res) {
  const nimi = req.query.tunni_nimi;

  //type check the object
  if(typeof nimi !== "string"){
    return res.status(400).send({error: "nimi ei ole tüüpi 'string'"});
  }

  if (error) {
    console.log("Sending client Error: ", error);
    return res.status(400).send({ error })
  }
  
  //võte kommentaarid tunnist
  try{
   const stmt = db.prepare("SELECT * FROM kommentaar WHERE nimi = ?");
   const comment = stmt.run([tunni_nimetus.nimi])
   return res.status(200).send({result: comment})
  }catch(err){
    console.log("DATABASE ERROR: ", err)
    return res.status(500).send({ error: "Andmebaas ei suutnud võtta kommentaari" });
  }





}
