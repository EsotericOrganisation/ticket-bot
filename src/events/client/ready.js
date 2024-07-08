module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Ready! ${client.user.username} is logged in and online.`);
  },
};
