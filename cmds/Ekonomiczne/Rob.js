const { Collection } = require("discord.js")
const RobCooldown = new Collection()
module.exports = {
    name: "rob",
    cooldown: 86400,
    async run (client, message, args, MessageEmbed, db) {
        if(!RobCooldown.has(`${message.author.id}`)){
            let Robbed = Math.floor(Math.random() * 10000)
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Napadłeś na bank i otrzymałeś/aś ${Robbed} :coin:`)
                .setColor("GREEN")
            message.channel.send(embed)
            db.add(`coins_${message.author.id}`, Robbed)
            RobCooldown.set(`${message.author.id}`)
            setInterval(() => {
                RobCooldown.delete(`${message.author.id}`)
            }, module.exports.cooldown * 1000)
        } else {
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Napadać na bank możesz co 24 godziny!`)
                .setColor("RED")
            message.channel.send(embed)
        }
    }
}