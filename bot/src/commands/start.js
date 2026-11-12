const mainKeyboard = require("../keyboards/mainKeyboard");

async function startCommand(ctx) {
  await ctx.reply(
    "🚀 Welcome to Nexus Assistant!\n\nYour AI-powered Telegram Assistant Platform.",
    {
      reply_markup: mainKeyboard,
    }
  );
}

module.exports = startCommand;