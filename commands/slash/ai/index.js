const { replies } = require("./constant/reply.json");

module.exports = {
  name: "msg",
  description: "chat with bot ask her anything",
  type: 1,
  options: [
    {
      type: 3,
      name: "message",
      description: "what do you want to tell the bot?",
      required: true,
    },
  ],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: (_, interaction, config, db) => {
    const randomNumber = Math.floor(Math.random() * replies.length);
    const randomReply = replies[randomNumber];

    return interaction.reply({
      content: randomReply.toString(),
    });
  },
};
