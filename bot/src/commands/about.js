async function aboutCommand(ctx) {
  await ctx.reply(
    `ℹ️ About Nexus Assistant

🧠 Powered by Nexus Memory

Digital Memory Platform

Nexus Assistant is the first application in the Nexus ecosystem.

The long-term vision of Nexus is to create a family of tools that help people capture, organize and use their knowledge, memories and experience.

Current ecosystem vision:

🧠 Nexus Memory
Personal and business memory platform.

🤖 Nexus Assistant
AI-powered assistant for daily tasks, notes and knowledge management.

🌍 Nexus Translator
Real-time conversation and translation tools.

⚡ Nexus Automations
Workflow automation and productivity tools.

📱 Nexus Mini Apps
Modern interfaces for Telegram and future mobile platforms.

Current Version:

v0.5.0 Notes & Database

✅ User Profiles
✅ Multi-language Support
✅ SQLite Database
✅ Notes CRUD

Road to the future:

🌐 Deployment
📱 Telegram Mini App
🤖 AI Assistant
⚡ Automations

GitHub:
https://github.com/vash-dev0p/nexus-assistant

LinkedIn:
https://www.linkedin.com/in/valentin-shraiber
`,
  );
}

module.exports = aboutCommand;
