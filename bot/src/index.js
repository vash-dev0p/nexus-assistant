require("dotenv").config();

const { Bot } = require("grammy");

const initializeDatabase = require("./database/initDatabase");

const {
  addNote,
} = require("./services/notes/noteService");

const startCommand = require("./commands/start");
const helpCommand = require("./commands/help");
const aboutCommand = require("./commands/about");

const aiCommand = require("./commands/ai");
const notesCommand = require("./commands/notes");
const automationsCommand = require("./commands/automations");
const profileCommand = require("./commands/profile");
const supportCommand = require("./commands/support");
const settingsCommand = require("./commands/settings");

const {
  updateLanguage,
} = require("./services/users/userRepository");

const {
  updateUserLanguage,
} = require("./services/users/userService");

const bot = new Bot(process.env.BOT_TOKEN);

initializeDatabase();

const {
  getUserNotes,
} = require("./services/notes/noteService");

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

bot.hears("🇬🇧 English", async (ctx) => {
  updateLanguage(ctx.from.id, "en");
  updateUserLanguage(ctx.from.id, "en");

  await ctx.reply(
    "✅ Language changed to English."
  );
});

bot.hears("🇪🇸 Spanish", async (ctx) => {
  updateLanguage(ctx.from.id, "es");
  updateUserLanguage(ctx.from.id, "es");

  await ctx.reply(
    "✅ Language changed to Spanish."
  );
});

bot.hears("🇷🇺 Russian", async (ctx) => {
  updateLanguage(ctx.from.id, "ru");
  updateUserLanguage(ctx.from.id, "ru");

  await ctx.reply(
    "✅ Language changed to Russian."
  );
});

bot.hears("🇬🇪 Georgian", async (ctx) => {
  updateLanguage(ctx.from.id, "ka");
  updateUserLanguage(ctx.from.id, "ka");

  await ctx.reply(
    "✅ Language changed to Georgian."
  );
});


bot.hears("ℹ️ About", aboutCommand);
bot.hears("❓ Help", helpCommand);

bot.start();

console.log("✅ Nexus Assistant v0.4.2 started");