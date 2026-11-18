const db = require("../../database/database");

function createNote(note) {
  db.run(
    `
    INSERT INTO notes (
      userId,
      title,
      content,
      category,
      type,
      createdAt,
      updatedAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      note.userId,
      note.title,
      note.content,
      note.category,
      note.type,
      note.createdAt.toISOString(),
      note.updatedAt.toISOString(),
    ],
    (err) => {
      if (err) {
        console.error(
          "❌ Error saving note:",
          err.message
        );
      } else {
        console.log(
          `✅ Note saved: ${note.title}`
        );
      }
    }
  );
}

function getNotesByUserId(userId, callback) {
  db.all(
    `
    SELECT * FROM notes
    WHERE userId = ?
    `,
    [userId],
    (err, rows) => {
      if (err) {
        console.error(
          "❌ Error fetching notes:",
          err.message
        );

        callback([]);
      } else {
        console.log(
          `✅ Notes found: ${rows.length}`
        );

        callback(rows);
      }
    }
  );
}

module.exports = {
  createNote,
  getNotesByUserId,
};