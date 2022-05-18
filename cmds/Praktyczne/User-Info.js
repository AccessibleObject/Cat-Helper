const moment = require("moment")
module.exports = {
  name: 'userinfo',
  async run (client, message, args, MessageEmbed, db) {

    const member = message.mentions.users.first() || message.author;
    var group = db.get(`group_${member.id}`)
    if(group == null) group = "Użytkownik (0)"
    var badges = db.get(`badges_${member.id}`)
    if(badges == null) badges = "Brak"
    let embed = new MessageEmbed()
        .setTitle("Informacje o użytkowniku")
        .setDescription(` 
          **Użytkownik**:
            :shield:・Nazwa użytkownika: ${member.tag}
            :hash:・Tag: ${member.discriminator}
            :id:・ID: ${member.id}
            :date:・Utworzono konto: ${moment.utc(member.createdAt).format("YYYY-MM-DD HH:MM:SS")}
          **Bot**:
            <:staff:850777389051019274>・Ranga: ${group}
            <:developer:850776573258104864>・Odznaki w bocie: ${badges}
          **Serwer**:
            :date:・Dołączono na serwer: ${new Date(member.guild.joinedAt).toLocaleDateString()}
          **Discord**:
            :robot:・Bot: ${(member.bot ? "Tak" : "Nie")}
                   `)
        .setThumbnail(member.avatarURL({size: 2048}))
        .setColor("GREEN")
        message.channel.send(embed)
  }
}