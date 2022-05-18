module.exports = {
  name: "zgłoś-błąd",
  aliases: ["bug", "zglos", "zglosblad", "zglos-blad"],
  async run (client, message, args, MessageEmbed, db) {
    const memberID = "565790986777657345"
    const owner = client.channels.cache.get(channel => channel.id == 845719225926811708)
    const blad = args.slice(0).join(" ");
    if(!blad){
      const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Poprawne użycie: zgłoś-błąd [treść błędu]`)
        .setColor("RED")
        message.channel.send(embed);  
    }
    if(blad){
      const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Bug został wysłany! Za wysyłanie bugów w celu zabawy grozi blacklista!`)
        .setColor("GREEN")
        message.channel.send(embed);  
      const BugReport = new MessageEmbed()
      .setTitle("BUG")
      .addField(`Zgłosił`, message.member.user.tag, true)
      .addField(`Serwer`, message.guild.name, true)
      .addField(`Treść`, blad)
      .setColor("GREEN")
      client.channels.cache.get("850441930113810482").send(BugReport)
    }

  }
}