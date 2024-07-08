const { InteractionType, EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle(`❌ Error`)
              .setColor(`Red`)
              .setDescription(
                `> An unexpected error occured while executing this command.`
              ),
          ],
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) {
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle(`❌ Error`)
              .setColor(`Red`)
              .setDescription(
                `> An unexpected error occured while executing this button interaction.`
              ),
          ],
          ephemeral: true,
        });
        return console.log("There is no code for this button.");
      }

      try {
        await button.execute(interaction, client);
      } catch (err) {
        console.error(err);
      }
    } else if (interaction.isSelectMenu()) {
      const { selectMenus } = client;
      const { customId } = interaction;
      const menu = selectMenus.get(customId);
      if (!menu) {
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle(`❌ Error`)
              .setColor(`Red`)
              .setDescription(
                `> An unexpected error occured while executing this select menu interaction.`
              ),
          ],
          ephemeral: true,
        });
        return console.log("There is no code for this menu.");
      }

      try {
        await menu.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    } else if (interaction.type == InteractionType.ModalSubmit) {
      const { modals } = client;
      const { customId } = interaction;
      const modal = modals.get(customId);
      if (!modal) {
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle(`❌ Error`)
              .setColor(`Red`)
              .setDescription(
                `> An unexpected error occured while executing this modal interaction.`
              ),
          ],
          ephemeral: true,
        });
        return console.log("There is no code for this modal.");
      }

      try {
        await modal.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    } else if (interaction.isContextMenuCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const contextCommand = commands.get(commandName);
      if (!contextCommand) {
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle(`❌ Error`)
              .setColor(`Red`)
              .setDescription(
                `> An unexpected error occured while executing this context menu interaction.`
              ),
          ],
          ephemeral: true,
        });
        return console.log("There is no code for this context menu.");
      }

      try {
        await contextCommand.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    } else if (
      interaction.type == InteractionType.ApplicationCommandAutocomplete
    ) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) {
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle(`❌ Error`)
              .setColor(`Red`)
              .setDescription(
                `> An unexpected error occured while executing this autocomplete command.`
              ),
          ],
          ephemeral: true,
        });
        return console.log("There is no code for this autocomplete command.");
      }

      try {
        await command.autocomplete(interaction, client);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
