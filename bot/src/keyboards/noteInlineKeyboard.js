const { InlineKeyboard } = require("grammy");

function noteInlineKeyboard(noteId) {
  return new InlineKeyboard()
    .text("✏ Edit", `edit_${noteId}`)
    .text("🗑 Delete", `delete_${noteId}`);
}

module.exports = noteInlineKeyboard;