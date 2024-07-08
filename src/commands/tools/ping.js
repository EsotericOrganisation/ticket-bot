const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName(`test`).setDescription(`test`),
  async execute(interaction,client) {
    console.log(client.guilds.fetch(`1051953804096049264`));
  },
};
