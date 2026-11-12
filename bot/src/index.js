require("dotenv").config();

const { Bot } = require("grammy");

const startCommand = require("./commands/start");
const helpCommand = require("./commands/help");
const aboutCommand = require("./commands/about");

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", startCommand);
bot.command("help", helpCommand);
bot.command("about", aboutCommand);

bot.hears("📖 About", aboutCommand);
bot.hears("❓ Help", helpCommand);

bot.hears("⚙️ Settings", async (ctx) => {
  await ctx.reply(
    "⚙️ Settings module will be available in future versions."
  );
});

bot.start();

console.log("✅ Nexus Assistant started");