const { rows_interaction } = require("./constant/row_interction");
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const { albumInteraction } = require("./utils/albumInteraction");

module.exports = {
  name: "album",
  description: "get information about kesha's album",
  type: 1,
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (client, interaction, config, db) => {
    // const filterAlbums = albums.find(
    //   (album) => album.name.toLowerCase() === interaction.values[0]
    // );

    const row = new ActionRowBuilder().setComponents(
      new SelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Select any Kesha album")
        .addOptions(...rows_interaction)
    );

    await interaction.reply({ components: [row.toJSON()] });

    if(interaction.isSelectMenu()){
      console.log('VALUEEE')
    }

    // client.commands.get("album").interaction(albumInteraction);
    // const embed = new MessageEmbed()
    //   .setColor(filterAlbums.color)
    //   .setTitle(filterAlbums.name)
    //   .setDescription(filterAlbums.description)
    //   .setURL(filterAlbums.spotify_URL)
    //   .setThumbnail(filterAlbums.album_URL)
    //   .setFooter({
    //     text: "Artist: Kesha",
    //     iconURL:
    //       "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50",
    //   });

    // await interaction.reply({
    //   content: `Information about album **${filterAlbums.name}**`,
    //   embeds: [embed],
    // });
  },
};
