const { Collection } = require("discord.js")
const ms = require("ms")
const WorkCooldown = new Collection();
module.exports = {
    name: "work",
    cooldown: 1000*900,
    async run (client, message, args, MessageEmbed, db) {

        if(!WorkCooldown.has(`${message.author.id}`)) {
            const worked = Math.floor(Math.random() * 300)
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Pracowałeś i zarobiłeś ${worked} :coin: !`)
                .setColor("GREEN")
            message.channel.send(embed)
            WorkCooldown.set(`${message.author.id}`)
            db.add(`coins_${message.author.id}`, worked)
            setInterval(() => {
                WorkCooldown.delete(`${message.author.id}`)
            }, module.exports.cooldown)
        } else {
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Możesz pracować co 15 minut!`)
                .setColor("GREEN")
            message.channel.send(embed)
        }
    }
}