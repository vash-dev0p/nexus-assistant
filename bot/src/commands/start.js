const mainKeyboard = require("../keyboards/mainKeyboard");

async function startCommand(ctx) {
  await ctx.reply(
    `🚀 Welcome to Nexus Assistant

Your Personal AI & Automation Assistant.

Current capabilities:

• AI-powered assistance
• Smart notes
• Automations
• Future integrations

Choose a section below:`,
    {
      reply_markup: mainKeyboard,
    }
  );
}

module.exports = startCommand;