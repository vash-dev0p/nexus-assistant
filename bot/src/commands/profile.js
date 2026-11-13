async function profileCommand(ctx) {
  const username = ctx.from.username || "Unknown";

  await ctx.reply(
    `👤 Profile

Username: @${username}

Subscription: Free

NX Credits: 0

Language: English`
  );
}

module.exports = profileCommand;