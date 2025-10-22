import db from '../../../../database/src/db.js'
import LessonTypeCheck from '../../../../../shared/typechecks/LessonTypeCheck.js'
import CheckIfLessonIsValid from './helpers/CheckIfLessonIsValid.js'
import logError from '../../../../../shared/logging/logError.js'

export default function createComment(req, res) {
  const lesson_data = req.body

  // type check the object
  const { error } = LessonTypeCheck.validate(lesson_data)
  if (error) {
    console.log('Sending client Error:', error)
    return res.status(400).send({ error })
  }

  const { user_name, lesson_name, comment, rating } = lesson_data

  const isValid = CheckIfLessonIsValid(lesson_name)
  if (!isValid) {
    return res
      .status(400)
      .send({ error: `antud tunni nimi '${lesson_name}' ei ole meie andmetes defineeritud tunnina` })
  }

  try {
    db.query(`
      INSERT INTO comments (user_name, lesson_name, rating, comment)
      VALUES (?, ?, ?, ?)
    `).run(user_name, lesson_name, rating, comment)
  } catch (err) {
    logError('DATABASE', 'createComment.js', err)
    return res.status(500).send({ error: 'Andmebaas ei suutnud tekitada kommentaari' })
  }

  return res.sendStatus(201)
}
