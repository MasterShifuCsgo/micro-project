import db from "../../../../database/src/db.js"
import CheckIfLessonIsValid from './helpers/CheckIfLessonIsValid.js'
import logError from '../../../../../shared/logging/logError.js'

export default function getCommentStats(req, res) {
  const name = req.query.name

  
  if (!name) {
    return res.status(400).send({ error: "Puudub tunni nimi ('name' query param puudub)." })
  }

  
  const isValid = CheckIfLessonIsValid(name)
  if (!isValid) {
    return res.status(400).send({
      error: `Antud tunni nimi '${name}' ei ole meie andmetes defineeritud tunnina.`
    })
  }

  try {    
    const result = db.query(
      `SELECT 
         lesson_name,
         COUNT(*) AS comment_count,
         ROUND(AVG(rating), 2) AS average_rating
       FROM comments
       WHERE lesson_name = ?
       GROUP BY lesson_name`
    ).get(name)

    console.log("\n\n\n")
    console.log(result)
    console.log("\n\n\n")
    if (!result) {
      return res.status(200).send({
        lesson: name,
        comment_count: 0,
        average_rating: null,        
      })
    }

    
    return res.status(200).send({
      lesson: result.lesson_name,
      comment_count: result.comment_count,
      average_rating: result.average_rating
    })
  } catch (err) {
    
    logError('DATABASE', 'getCommentStats.js', err)
    return res.status(500).send({
      error: 'Andmebaas ei suutnud lugeda statistikat.'
    })
  }
}
