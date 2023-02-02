const { EmbedBuilder } = require("discord.js");
const { randomColor } = require("./utils/randomColor");
const { getNumber } = require("./utils/getNumber");

module.exports = {
  id: "confessId",
  run: async (client, interaction) => {
    if (!interaction.isModalSubmit()) return;

    const description = interaction.fields.getTextInputValue("description");

    const channel = client.channels.cache.get("1070294510157971498");

    let message = await channel.messages
      .fetch({ limit: 1 })
      .then((messagePage) =>
        messagePage.size === 1 ? messagePage.at(0) : null
      );

    const number = getNumber(message.embeds[0].data)

    const modalEmbed = new EmbedBuilder()
      .setTitle(`Anonymous Confession (#${number+1})`)
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
