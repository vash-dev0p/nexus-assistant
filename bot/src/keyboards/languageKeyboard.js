const { Keyboard } = require("grammy");

const languageKeyboard = new Keyboard()
  .text("🇬🇧 English")
  .row()
  .text("🇪🇸 Spanish")
  .row()
  .text("🇷🇺 Russian")
  .row()
  .text("🇬🇪 Georgian")
  .row()
  .text("🏠 Home")
  .resized();

module.exports = languageKeyboard;