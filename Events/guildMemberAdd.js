const {  MessageEmbed } = require("discord.js")
module.exports = (client) => {
    client.on("guildMemberAdd", async member => {
        const channelID = "858368514417754122"
        const channel = client.channels.cache.find(c => c.id == channelID)

        channel.send(
            new MessageEmbed()
                .setTitle("Użytkownik dołączył")
                .setDescription(`Witaj ${member.user.tag} na serwerze developerskim bota Cat Helper!`)
                .setColor("RED")
                .setThumbnail(member.user.avatarURL({ size: 2048 }))
        )

    })
}