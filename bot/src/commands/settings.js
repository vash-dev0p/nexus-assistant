const languages = require("../constants/languages");

const {
  getOrCreateUser,
} = require("../services/users/userService");

const languageKeyboard =
  require("../keyboards/languageKeyboard");

async function settingsCommand(ctx) {
  const user = getOrCreateUser(ctx.from);

  await ctx.reply(
    `⚙️ Settings

🌍 Language Settings

Current language:
${languages[user.language]}

Choose a language:`,
    {
      reply_markup: languageKeyboard,
    }
  );
}

module.exports = settingsCommand;