const { createUser } = require("./userModel");
const users = require("./usersStore");

function getOrCreateUser(telegramUser) {
  if (!users.has(telegramUser.id)) {
    users.set(
      telegramUser.id,
      createUser({
        id: telegramUser.id,
        username: telegramUser.username,
      })
    );
  }

  return users.get(telegramUser.id);
}

function updateLastActivity(userId) {
  const user = users.get(userId);

  if (user) {
    user.lastActivity = new Date();
  }
}

module.exports = {
  getOrCreateUser,
  updateLastActivity,
};