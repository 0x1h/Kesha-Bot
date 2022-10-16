const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "mymodal",
    description: "Replies with a modal menu!",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (_, interaction) => {
        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('Submit');

        const something = new TextInputBuilder()
            .setCustomId('something')
            .setLabel("(Beta)")
            .setStyle(TextInputStyle.Short);

        const ActionRow = new ActionRowBuilder().addComponents(something);

        modal.addComponents(ActionRow);

        await interaction.showModal(modal);
    },
};
