import db from '../../../../database/src/db.js'
import CheckIfLessonIsValid from './helpers/CheckIfLessonIsValid.js'

export default function getComment(req, res) {
  const nimi = req.query.nimi
  const isValid = CheckIfLessonIsValid(nimi)
  if (!isValid) {
    return res
      .status(400)
      .send({ error: `antud tunni nimi '${nimi}' ei meie andmetes defineeritud tunnina` })
  }

  try {
    const stmt = db.prepare(
      'SELECT count(*) as count FROM kommentaar WHERE tunni_nimetus = ?',
    )
    const count = stmt.all([nimi])
    return res.status(200).send({ count: count[0]['count'] }) // happy path ending
  } catch (err) {
    console.log('DATABASE ERROR: ', err)
    return res.status(500).send({ error: 'Andmebaas ei suutnud lugeda kommentaare' })
  }
}
