const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  name: "embed",
  description: "Input Fields to send Embed",
  type: 1,
  options: [],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (_, interaction) => {
    const modal = new ModalBuilder()
      .setCustomId("myModal")
      .setTitle("Send Embed");

    const setTitle = new TextInputBuilder()
      .setCustomId("title")
      .setPlaceholder('"Welcome"')
      .setLabel("Title")
      .setStyle(TextInputStyle.Short)
      .setRequired(false);

    const setDescription = new TextInputBuilder()
      .setCustomId("description")
      .setPlaceholder('"What a wonderful day"')
      .setLabel("Description")
      .setStyle(TextInputStyle.Paragraph);

    const setImage = new TextInputBuilder()
      .setCustomId("image")
      .setLabel("Image URL")
      .setPlaceholder("https://example.com/")
      .setStyle(TextInputStyle.Short)
      .setRequired(false);

    const TitleRow = new ActionRowBuilder().addComponents(setTitle);
    const DescriptionRow = new ActionRowBuilder().addComponents(setDescription);
    const ImageRow = new ActionRowBuilder().addComponents(setImage);

    modal.addComponents(TitleRow);
    modal.addComponents(DescriptionRow);
    modal.addComponents(ImageRow);

    await interaction.showModal(modal);
  },
};
