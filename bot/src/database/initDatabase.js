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
}

module.exports = initializeDatabase;