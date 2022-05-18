const { MessageFlags } = require("discord.js")
const ms = require("ms")

module.exports = {
  name: "blacklist",
  async run (client, message, args, MessageEmbed, db) {
    if(message.author.id !== "565790986777657345"){
      const embed = new MessageEmbed()
      .setTitle( message.member.user.tag)
      .setDescription("Nie posiadasz permisji `cathelper.global.developer` aby wykonać komende `blacklist`!")
      .setColor("RANDOM")
      message.channel.send(embed)
    }
    
    if(message.author.id == "565790986777657345"){

        db.set(`bl_${args[0]}`, true)
        db.set(`blr_${args[0]}`, args.slice(1).join(" "))
        db.set(`blby_${args[0]}`, "Kot :D")
        message.channel.send("dostal blackliste")
      }
    }
}
