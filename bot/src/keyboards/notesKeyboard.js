const { Keyboard } = require("grammy");

const notesKeyboard = new Keyboard()
  .text("➕ Create Note")
  .row()
  .text("🏠 Home")
  .resized();

module.exports = notesKeyboard;
