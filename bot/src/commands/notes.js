const { getUserNotes } = require("../services/notes/noteService");

const notesKeyboard = require("../keyboards/notesKeyboard");

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

    let message = `📝 Your Notes\n\n`;

    notes.forEach((note) => {
      const createdDate = note.createdAt.split("T")[0];

      message += `📝 ${note.title}\n`;

      message += `📅 ${createdDate}\n`;

      message += `────────────────\n\n`;
    });

    message += `\nTotal: ${notes.length} notes`;

    await ctx.reply(message, {
      reply_markup: notesKeyboard,
    });
  });
}

module.exports = notesCommand;
