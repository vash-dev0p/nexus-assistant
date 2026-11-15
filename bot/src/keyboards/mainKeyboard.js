const { Keyboard } = require("grammy");

const mainKeyboard = new Keyboard()
  .text("🏠 Home")
  .row()
  .text("🤖 AI Assistant")
  .text("📝 Notes")
  .row()
  .text("⚡ Automations")
  .text("👤 Profile")
  .row()
  .text("❤️ Support Nexus")
  .text("⚙️ Settings")
  .row()
  .text("ℹ️ About")
  .text("❓ Help")
  .resized();

module.exports = mainKeyboard;