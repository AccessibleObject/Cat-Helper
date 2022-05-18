const Discord = require("discord.js")
const db = require("quick.db") 
const { MessageEmbed } = require("discord.js")
module.exports = (client) => {

  
  client.on("message", message => {
    
    if(message.content == "https://thumbs.gfycat.com/SpottedUnconsciousGalapagostortoise-mobile.mp4"){
      message.delete()
    }
    // if(message.content.includes("who") || message.content.includes("cares") || message.content.includes("kto")) return message.delete()
    var prefix = require("quick.db").get(`prefix_${message.guild.id}`);
    if(prefix == null) prefix = "c."
    const blacklisted = db.get(`bl_${message.author.id}`)
    const blacklistedby = db.get(`blby_${message.author.id}`)
    const blacklistedr = db.get(`blr_${message.author.id}`)
    if(message.content.startsWith(prefix)){

      if(blacklisted == true){
        let embed = new Discord.MessageEmbed()
        .setTitle("Ups, nie możesz tego wykonać!")
        .setDescription(`Wygląda na to, że na twoje konto jest nałożona blacklista! Blacklista nadana przez: ${blacklistedby} z powodem ${blacklistedr}`)
        .setColor("RED")
        message.channel.send(embed)
      }
    }
    if(blacklisted == true) return;

    if (message.content.includes("<@!751119350051635290>")) {
        const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(':bell: Wzmianka bota wykryta!')
      .setDescription("<a:strzalka:851028144663167007> Mój prefix ma tym serwerze to `" + prefix + "`\n<a:strzalka:851028144663167007> Aby otrzymać pomoc użyj `" + prefix + "pomoc`\n\n\n<a:strzalka:851028144663167007> Spraw, że twój serwer będzie unikalny \n<a:strzalka:851028144663167007> i dodaj mnie już dziś!")
      message.channel.send(embed);


  }






    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/g);
    const commandname = args.shift().toLowerCase()

    let command = client.commands.get(commandname)
    if(!command) client.commands.get(client.aliases.get(commandname))
    if(command) command.run(client, message, args, MessageEmbed, db)



    })

}