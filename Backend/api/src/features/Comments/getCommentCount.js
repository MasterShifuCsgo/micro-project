import db from "../../../../database/src/db.js";


export default function getComment(req, res) {    

  const nimi = req.query?.nimi || 0; 
  //MUST CHECK IF THE NAME IS IN THE /shared/lessons.json . follow the System architecture    

  //type check the object
  if(typeof nimi !== "string"){
    return res.status(400).send({error: "nimi ei ole tüüpi 'string'"});
  }    

  try{
   const stmt = db.prepare("SELECT count(*) as count FROM kommentaar WHERE tunni_nimetus = ?");
   const count = stmt.all([nimi])
   return res.status(200).send({count: count[0]["count"]}) // happy path ending
  }catch(err){
    console.log("DATABASE ERROR: ", err)
    return res.status(500).send({ error: "Andmebaas ei suutnud lugeda kommentaare" });
  }

}
