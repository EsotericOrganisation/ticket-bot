const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`open`)
    .setDescription(`Reopen a ticket.`)
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
  async execute(interaction) {
    interaction.channel.edit({
      PermissionOverwrites: [
        {
          id: interaction.guild.roles.everyone,
          allow: [PermissionsBitField.SendMessages],
        },
      ],
    });

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`Success ✅`)
          .setColor(0x40ef60)
          .setDescription(`The ticket has been reopened.`),
      ],
    });
  },
};
