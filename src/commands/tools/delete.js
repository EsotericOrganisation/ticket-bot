const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`delete`)
    .setDescription(`Delete the channel.`)
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addChannelOption((option) =>
      option.setName(`channel`).setDescription(`The channel to delete.`)
    ),
  async execute(interaction) {
    const channel =
      interaction.options.getChannel(`channel`) ?? interaction.channel;
    channel.delete();

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`✅ Success`)
          .setColor(0x40ef60)
          .setDescription(`Channel successfully deleted!`),
      ],
      ephemeral: true,
    });
  },
};
