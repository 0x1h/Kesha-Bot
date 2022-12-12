const { randomNumber } = require("./utils/randomNumber.utils");

const randomRejectMesage = [
  "you little slut, you think I will say that? <a:byegerlie:1051966912222998548>",
  "yeah yeah keep writing that shit I won't say that",
  "what about write command **$say <mention> is pussyless, huggless, bitchless and Loser** <a:K5iscoming:1051968101333356695>",
  "ok nerd",
];

module.exports = {
  config: {
    name: "say",
    description: "say something",
    usage: "say <something>",
  },
  permissions: ["SendMessages"],
  owner: false,
  run: async (_, message, args) => {
    if (randomNumber()) {
      return message.reply({
        content: "stfu i won't say that",
      });
    }

    const cmdAuthor = message.author.id;

    const randomMessageIndex = Math.floor(
      Math.random() * randomRejectMesage.length
    );

    const argsF = message.content.split(" ").slice(1).join(" ");
    const randomMessage = randomRejectMesage[randomMessageIndex];

    if (
      argsF.includes("@everyone") ||
      argsF.includes("@here") ||
      argsF.includes("<@&")
    ) {
      if (randomMessage.includes("<mention>")) {
        const replaceWithMention = randomMessage.replace(
          "<mention>",
          `<@${cmdAuthor}>`
        );
        return message.reply({
          content: replaceWithMention,
        });
      }

      return message.reply({
        content: randomMessage,
      });
    }

    if (!args[0]) {
      return message.reply({
        content: "Bitch WTF should I say???",
      });
    }

    message.delete();
    return message.channel.send(argsF);
  },
};
