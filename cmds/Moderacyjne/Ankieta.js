module.exports = {
  name: "ankieta",
  async run (client, message, args, MessageEmbed, db) {
    const tresc = args.slice(0).join(" ");
    if(!message.member.hasPermission('MANAGE_GUILD')){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
      message.channel.send(embed);
    }
    if(message.member.hasPermission("MANAGE_GUILD")){
      if(!tresc){
        const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Poprawne użycie: ankieta [treść]`)
      .setColor("RED")
      message.channel.send(embed);
      }
      if(tresc){
        if(message.member.hasPermission("MANAGE_GUILD")){
          const ankieta = new MessageEmbed()
          .setTitle(":bar_chart: Ankieta")
          .setDescription(`${tresc}\n\nZareaguj :white_check_mark: jeśli jesteś za lub :x: jeśli jesteś przeciw!`)
          .setColor("GREEN")
          let x = await message.channel.send(ankieta)
          x.react("✅")
          x.react("❌")
        }
        
      }
    }
  }
}