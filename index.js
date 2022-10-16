const {
  Client,
  Partials,
  Collection,
  GatewayIntentBits,
} = require("discord.js");
const config = require("./config");

const { replies } = require("./commands/slash/ai/constant/reply.json");

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
  ],
  presence: {
    activities: [
      {
        name: "My Crazy Beutiful Life",
        type: 3,
      },
    ],
  },
});

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn(
    "[CRASH] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.js."
      .red
  );
  return process.exit();
}

// Handler:
client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.user_commands = new Collection();
client.message_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();

module.exports = client;

["application_commands", "modals", "events"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken).catch((err) => {
  console.error("[CRASH] Something went wrong while connecting to your bot...");
  console.error("[CRASH] Error from Discord API:" + err);
  return process.exit();
});

client.on("messageCreate", async (msg) => {
  const prefix = "$";

  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  const message = args.join(" ").trim();

  if (cmd === "msg") {
    if (message === undefined || message === "") {
      msg.reply(
        "bro how the fuck am i supposed to know what the hell u want to say bruh"
      );
      return;
    }

    const randomNumber = Math.floor(Math.random() * replies.length);
    const randomReply = replies[randomNumber];

    msg.reply({
      content: randomReply.toString(),
    });
  }
});

// Handle errors:
process.on("unhandledRejection", async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});
