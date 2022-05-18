module.exports = {
  name: 'slowdown',
  async run (client, message, args, MessageEmbed, db) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
       message.channel.send(embed);  
    }
    if(message.member.hasPermission("MANAGE_MESSAGES")){
      if(!args[0]){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Poprawne użycie: slowdown [slowdown]!`)
        .setColor("RED")
         message.channel.send(embed);
      }
      if(args[0]){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Ustawiono slowdown na ${parseInt(args[0])}!`)
        .setColor("GREEN")
         message.channel.send(embed);
         message.channel.setRateLimitPerUser(parseInt(args[0]))
      }
      if(isNaN(args[0])){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Poprawne użycie: slowdown [slowdown]!`)
        .setColor("RED")
         message.channel.send(embed);
      }
    }

  }
}