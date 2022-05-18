module.exports = {
  name: "reverse",
  async run (client, message, args, MessageEmbed) {
    const text = args.join(" ")
    if(!text){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Proszę podać tekst do odwrócenia!`)
      .setColor("RED")
      message.channel.send(embed)
    }
    if(text){
      let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription('Odwrócony tekst:```' + result + '```')
        .setColor("GREEN")
        message.channel.send(embed)
    }
        
  }
}