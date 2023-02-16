const { EmbedBuilder } = require("discord.js");
const { getNumber } = require("../../../modals/utils/getNumber");
const { randomColor } = require("../../../modals/utils/randomColor");
const { fileUpload } = require("./utils/fileUpload");

module.exports = {
  name: "confess",
  description: "send anything without anyone knowing who send",
  type: 1,
  options: [
    {
      type: 3,
      name: "message",
      description: "say anything what ever you want 💭",
      required: true,
    },
    {
      type: 3,
      name: "media-url",
      description: "drop link there 🙄",
      required: false,
    },
    {
      type: 11,
      name: "attachment",
      description: "upload attachement 📂",
      required: false,
    },
  ],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (client, interaction) => {
    const message = interaction.options.get("message").value;
    const mediaUrl = interaction.options.get("media-url")?.value;
    const attachment =
      interaction.options.get("attachment")?.attachment?.attachment;

    const channel = client.channels.cache.get("1070294510157971498");

    const messages = await channel.messages
      .fetch({ limit: 2 })
      .then((messagePage) => {
        if (messagePage.size === 2 && messagePage.at(0).embeds[0].data.video) {
          return messagePage.at(-1);
        }

        return messagePage.at(0);
      });


    const number = getNumber(messages.embeds[0].data);

    const file = fileUpload({ attachment, mediaUrl });

    const modalEmbed = new EmbedBuilder()
      .setTitle(`Anonymous Confession (#${number + 1})`)
      .setColor(randomColor())
      .setDescription(message)
      .setImage(file.photo);

    await interaction.reply({
      content:
        "message sent quitely in <#1070294510157971498> <a:stfu_kesha:942050676484239390> <a:jackswife:1053266140920561735>",
      ephemeral: true,
    });

    await client.channels.cache
      .get("1070294510157971498")
      .send({ embeds: [modalEmbed] });

    if (file.video) {
      await client.channels.cache
        .get("1070294510157971498")
        .send({ content: file.video });
    }
  },
};
