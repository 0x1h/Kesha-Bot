const { EmbedBuilder } = require("discord.js");
const client = require("../../index");
const config = require("../../config/index");
const { albums } = require("../../commands/slash/albums/constant/db.json");

module.exports = {
  name: "interactionCreate",
};

client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = client.slash_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction, config);
    } catch (e) {
      console.error(e);
    }
  }

  if (interaction.isSelectMenu()) {
    //Select:

    const filterAlbums = albums.find(
      (album) => album.name.toLowerCase() === interaction.values[0]
    );

    const embed = new EmbedBuilder()
      .setColor(filterAlbums.color)
      .setTitle(filterAlbums.name)
      .setDescription(filterAlbums.description)
      .setURL(filterAlbums.spotify_URL)
      .setThumbnail(filterAlbums.album_URL)
      .setFooter({
        text: "Artist: Kesha",
        iconURL:
          "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50",
      });

    await interaction.reply({
      content: `Information about album **${filterAlbums.name}**`,
      embeds: [embed],
    });
  }

  if (interaction.isUserContextMenuCommand()) {
    // User:
    const command = client.user_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction, config);
    } catch (e) {
      console.error(e);
    }
  }

  if (interaction.isMessageContextMenuCommand()) {
    // Message:
    const command = client.message_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction, config);
    } catch (e) {
      console.error(e);
    }
  }

  if (interaction.isModalSubmit()) {
    // Modals:
    const modal = client.modals.get(interaction.customId);

    if (!modal)
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              "Something went wrong... Probably the Modal ID is not defined in the modals handler."
            )
            .setColor("Red"),
        ],
        ephemeral: true,
      });

    try {
      modal.run(client, interaction, config);
    } catch (e) {
      console.error(e);
    }
  }
});
