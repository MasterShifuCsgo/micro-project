import sqlite from "better-sqlite3";

const database = new sqlite.Database("./database.db");

function exportDatabase() {

  database.exec(`
    CREATE TABLE IF NOT EXISTS kommentaar (
      id INTEGER PRIMARY KEY,
      tunni_nimetus TEXT, 
      hinnang INTEGER CHECK(hinnang > 0 and hinnang < 6), -- rating from 1 to 5 
      text TEXT
    );
    `)

  return db;
}

const db = exportDatabase();
export default db;






