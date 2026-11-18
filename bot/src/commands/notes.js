const {
  getUserNotes,
} = require("../services/notes/noteService");

const notesKeyboard =
  require("../keyboards/notesKeyboard");

async function notesCommand(ctx) {
  getUserNotes(
    ctx.from.id,
    async (notes) => {
      if (notes.length === 0) {
        await ctx.reply(
          `📝 Notes

No notes found.

Create your first note soon.`
        );

        return;
      }

      let message =
        `📝 Your Notes\n\n`;

      notes.forEach((note, index) => {
        message +=
          `${index + 1}. ${note.title}\n`;
      });

      message +=
        `\nTotal: ${notes.length} notes`;

      await ctx.reply(
        message,
        {
          reply_markup: notesKeyboard,
        }
      );
    }
  );
}

module.exports = notesCommand;