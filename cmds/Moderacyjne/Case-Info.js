const shortid = require("shortid");

module.exports = {
  name: "case-info",
  async run (client, message, args, MessageEmbed, db){
    if(!message.member.hasPermission('KICK_MEMBERS')){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
       message.channel.send(embed);  
    }
    if(message.member.hasPermission('KICK_MEMBERS')){
      if(!args[0]){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Poprawne użycie: case-info [id warna] `)
        .setColor("RED")
         message.channel.send(embed);  
      }
      if(args[0]){
        let caseid = args[0]
        var warn = db.fetch(`warned_${message.guild.id}_${caseid}.caseid`)
        if(warn === null) return message.channel.send(
            new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription("Złe ID!")
                .setFooter("Developed by kot")
                .setColor("RANDOM")
        )
        var caseby = db.fetch(`warned_${message.guild.id}_${caseid}.by`);
        var caselinkedto = db.fetch(`warned_${message.guild.id}_${caseid}.linkedto`);
        var cos = db.fetch(`warned_${message.guild.id}_${caseid}.caseid`)
        var casereason = db.fetch(`warned_${message.guild.id}_${caseid}.reason`);
        var caseat = db.fetch(`warned_${message.guild.id}_${caseid}.at`);
        var casetotalwarns = db.fetch(`usercases_${message.guild.id}_${message.author.id}`)

        const CaseChecked = new MessageEmbed()
        CaseChecked.setTitle(message.member.user.tag);
        CaseChecked.setDescription(`ID Warna: **${args[0]}**\n\nWarn przpisany do: **${caselinkedto}**\nPowód warna: **${casereason}**\nWarn nadany przez **${caseby}**\nWarn nadany **${caseat}**`)
        CaseChecked.setColor("RANDOM")
        message.channel.send(CaseChecked)


      }
    }
  }
}