const { randomNumber } = require("./utils/randomNumber.utils");

module.exports = {
  config: {
    name: "say",
    description: "say something",
    usage: "say <something>",
  },
  permissions: ["SendMessages"],
  owner: false,
  run: async (_, message, args) => {

    if(randomNumber()){
      return message.reply({
        content: "stfu i won't say that",
      });
    }

    const argsF = message.content.split(" ").slice(1).join(" ");
    if (!args[0]) {
      return message.reply({
        content: "Bitch WTF should I say???",
      });
    }

    message.delete();
    return message.channel.send(argsF);
  },
};
