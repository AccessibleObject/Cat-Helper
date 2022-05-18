module.exports = {
  name: "kick",
  async run (client, message, args, MessageEmbed, db) {
    if(!message.member.hasPermission("KICK_MEMBERS")){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
       message.channel.send(embed);  
    }
    if(message.member.hasPermission("KICK_MEMBERS")){
      const member = message.mentions.members.first() || client.users.cache.get(args[0])

      if(member != null && !member.kickable){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Ten użytkownik posiada za wysokie uprawnienia!`)
        .setColor("RED")
         message.channel.send(embed);  
      }
      if(!member){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Poprawne użycie: kick <kto> [za co]!`)
        .setColor("RED")
         message.channel.send(embed);  
      }
      const reason = args.slice(1).join(" ");

      if(member.bannable){
        if(member){
          try {
            member.kick({ reason: reason})
            const embed = new MessageEmbed()
            .setTitle(message.member.user.tag)
            .setDescription(`Pomyślnie wyrzucono ${member.user.tag} (ID ${member.user.id}) z powodem ${reason}!`)
            .setColor("RED")
            message.channel.send(embed)
          }catch(Error){
            message.channel.send("Błąd podczas wykonywania operacji **member.kick**: " + Error);
        }

        }
      }
    }
  }
}