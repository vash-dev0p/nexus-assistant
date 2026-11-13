function createUser(userData) {
  return {
    id: userData.id,
    username: userData.username || "Unknown",
    language: "en",
    subscription: "Free",
    nxCredits: 0,
    registrationDate: new Date(),
    lastActivity: new Date(),
  };
}

module.exports = {
  createUser,
};