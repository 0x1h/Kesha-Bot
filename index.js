const {
  Client,
  Partials,
  Collection,
  GatewayIntentBits,
} = require("discord.js");
const config = require("./config");
const express = require("express");

const app = express();

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
        name: "My Crazy Beautiful Life",
        type: 3,
      },
    ],
  },
});

// Getting the bot token:
const AuthenticationToken = config.Client.TOKEN;
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

["application_commands", "modals", "events", "prefix"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken).catch((err) => {
  console.error("[CRASH] Something went wrong while connecting to your bot...");
  console.error("[CRASH] Error from Discord API:" + err);
  return process.exit();
});

const port = process.env.PORT || 8080;

app.get("/", (_, res) => {
  res.send("<h1>Kesha bot is running</h1>");
});

app.listen(port, () => {
  console.log("Discord bot is on", port);
});

// Handle errors:
process.on("unhandledRejection", async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});