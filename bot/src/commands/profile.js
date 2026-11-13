const languageMap = {
  en: "🇬🇧 English",
  es: "🇪🇸 Spanish",
  ru: "🇷🇺 Russian",
  ka: "🇬🇪 Georgian",
};
const {
  getOrCreateUser,
  updateLastActivity,
} = require("../services/users/userService");

async function profileCommand(ctx) {
  const user = getOrCreateUser(ctx.from);
  updateLastActivity(user.id);

  await ctx.reply(
    `👤 Profile

Username: @${user.username}
Telegram ID: ${user.id}

Language: ${languageMap[user.language]}

Plan: ${user.subscription}

NX Credits: ${user.nxCredits}

Member Since:
${user.registrationDate.toLocaleDateString()}

Last Activity:
${user.lastActivity.toLocaleDateString()}`
  );
}

module.exports = profileCommand;