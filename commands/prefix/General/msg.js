const { replies } = require("../../slash/ai/constant/reply.json");
const { karmaReplaceString } = require("./utils/karmaReplaceString");

module.exports = {
  config: {
    name: "msg",
    description: "Replyes with random reply",
  },
  permissions: ["SendMessages"],
  owner: false,
  run: async (_, message, args) => {
    const argsF = args.join(" ").trim();

    if (argsF.includes(" xar")) {
      return message.reply(
        karmaReplaceString(argsF)
      );
    }

    if (!argsF) {
      return message.reply(
        "bro how the fuck am i supposed to know what the hell u want to say bruh"
      );
    }

    const randomNumber = Math.floor(Math.random() * replies.length);
    const randomReply = replies[randomNumber];

    message.reply({
      content: randomReply.toString(),
    });
  },
};
