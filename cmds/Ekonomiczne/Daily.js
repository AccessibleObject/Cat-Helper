const { Collection } = require("discord.js")
const DailyCooldown = new Collection()
module.exports = {
    name: "daily",
    cooldown: 86400,
    async run (client, message, args, MessageEmbed, db) {
        if(!DailyCooldown.has(`${message.author.id}`)){
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Otrzymałeś/aś swoją dniówke (1000 :coin:)`)
                .setColor("GREEN")
            message.channel.send(embed)
            DailyCooldown.set(`${message.author.id}`)
            db.add(`coins_${message.author.id}`, 1000)
            setInterval(() => {
                DailyCooldown.delete(`${message.author.id}`)
            }, module.exports.cooldown * 1000)
        }else {
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Nie możesz użyć tej komendy, ponieważ nie mineły 24 godziny od twojej poprzedniej wypłaty!`)
                .setColor("RED")
            message.channel.send(embed)
        }
    }
}