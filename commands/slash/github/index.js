const fetch = require("node-fetch");
const { EmbedBuilder } = require("discord.js");

const API = "https://api.github.com/users/";

module.exports = {
  name: "github",
  description: "search github user",
  type: 1,
  options: [
    {
      type: 3,
      name: "username",
      description: "github username",
      required: true,
    },
  ],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (_, interaction) => {
    const username = interaction.options.get("username").value;
    const response = await fetch(API + username);
    const userData = await response.json();

    if (userData.message === "Not Found") {
      interaction.reply({
        content: "inputed user not found 🙄",
        ephemeral: true,
      });
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle(userData.name)
      .setDescription(userData.bio === "No Bio" ? "" : userData.bio)
      .setURL(userData.url)
      .setThumbnail(userData.avatar_url)
      .setColor("#000")
      .addFields(
        { name: "Followers", value: String(userData.followers), inline: true },
        { name: "Following", value: String(userData.following), inline: true },
        {
          name: "Public Repos",
          value: String(userData.public_repos),
          inline: true,
        }
      );

    interaction.reply({ embeds: [embed] });
  },
};
