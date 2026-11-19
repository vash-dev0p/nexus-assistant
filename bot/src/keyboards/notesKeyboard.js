const { Keyboard } = require("grammy");

const notesKeyboard = new Keyboard()
  .text("➕ Create Note")
  .text("🗑 Delete Note")
  .row()
  .text("🏠 Home")
  .resized();

module.exports = notesKeyboard;