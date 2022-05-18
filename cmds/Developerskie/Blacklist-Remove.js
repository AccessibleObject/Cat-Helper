
const { MessageFlags } = require("discord.js")
const ms = require("ms")

module.exports = {
  name: "blacklist-remove",
  async run (client, message, args, MessageEmbed, db) {
    if(message.author.id !== "565790986777657345"){
      const embed = new MessageEmbed()
      .setTitle( message.member.user.tag)
      .setDescription("Nie posiadasz permisji `cathelper.global.developer` aby wykonać komende `blacklist-remove`!")
      .setColor("RANDOM")
      message.channel.send(embed)
    }
    
    if(message.author.id == "565790986777657345"){
      db.set(`bl_${args[0]}`, null)
      message.channel.send("usunieto blackliste :D")
    
    }
  }
}
