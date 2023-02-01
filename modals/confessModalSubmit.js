const { EmbedBuilder } = require("discord.js");
const { randomColor } = require("./utils/randomColor");

module.exports = {
  id: "confessId",
  run: async (client, interaction) => {
    if (!interaction.isModalSubmit()) return;

    const description = interaction.fields.getTextInputValue("description");
    
    const channel = client.channels.cache.get("1070294510157971498");

    const messages = await channel.messages.fetch()
    const messagesSize = messages.size + 1

    const modalEmbed = new EmbedBuilder()
      .setTitle(`Anonymous Confession (#${messagesSize})`)
      .setColor(randomColor())
      .setDescription(description);

    await interaction.reply({
      content:
        "message sent quitely in <#1070294510157971498> <a:stfu_kesha:942050676484239390> <a:jackswife:1053266140920561735>",
      ephemeral: true,
    });

    
    await client.channels.cache
      .get("1070294510157971498")
      .send({ embeds: [modalEmbed] });
  },
};
