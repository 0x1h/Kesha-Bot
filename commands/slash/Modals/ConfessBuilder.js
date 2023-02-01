const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  name: "confess",
  description: "confess someone without knowing who did that",
  type: 1,
  options: [],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (_, interaction) => {
    const modal = new ModalBuilder()
      .setCustomId("confessId")
      .setTitle("Confess");

    const setDescription = new TextInputBuilder()
      .setCustomId("description")
      .setPlaceholder('say something nobody will know ')
      .setLabel("Description")
      .setStyle(TextInputStyle.Paragraph);

    const DescriptionRow = new ActionRowBuilder().addComponents(setDescription);

    modal.addComponents(DescriptionRow);

    await interaction.showModal(modal);
  },
};
