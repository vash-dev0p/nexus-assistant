const db = require("./database");

function initializeDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT,
      language TEXT,
      subscription TEXT,
      nxCredits INTEGER,
      registrationDate TEXT,
      lastActivity TEXT
    )
  `, (err) => {
    if (err) {
      console.error("❌ Error creating users table:", err.message);
    } else {
      console.log("✅ Users table ready");
    }
  });
  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      title TEXT,
      content TEXT,
      category TEXT,
      type TEXT,
      createdAt TEXT,
      updatedAt TEXT
    )
  `, (err) => {
    if (err) {
      console.error(
        "❌ Error creating notes table:",
        err.message
      );
    } else {
      console.log("✅ Notes table ready");
    }
  });
}

module.exports = initializeDatabase;