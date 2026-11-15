const mainKeyboard = require("../keyboards/mainKeyboard");
const {
  getOrCreateUser,
} = require("../services/users/userService");

async function startCommand(ctx) {
  getOrCreateUser(ctx.from);
  await ctx.reply(
    `🚀 Welcome to Nexus Assistant

Your Personal AI & Automation Assistant.

Available modules:

🤖 AI Assistant

📝 Notes

⚡ Automations

👤 Profile

Choose a section below:`,
    {
      reply_markup: mainKeyboard,
    }
  );
}

module.exports = startCommand;