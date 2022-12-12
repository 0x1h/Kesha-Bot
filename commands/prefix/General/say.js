module.exports = {
    config: {
        name: "say",
        description: "say something",
        usage: "say <something> or embed object as json"
    },
    permissions: ["SendMessages"],
    owner: false,
    run: async (client, message, args, prefix, config, db) => {
        const argsF = message.content.split(" ").slice(1).join(" ");
        if (!args[0]) {
            return message.reply({
                content: "Bitch WTF should I say???",
            });
        }

        const errorMsg =
            "Bitch I wont complete this command bc the parameters you specified for embed couses errors go fucking check [this](https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object)";

        if (argsF[0] === "{") {
            try {
                const params = JSON.parse(argsF);
                return message.reply(params).catch((err) => {
                    return message.reply({
                        embeds: [{
                            description: errorMsg
                        }]
                    });
                });
            } catch (err) {
                return message.reply({
                    embeds: [{
                        description: errorMsg
                    }]
                });
            }
        } else {
            return message.reply(argsF);
        }
    },
};
