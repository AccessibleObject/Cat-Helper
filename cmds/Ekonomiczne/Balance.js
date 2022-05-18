module.exports = {
    name: "balance",
    async run (client, message, args, MessageEmbed, db) {
        var coins = db.get(`coins_${message.author.id}`)
        if(coins == null) coins = "0"
        let embed = new MessageEmbed()
            .setTitle(message.member.user.tag)
            .setDescription(`Posiadasz ${coins} :coin: !`)
            .setColor("RED")
        message.channel.send(embed);
    }
}