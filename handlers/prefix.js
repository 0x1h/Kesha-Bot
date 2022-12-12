const fs = require("fs");

module.exports = (client) => {
  console.log("0------------------| Prefix Handler:".blue);

  fs.readdirSync('./commands/prefix').forEach(dir => {
    const files = fs.readdirSync(`./commands/prefix/${dir}`).filter(file => file.endsWith('.js'));

    if (!files || files.length <= 0) console.log("[HANDLER - PREFIX] There are no commands");
    
    files.forEach((file) => {
      let command = require(`../commands/prefix/${dir}/${file}`);
      if (command.config.name) {
        client.prefix_commands.set(command.config.name, command);
        console.log(`[HANDLER - PREFIX] Loaded a file: ${command.config.name} (#${client.prefix_commands.size})`.brightGreen)
      }
    });
  });
};
