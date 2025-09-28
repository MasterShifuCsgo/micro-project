import db from '../../../../database/src/db.js'
import CheckIfLessonIsValid from './helpers/CheckIfLessonIsValid.js'
import logError from '../../../../../shared/logging/logError.js'

export default function getComment(req, res) {
  const name = req.query.name
  const isValid = CheckIfLessonIsValid(name)
  if (!isValid) {
    return res
      .status(400)
      .send({ error: `antud tunni nimi '${name}' ei meie andmetes defineeritud tunnina` })
  }

  try {
    const stmt = db.prepare(
      'SELECT count(*) as count FROM comments WHERE lesson_name = ?',
    )
    const count = stmt.all([name])
    return res.status(200).send({ count: count[0]['count'] }) // happy path ending
  } catch (err) {
    logError('DATABASE', 'getCommentCount.js', err)
    return res.status(500).send({ error: 'Andmebaas ei suutnud lugeda kommentaare' })
  }
}
