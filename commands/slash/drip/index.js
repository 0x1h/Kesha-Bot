const { EmbedBuilder } = require("discord.js");
const { formatAvatarUrl } = require("./utils/formatAvatarUrl");
const { formatClientId } = require("./utils/formatClientId");

module.exports = {
  name: "drip",
  description: "make someone drip in photo",
  type: 1,
  options: [
    {
      type: 6,
      name: "user",
      description: "mention user to make drip",
      required: true,
    },
  ],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: (_, interaction) => {
    const clientID = interaction.options.get("user").value;
    const user = interaction.guild.members.cache.get(formatClientId(clientID));

    if (user == undefined) {
      interaction.reply({
        content: "user that you mentioned doesn't exist on this server 🙄",
        ephemeral: true,
      });
      return;
    }

    const userAvatar = formatAvatarUrl(
      user.user.displayAvatarURL({ size: 2048 })
    );

    const embed = new EmbedBuilder()
      .setImage(`https://api.popcat.xyz/drip?image=${userAvatar}`)
      .setColor("#16537e");

    interaction.reply({ embeds: [embed] });
  },
};
