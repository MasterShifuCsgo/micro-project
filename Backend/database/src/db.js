import Database from "bun:sqlite";
import logError from '../../../shared/logging/logError.js'

const db = new Database("data.db");
('./database.db', { verbose: console.log() })

function exportDatabase() {
  try {
    database.exec(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY,
      user_name TEXT,
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

const datab = exportDatabase()
export default datab
