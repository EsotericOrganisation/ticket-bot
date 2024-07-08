const {
  SlashCommandBuilder,
  EmbedBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("panel")
    .setDescription("Send the Ticket Panel!"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
    .addFields([
        {
            name: `**Information**`,
            value: `> **Biller:**\n> **User:** \n> **Price:** $\n> **Product:** `,
            inline: true
        }
    ])
    .setColor(0xFF00FF)
    .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: interaction.user.tag
    })
    .setImage(`https://imgur.com/a/S8iONcX`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/1043874523835023403/1051595462219661342/512px-Square_Cash_app_logo.png`)
    .setTimestamp(Date.now())
    .setAuthor({
        url: `https://cash.me/$Slick0207`,
        iconURL: `https://cdn.discordapp.com/attachments/1043874523835023403/1051593904027336704/1639740420.png`,
        name: `ACD Cashapp Payment`
    })
    const menu = new StringSelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
            label: "Buy",
            description: "Buy",
            value: "first_option"
        },
        {
            label: "Support",
            description: "Support",
            value: "second_option"
        }
      ]);
    await interaction.channel.send({
      
      embeds: [embed],
      components: [new ActionRowBuilder().setComponents([menu])],
    }); 
    await interaction.reply({
    ephemeral:true,
    content: "Fertig!"
    });
  },
};
