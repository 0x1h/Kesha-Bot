const { EmbedBuilder, PermissionsBitField, codeBlock } = require("discord.js");
const client = require("../../index");
const config = require("../../config");

const { replies } = require("../../commands/slash/ai/constant/reply.json");

module.exports = {
  name: "messageCreate"
};

client.on('messageCreate', async message => {

  const prefix = config.Prefix || "?";

  if (message.channel.type !== 0) return;
  if (message.author.bot) return;
  
  const mentionReply = new EmbedBuilder()
      .setColor(0xFFC0CB)
      .setTitle("why u are tagging me?")
      .setDescription(
          "Bitch 💅 if you have any questions use this command </help:1020395237241278465>\nWebsite 🌐: https://kesha.netlify.app/"
      )
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }));
  if (message.mentions.has(client.user)) {
      return message.reply({
          embeds: [mentionReply],
      });
  }
  
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;

  let command = client.prefix_commands.get(cmd);

  if (!command) return;

  if (command) {
    if (command.permissions) {
      if (!message.member.permissions.has(PermissionsBitField.resolve(command.permissions || []))) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Unfortunately, you are not authorized to use this command.`)
            .setColor("Red")
        ]
      })
    };

    if (command.owner, command.owner == true) {
      if (!config.Users.OWNERS) return;

      const allowedUsers = []; // New Array.

      config.Users.OWNERS.forEach(user => {
        const fetchedUser = message.guild.members.cache.get(user);
        if (!fetchedUser) return allowedUsers.push('*Unknown User#0000*');
        allowedUsers.push(`${fetchedUser.user.tag}`);
      })

      if (!config.Users.OWNERS.some(ID => message.member.id.includes(ID))) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Sorry but only owners can use this command! Allowed users:\n**${allowedUsers.join(", ")}**`)
            .setColor("Red")
        ]
      })
    };

    try {
      command.run(client, message, args, prefix, config);
    } catch (error) {
      console.error(error);
    };
  }
});
