const { EmbedBuilder } = require("discord.js");

const generalChannel = 1058522996064669696;

const GENERAL_ID = process.env.RAILWAY_GENERAL_CHANNEL;
const HALL_OF_FAME_ID = process.env.RAILWAY_HALL_OF_FAME_CHANNEL;

const anniversarySender = (client) => {
  const anniversaryEmbed = new EmbedBuilder()
    .setColor("#7df2ff")
    .setThumbnail(
      "https://images-ext-2.discordapp.net/external/SRAmhJcXNovX89BjYMAN4x2Ty7vLqQc32Py99jlVTPM/%3Fsize%3D4096/https/cdn.discordapp.com/icons/931296836499669002/a_9f0616ed5a6215bc12242055dde62f39.gif"
    )
    .setTitle("🎉 გილოცავთ ახალ 2023 წელს")
    .setDescription(
      "LETS GOOOOOOOOOOOOO GILOCAVT AEEEEEEEEEEEEEEEEAL DLAJ SDLJ AJDLNASJLDNAJLSDN GILCOAVTTT 🎉🎊🎄"
    )
    .setImage(
      "http://www3.pictures.zimbio.com/gi/KIIS+FM+2012+Jingle+Ball+Night+2+Backstage+mEjwCCrkXRWx.jpg"
    )
    .setFooter({
      text: "Kesha-bot",
      iconURL: client.user.displayAvatarURL({ format: "webp", size: 512 }),
    });

  client.channels.cache
    .get(GENERAL_ID)
    .send({ embeds: [anniversaryEmbed], content: "||@everyone||" });
  client.channels.cache.get(HALL_OF_FAME_ID).send({
    content: "||@everyone||",
    embeds: [
      anniversaryEmbed
        .setColor("#ff0000")
        .setDescription(
          "იოოოოოოოო გილცოავთ ახალ წელს მრავალს დაესწარით ბედნიერება ჯამრთელეოება და ყველაფერი საუკეთესოოოოოოოოოოოოოოოოოოოოო 🎄😭❄️😍😂😊❤️😘🥰😉🎁💀⛄🎅😎🌟🥵🤭✨🤔"
        ),
    ],
    content: "||@everyone||",
  });
  client.channels.cache
    .get(GENERAL_ID)
    .send(
      "||@everyone|| https://www.youtube.com/watch?v=fgLHED6OK_s&ab_channel=kesha"
    );
};

const eventSender = (client) => {
  let count = 60;

  const interval = setInterval(() => {
    client.channels.cache.get(GENERAL_ID).send(`🎄🎊🎉 **${count}** 🎉🎊🎄`);
    count--;

    if (count === 0) {
      clearInterval(interval);

      anniversarySender(client);
    }
  }, 1000);
};

module.exports = {
  eventSender,
};
