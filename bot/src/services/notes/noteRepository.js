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

function deleteNoteById(
  noteId,
  callback
) {
  db.run(
    `
    DELETE FROM notes
    WHERE id = ?
    `,
    [noteId],
    function (err) {
      if (err) {
        console.error(
          "❌ Error deleting note:",
          err.message
        );

        callback(false);
      } else {
        console.log(
          `✅ Note deleted: ${noteId}`
        );

        callback(true);
      }
    }
  );
}

function updateNoteById(
  noteId,
  content,
  callback
) {
  db.run(
    `
    UPDATE notes
    SET
      title = ?,
      content = ?,
      updatedAt = ?
    WHERE id = ?
    `,
    [
      content,
      content,
      new Date().toISOString(),
      noteId,
    ],
    function (err) {
      if (err) {
        console.error(
          "❌ Error updating note:",
          err.message
        );

        callback(false);
      } else {
        console.log(
          `✅ Note updated: ${noteId}`
        );

        callback(true);
      }
    }
  );
}

module.exports = {
  createNote,
  getNotesByUserId,
  deleteNoteById,
  updateNoteById,
};