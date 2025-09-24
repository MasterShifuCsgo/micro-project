import db from '../../../../database/src/db.js'
import TypeCheckTunniNimetus from '../../../../../shared/typechecks/tunni_nimetus.js'
import CheckIfLessonIsValid from './helpers/CheckIfLessonIsValid.js'

export default function createComment(req, res) {
  const tunni_nimetus = req.body

  //type check the object
  const { error } = TypeCheckTunniNimetus.validate(tunni_nimetus)

  if (error) {
    console.log('Sending client Error: ', error)
    return res.status(400).send({ error })
  }

  const { nimi, kommentaar, hinnang } = tunni_nimetus
  const isValid = CheckIfLessonIsValid(nimi)
  if (!isValid) {
    return res
      .status(400)
      .send({ error: `antud tunni nimi '${nimi}' ei meie andmetes defineeritud tunnina` })
  }

  try {
    //create the post
    const stmt = db.prepare(`INSERT INTO kommentaar 
              (tunni_nimetus, hinnang, kommentaar) VALUES (?,?,?)`)
    stmt.run([nimi, hinnang, kommentaar])
  } catch (err) {
    console.log('DATABASE ERROR:', err)
    return res.status(500).send({ error: 'Andmebaas ei suutnud tekitada kommentaari' })
  }

  return res.sendStatus(204)
}
