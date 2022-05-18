const { MessageFlags } = require("discord.js");

module.exports = {
  name: "unban",
  async run (client, message, args, MessageEmbed, db) {

    if(!message.member.hasPermission("BAN_MEMBERS")) {
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
      .setColor("RED")
       message.channel.send(embed);  
    } else {
      const id = parseInt(args[0])
      if(isNaN(id)){
        const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`${id} nie jest liczbą!`)
      .setColor("RED")
       message.channel.send(embed);  
      } else {
        message.guild.fetchBans().then(bans => {
          if(bans.size == 0) return
          let bannedUser = bans.find(b => b.user.id == id)
          if(bannedUser) {
              message.guild.members.unban(bannedUser.user).then((response) => {
                  const embed = new MessageEmbed()
                    .setTitle(message.member.user.tag)
                    .setDescription(`Użytkownik ${bannedUser.user.tag} (ID ${id}) został pomyślnie odbanowany przez ${message.member.user.tag}`)
                    .setColor("GREEN")
                    message.channel.send(embed)
              })
          } else {
              let embed = new MessageEmbed()
              .setTitle(message.member.user.tag)
              .setDescription(`Ten użytkownik nie jest zbanowany!`)
              .setColor("RED")
              message.channel.send(embed)
          }
      })
      }
    }

  }
}