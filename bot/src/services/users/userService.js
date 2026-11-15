const { createUser } = require("./userModel");
const users = require("./usersStore");
const {
  createUser: saveUserToDatabase,
  getUserById,
} = require("./userRepository");

function getOrCreateUser(telegramUser) {
  if (!users.has(telegramUser.id)) {
    const user = createUser({
      id: telegramUser.id,
      username: telegramUser.username,
    });

    users.set(telegramUser.id, user);

    saveUserToDatabase(user);
    
    getUserById(user.id, (dbUser) => {
      console.log("📦 User loaded from SQLite:", dbUser);
    });
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