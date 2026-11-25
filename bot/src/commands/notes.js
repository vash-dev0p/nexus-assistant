const { getUserNotes } = require("../services/notes/noteService");

const notesKeyboard = require("../keyboards/notesKeyboard");

const noteInlineKeyboard = require("../keyboards/noteInlineKeyboard");

async function notesCommand(ctx) {
  getUserNotes(ctx.from.id, async (notes) => {
    if (notes.length === 0) {
      await ctx.reply(
        `📝 Notes

No notes found.

Create your first note.`,
        {
          reply_markup: notesKeyboard,
        },
      );

      return;
    }

    await ctx.reply(
      `📝 Your Notes

Total: ${notes.length} notes`,
      {
        reply_markup: notesKeyboard,
      },
    );

    for (const note of notes) {
      const createdDate = note.createdAt.split("T")[0];

      await ctx.reply(
        `📝 ${note.title}

 📅 ${createdDate}`,
        {
          reply_markup: noteInlineKeyboard(note.id),
        },
      );
    }
  });
}

module.exports = notesCommand;
