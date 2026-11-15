require("dotenv").config();

const { Bot } = require("grammy");

const initializeDatabase = require("./database/initDatabase");

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

initializeDatabase();

bot.command("start", startCommand);
bot.command("help", helpCommand);
bot.command("about", aboutCommand);

bot.hears("🏠 Home", startCommand);

bot.hears("🤖 AI Assistant", aiCommand);
bot.hears("📝 Notes", notesCommand);

bot.hears("⚡ Automations", automationsCommand);
bot.hears("👤 Profile", profileCommand);

bot.hears("❤️ Support Nexus", supportCommand);
bot.hears("⚙️ Settings", settingsCommand);

bot.hears("ℹ️ About", aboutCommand);
bot.hears("❓ Help", helpCommand);

bot.start();

console.log("✅ Nexus Assistant v0.4.1 started");