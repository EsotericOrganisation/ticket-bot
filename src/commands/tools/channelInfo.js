const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("channelInfo")
    .setDescription("Test Channel Information Command")
    .addChannelOption((option) =>
      option.setName("channel").setDescription("Channel information channel")
    ),
  async execute(interaction) {
    const channel =
      interaction.options.getChannel("channel") ?? interaction.channel;

    console.log(channel);
    const channels = [...interaction.guild.channels.cache.values()];
    for (const channel of channels) {
      console.log(channel.parentId);
    }

    interaction.reply({ content: channel.id });
  },
};
