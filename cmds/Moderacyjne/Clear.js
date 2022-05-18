module.exports = {
  name: "clear",
  aliases: ["purge", "prune"],
  async run(client, message, args, MessageEmbed, db) {
  
    const ileusunac = parseInt(args[0])

    if(!message.member.hasPermission("MANAGE_MESSAGES")){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
      message.channel.send(embed);
    }
    if(message.member.hasPermission("MANAGE_MESSAGES")){
      if(!ileusunac){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Poprawne użycie: clear [2-100]`)
        .setColor("RED")
        message.channel.send(embed);  
      }
      if(ileusunac && isNaN(ileusunac)){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Ilość wiadomosci do usunięcia nie jest liczbą!`)
        .setColor("RED")
        message.channel.send(embed);  
      }
      if(ileusunac < 2 || ileusunac >= 100){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Ilośc wiadomości do usunięcia musi być większa niż 2 i mniejsza niż 100!`)
        .setColor("GREEN")
        message.channel.send(embed)
      }
      if(ileusunac){
        try {
          await message.channel.bulkDelete(ileusunac)
          const embed = new MessageEmbed()
          .setTitle(message.member.user.tag)
          .setDescription(`Usunięto ${ileusunac} wiadomości!`)
          .setColor("GREEN")
          message.channel.send(embed)
        }catch(Error){
          message.channel.send("Wystąpił błąd podczas wykonywania operacji **bulkDelete**: " + Error)
        }
        
      }
    }
    


  }
}