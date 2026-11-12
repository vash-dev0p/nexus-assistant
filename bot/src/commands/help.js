async function helpCommand(ctx) {
  await ctx.reply(
    "❓ Help\n\nAvailable commands:\n/start\n/help\n/about"
  );
}

module.exports = helpCommand;