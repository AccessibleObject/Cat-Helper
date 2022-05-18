const Discord = require("discord.js");
const config = require("./config")
const  { MessageEmbed, Intents } = require("discord.js")
const { readdirSync, read } = require("fs")
const  colors = require("colors");
const { basename } = require("path/posix");
global.client = new Discord.Client();
client.login(config.token)
require("./Events/message")(client)
require("./Events/ready")(client)
require("./Events/guildMemberAdd")(client)
require("./Events/guildMemberRemove")(client)
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.KociSlowdown = new Discord.Collection()
readdirSync("./cmds/").forEach(dir => {
  const commands = readdirSync(`./cmds/${dir}/`).filter(file => file.endsWith(".js"));
  for (let file of commands) {
      let pull = require(`./cmds/${dir}/${file}`);
      if(!pull.name) console.log(`W pliku ${file} nie ma podanej nazwy!`)
      if (pull.name) {
          client.commands.set(pull.name, pull);
          //console.log(`[`.yellow + ` INFO `.blue + `]`.yellow + ` ${file} `.green + `został wczytany`.yellow)
      } else {
          continue;
      }  
      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
  }
});



