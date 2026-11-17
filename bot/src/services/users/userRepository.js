const db = require("../../database/database");

function createUser(user) {
  db.run(
    `
    INSERT OR IGNORE INTO users (
      id,
      username,
      language,
      subscription,
      nxCredits,
      registrationDate,
      lastActivity
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      user.id,
      user.username,
      user.language,
      user.subscription,
      user.nxCredits,
      user.registrationDate.toISOString(),
      user.lastActivity.toISOString(),
    ],
    (err) => {
      if (err) {
        console.error(
          "❌ Error saving user:",
          err.message
        );
      } else {
        console.log(
          `✅ User saved: ${user.username}`
        );
      }
    }
  );
}

function getUserById(userId, callback) {
  db.get(
    `
    SELECT * FROM users
    WHERE id = ?
    `,
    [userId],
    (err, row) => {
      if (err) {
        console.error(
          "❌ Error fetching user:",
          err.message
        );
        callback(null);
      } else {        
        console.log("✅ User found in database:", row);
        callback(row);
      }
    }
  );
}

function updateLastActivity(userId) {
  db.run(
    `
    UPDATE users
    SET lastActivity = ?
    WHERE id = ?
    `,
    [
      new Date().toISOString(),
      userId
    ],
    (err) => {
      if (err) {
        console.error(
          "❌ Error updating last activity:",
          err.message
        );
      } else {
        console.log(
          "✅ Last activity updated"
        );
      }
    }
  );
}

function updateLanguage(userId, language) {
  db.run(
    `
    UPDATE users
    SET language = ?
    WHERE id = ?
    `,
    [language, userId],
    (err) => {
      if (err) {
        console.error(
          "❌ Error updating language:",
          err.message
        );
      } else {
        console.log(
          `✅ Language updated: ${language}`
        );
      }
    }
  );
}

module.exports = {
  createUser,
  getUserById,
  updateLastActivity,
  updateLanguage,
};