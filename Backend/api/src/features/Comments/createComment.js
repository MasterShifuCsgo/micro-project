import db from '../../../../database/src/db.js'
import LessonTypeCheck from '../../../../../shared/typechecks/LessonTypeCheck.js'
import CheckIfLessonIsValid from './helpers/CheckIfLessonIsValid.js'

export default function createComment(req, res) {
  const lesson_data = req.body

  //type check the object
  const { error } = LessonTypeCheck.validate(lesson_data)

  if (error) {
    console.log('Sending client Error: ', error)
    return res.status(400).send({ error })
  }

  const { name, comment, rating } = lesson_data

  const isValid = CheckIfLessonIsValid(name)
  if (!isValid) {
    return res
      .status(400)
      .send({ error: `antud tunni nimi '${name}' ei meie andmetes defineeritud tunnina` })
  }

  try {
    //create the post
    const stmt = db.prepare(`INSERT INTO comments 
              (lesson_name, rating, comment) VALUES (?,?,?)`)
    stmt.run([name, rating, comment])
  } catch (err) {
    logError('DATABASE', 'createComment.js', err)
    return res.status(500).send({ error: 'Andmebaas ei suutnud tekitada kommentaari' })
  }

  return res.sendStatus(201)
}
