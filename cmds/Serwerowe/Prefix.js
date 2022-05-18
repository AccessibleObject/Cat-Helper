module.exports = {
  name: "prefix",
  aliases: ['conf'],
  async run (client, message, args, MessageEmbed, db) {
    var prefix = db.get(`prefix_${message.guild.id}`);
    if(prefix == null) prefix = "c."
    if(!message.member.hasPermission("MANAGE_GUILD")){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
      message.channel.send(embed);
    }
    if(!args[0]){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Obecny prefix to: ${prefix}! Jeśli chcesz go zmienić, użyj ${prefix}prefix <nowy prefix>`)
      .setColor("RED")
      message.channel.send(embed);  
    }
    if(args[0].length > 3){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nowy prefix jest zbyt długi!`)
      .setColor("RED")
      message.channel.send(embed);
    }
    if(args[0].length < 3 || args[0].length == 3){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Ustawiono prefix na ${args[0]}`)
      .setColor("RED")
      message.channel.send(embed);
      db.set(`prefix_${message.guild.id}`, args[0])
    }


  }
}