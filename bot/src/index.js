require("dotenv").config();

const { Bot } = require("grammy");

const startCommand = require("./commands/start");
const helpCommand = require("./commands/help");
const aboutCommand = require("./commands/about");

const aiCommand = require("./commands/ai");
const notesCommand = require("./commands/notes");
const automationsCommand = require("./commands/automations");
const profileCommand = require("./commands/profile");
const supportCommand = require("./commands/support");
const settingsCommand = require("./commands/settings");

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", startCommand);
bot.command("help", helpCommand);
bot.command("about", aboutCommand);

bot.hears("🤖 AI Assistant", aiCommand);
bot.hears("📝 Notes", notesCommand);

bot.hears("⚡ Automations", automationsCommand);
bot.hears("👤 Profile", profileCommand);

bot.hears("❤️ Support Nexus", supportCommand);
bot.hears("⚙️ Settings", settingsCommand);

bot.hears("ℹ️ About", aboutCommand);

bot.start();

console.log("✅ Nexus Assistant v0.2.0 started");