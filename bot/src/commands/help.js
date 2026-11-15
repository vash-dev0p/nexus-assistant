async function helpCommand(ctx) {
  await ctx.reply(
    `❓ Nexus Assistant Help

🏠 Home
Return to the main screen at any time.

🤖 AI Assistant
Future AI-powered features.

📝 Notes
Store and manage personal notes.

⚡ Automations
Automation tools and integrations.

👤 Profile
View your account information.

❤️ Support Nexus
Support project development.

⚙️ Settings
Manage preferences and future options.

ℹ️ About
Learn more about Nexus Assistant.

Tip:
Press 🏠 Home anytime to return to the main menu.`
  );
}

module.exports = helpCommand;