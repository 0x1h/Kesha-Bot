const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "get website where you will see bot information and commands",
  type: 1,
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: (_, interaction) => {
    const avatar = interaction.guild.members.me.user.displayAvatarURL();

    const embed = new EmbedBuilder()
      .setTitle("Kesha bot help")
      .setDescription(
        "**[Visit Kesha-bot website for commands 🌈🛸👽](https://kesha.netlify.app/commands)**"
      )
      .setThumbnail(avatar)
      .setFooter({ text: "Kesha-bot", iconURL: avatar })
      .setColor(interaction.member.displayHexColor);

    interaction.reply({ embeds: [embed] });
  },
};
