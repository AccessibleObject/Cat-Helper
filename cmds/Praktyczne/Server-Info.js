const moment = require("moment")
module.exports = {
  name: 'serverinfo',
  async run (client, message, args, MessageEmbed, db) {

    let bots = message.guild.members.cache.filter(f => f.bot === true)
    
    let embed = new MessageEmbed()
        .setTitle("Informacje o Serwerze")
        .addFields(
          {
            name: `Nazwa serwera`,
            value: message.guild.name,
            inline: false,
          },
          {
            name: `Właściciel serwera`,
            value: message.guild.owner,
            inline: false,
          },
          {
            name: `Użytkownicy (+ Boty)`,
            value: message.guild.memberCount ,
            inline: false,
          },
          {
            name: `Serwer stworzono`,
            value: moment.utc(message.guild.createdAt).format('YYYY-MM-DD HH:MM'),
            inline: true
          },
          
          // {
          //   name: `ID użytkownika`,
          //   value: member.id,
          //   // inline: true,
          // },
          // {
          //   name: `Gra w`,
          //   value: member.presence.activities[0] ? member.presence.activities[0].name : "Nie gra w gre",
          //   inline: true,
          // },
          // {
          //   name: 'Status',
          //   value: member.presence.status,
          //   inline: true,
          // },
        )
        //.setThumbnail(message.guild.avatarURL({size: 2048}))
        .setColor("GREEN")
        message.channel.send(embed)
  }
}