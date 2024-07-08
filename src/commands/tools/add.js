const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`add`)
    .setDescription(`Add someone to the channel.`)
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addUserOption((option) =>
      option
        .setName(`user`)
        .setDescription(`The user to add to the channel`)
        .setRequired(true)
    ),
  async execute(interaction) {
    interaction.channel.edit({
      permissionOverwrites: [
        {
          id: interaction.options.getUser(`user`).id,
          allow: [PermissionsBitField.Flags.ViewChannel],
        },
      ],
    });

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`✅ Success`)
          .setColor(0x40ef60)
          .setDescription(`User successfully added to the channel!`),
      ],
      ephemeral: true,
    });
  },
};
