import Database from 'better-sqlite3'
import logError from '../../../shared/logging/logError.js'

const database = new Database('./database.db', { verbose: console.log() })

function exportDatabase() {
  try {
    database.exec(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY,
      lesson_name TEXT, 
      rating INTEGER CHECK(rating > 0 and rating < 6), -- rating from 1 to 5 
      comment TEXT
    );
    `)
  } catch (err) {
    logError('DATABASE INITIALIZATION', 'db.js', err)
    return null
  }

  return database
}

const db = exportDatabase()
export default db
