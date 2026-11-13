async function aboutCommand(ctx) {
  await ctx.reply(
    `ℹ️ About Nexus Assistant

Personal AI & Automation Assistant.

Languages:

🇬🇧 English
🇪🇸 Spanish
🇷🇺 Russian
🇬🇪 Georgian

Current Version:

v0.2.0 Navigation System`
  );
}

module.exports = aboutCommand;