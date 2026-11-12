const { Keyboard } = require("grammy");

const mainKeyboard = new Keyboard()
  .text("📖 About")
  .text("❓ Help")
  .row()
  .text("⚙️ Settings")
  .resized();

module.exports = mainKeyboard;