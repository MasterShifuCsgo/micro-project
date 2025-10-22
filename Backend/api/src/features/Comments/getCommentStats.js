import db from '../../../../database/src/db.js'
import logError from '../../../../../shared/logging/logError.js'

export default function getCommentStats(req, res) {
  try {
    const rows = db.query(
      `SELECT lesson_name, COUNT(*) AS count
       FROM comments
       GROUP BY lesson_name`
    ).all()

    if (rows.length === 0) {
      return res.status(200).send({
        mostCommented: null,
        leastCommented: null,
        totalComments: 0
      })
    }

    // Sorteerime tulemused
    const sorted = rows.sort((a, b) => b.count - a.count)
    const mostCommented = sorted[0]
    const leastCommented = sorted[sorted.length - 1]
    const totalComments = rows.reduce((sum, r) => sum + r.count, 0)

    return res.status(200).send({
      mostCommented,
      leastCommented,
      totalComments
    })
  } catch (err) {
    logError('DATABASE', 'getCommentStats.js', err)
    return res.status(500).send({ error: 'Andmebaas ei suutnud lugeda statistikat' })
  }
}
