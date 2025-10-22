import Database from "bun:sqlite";
import logError from "../../../shared/logging/logError.js";

// Create or open SQLite database
const db = new Database("data.db");

function exportDatabase() {
  try {
    db.run(`
      CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name TEXT,
        lesson_name TEXT,
        rating INTEGER CHECK(rating > 0 AND rating < 6),
        comment TEXT
      )
    `);
  } catch (err) {
    logError("DATABASE INITIALIZATION", "db.js", err);
    return null;
  }

  return db;
}

const datab = exportDatabase();
export default datab;
