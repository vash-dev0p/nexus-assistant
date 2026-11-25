require("dotenv").config();

const { Bot } = require("grammy");

const initializeDatabase = require("./database/initDatabase");

const {
  addNote,
  deleteNote,
  updateNote,
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

const { updateLanguage } = require("./services/users/userRepository");

const { updateUserLanguage } = require("./services/users/userService");

const noteDeleteMode = require("./services/notes/deleteModeStore");

const noteEditMode = require("./services/notes/editModeStore");

const noteCreationMode = require("./services/notes/notesStore");

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

bot.hears("➕ Create Note", async (ctx) => {
  noteCreationMode.add(ctx.from.id);

  await ctx.reply("📝 Send note text.");
});

bot.hears("🗑 Delete Note", async (ctx) => {
  noteDeleteMode.add(ctx.from.id);

  await ctx.reply("🗑 Send note ID to delete.");
});

bot.hears("✏ Edit Note", async (ctx) => {
  noteEditMode.set(ctx.from.id, true);

  await ctx.reply("✏ Send note ID to edit.");
});

bot.hears("🇬🇧 English", async (ctx) => {
  updateLanguage(ctx.from.id, "en");
  updateUserLanguage(ctx.from.id, "en");

  await ctx.reply("✅ Language changed to English.");
});

bot.hears("🇪🇸 Spanish", async (ctx) => {
  updateLanguage(ctx.from.id, "es");
  updateUserLanguage(ctx.from.id, "es");

  await ctx.reply("✅ Language changed to Spanish.");
});

bot.hears("🇷🇺 Russian", async (ctx) => {
  updateLanguage(ctx.from.id, "ru");
  updateUserLanguage(ctx.from.id, "ru");

  await ctx.reply("✅ Language changed to Russian.");
});

bot.hears("🇬🇪 Georgian", async (ctx) => {
  updateLanguage(ctx.from.id, "ka");
  updateUserLanguage(ctx.from.id, "ka");

  await ctx.reply("✅ Language changed to Georgian.");
});

bot.hears("ℹ️ About", aboutCommand);
bot.hears("❓ Help", helpCommand);

bot.callbackQuery(/^delete_/, async (ctx) => {
  const noteId = Number(ctx.callbackQuery.data.replace("delete_", ""));

  deleteNote(noteId, async (success) => {
    if (success) {
      await ctx.answerCallbackQuery({
        text: "✅ Note deleted",
      });

      await ctx.editMessageText("🗑 Note deleted.");
    } else {
      await ctx.answerCallbackQuery({
        text: "❌ Note not found",
      });
    }
  });
});

bot.callbackQuery(/^edit_/, async (ctx) => {
  const noteId = Number(ctx.callbackQuery.data.replace("edit_", ""));

  noteEditMode.set(ctx.from.id, noteId);

  await ctx.answerCallbackQuery({
    text: "✏ Edit mode",
  });

  await ctx.reply("✏ Send new note text.");
});

bot.on("message:text", async (ctx) => {
  if (noteDeleteMode.has(ctx.from.id)) {
    const noteId = Number(ctx.message.text);

    deleteNote(noteId, async (success) => {
      noteDeleteMode.delete(ctx.from.id);

      if (success) {
        await ctx.reply("✅ Note deleted.");

        await notesCommand(ctx);
      } else {
        await ctx.reply("❌ Note not found.");
      }
    });

    return;
  }
  if (noteEditMode.has(ctx.from.id)) {
    const currentValue = noteEditMode.get(ctx.from.id);

    if (currentValue === true) {
      const noteId = Number(ctx.message.text);

      noteEditMode.set(ctx.from.id, noteId);

      await ctx.reply("✏ Send new note text.");

      return;
    }

    const noteId = currentValue;

    const newText = ctx.message.text;

    updateNote(noteId, newText, async (success) => {
      noteEditMode.delete(ctx.from.id);

      if (success) {
        await ctx.reply("✅ Note updated.");

        await notesCommand(ctx);
      } else {
        await ctx.reply("❌ Note not found.");
      }
    });

    return;
  }

  if (!noteCreationMode.has(ctx.from.id)) {
    return;
  }

  const noteText = ctx.message.text;

  addNote({
    userId: ctx.from.id,
    title: noteText,
    content: noteText,
    category: "personal",
    type: "note",
  });

  noteCreationMode.delete(ctx.from.id);

  await ctx.reply("✅ Note saved.");

  await notesCommand(ctx);
});

bot.start();

console.log("✅ Nexus Assistant v0.6.0 online");
