module.exports = {
  name: "ban",
  async run (client, message, args, MessageEmbed, db) {
    if(!message.member.hasPermission("BAN_MEMBERS")){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
       message.channel.send(embed);  
    }
    if(message.member.hasPermission("BAN_MEMBERS")){
      const member = message.mentions.members.first() || client.users.cache.get(args[0])

      if(member != null && !member.bannable){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Ten użytkownik posiada za wysokie uprawnienia!`)
        .setColor("RED")
         message.channel.send(embed);  
      }
      if(!member){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Poprawne użycie: ban <kto> [za co]!`)
        .setColor("RED")
         message.channel.send(embed);  
      }
      const reason = args.slice(1).join(" ");

      if(member.bannable){
        if(member){
          try {
            member.ban({ reason: reason})
            const embed = new MessageEmbed()
            .setTitle(message.member.user.tag)
            .setDescription(`Pomyślnie zbanowano ${member.user.tag} (ID ${member.user.id}) z powodem ${reason}!`)
            .setColor("RED")
            message.channel.send(embed)
          }catch(Error){
            message.channel.send("Błąd podczas wykonywania operacji **member.ban**: " + Error);
        }

        }
      }
    }
  }
}