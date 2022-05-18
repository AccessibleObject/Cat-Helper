const { MessageEmbed } = require("discord.js")
module.exports = (client) => {
    client.on("guildMemberRemove", async member => {
        const channelID = "858368514417754122"
        const channel = client.channels.cache.find(c => c.id === channelID)

        channel.send(
            new MessageEmbed()
                .setTitle("Użytkownik wyszedł")
                .setDescription(`Żegnaj ${member.user.tag} !`)
                .setColor("RED")
                .setThumbnail(member.user.avatarURL({ size: 2048 }))
        )

    })
}

