require("dotenv").config();

const { Bot } = require("grammy");

const initializeDatabase = require("./database/initDatabase");

const {
  addNote,
  getUserNotes,
  deleteNote,
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

const noteDeleteMode =
  require("./services/notes/deleteModeStore");

const noteCreationMode =
  require("./services/notes/notesStore");

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

bot.hears(
  "➕ Create Note",
  async (ctx) => {

    noteCreationMode.add(
      ctx.from.id
    );

    await ctx.reply(
      "📝 Send note text."
    );
  }
);

bot.hears(
  "🗑 Delete Note",
  async (ctx) => {
    noteDeleteMode.add(
      ctx.from.id
    );

    await ctx.reply(
      "🗑 Send note ID to delete."
    );
  }
);

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

bot.on("message:text", async (ctx) => {

  if (
    noteDeleteMode.has(ctx.from.id)
  ) {
    const noteId = Number(
      ctx.message.text
    );

    deleteNote(
      noteId,
      async (success) => {

        noteDeleteMode.delete(
          ctx.from.id
        );

        if (success) {
          await ctx.reply(
            "✅ Note deleted."
          );
        } else {
          await ctx.reply(
            "❌ Note not found."
          );
        }
      }
    );

    return;
  }

  if (
    !noteCreationMode.has(
      ctx.from.id
    )
  ) {
    return;
  }

  const noteText =
    ctx.message.text;

  addNote({
    userId: ctx.from.id,
    title: noteText,
    content: noteText,
    category: "personal",
    type: "note",
  });

  noteCreationMode.delete(
    ctx.from.id
  );

  await ctx.reply(
    "✅ Note saved."
  );
});

bot.start();

console.log("✅ Nexus Assistant v0.4.2 started");