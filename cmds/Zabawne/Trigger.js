const { MessageFlags, MessageAttachment } = require('discord.js');
const { ImageMaker } = require('canvacord')

module.exports = {
  name: "trigger",
  async run (client, message, args, MessageEmbed, db) {
    const mem = message.mentions.users.first() || message.author;
    const avatarTo = mem.displayAvatarURL({ format: "png"})
    const triggered = ImageMaker.trigger(avatarTo)

    attach(triggered, "image.gif")
  

  function attach(source, file){
    message.channel.send(new MessageAttachment(source, file))
  }  
  }
}