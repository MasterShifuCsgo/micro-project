import db from '../../../../database/src/db.js'
import CheckIfLessonIsValid from './helpers/CheckIfLessonIsValid.js'
import logError from '../../../../../shared/logging/logError.js'

export default function getCommentCount(req, res) {
  const name = req.query.name
  const isValid = CheckIfLessonIsValid(name)
  if (!isValid) {
    return res
      .status(400)
      .send({ error: `antud tunni nimi '${name}' ei ole meie andmetes defineeritud tunnina` })
  }

  try {
    const result = db.query('SELECT COUNT(*) AS count FROM comments WHERE lesson_name = ?').get(name)
    return res.status(200).send({ count: result?.count ?? 0 })
  } catch (err) {
    logError('DATABASE', 'getCommentCount.js', err)
    return res.status(500).send({ error: 'Andmebaas ei suutnud lugeda kommentaare' })
  }
}
