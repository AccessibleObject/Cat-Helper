
module.exports = {
    name: "mchead",
    async run (client, message, args, MessageEmbed, db) {

        let url = 'https://mc-heads.net/avatar/' + args[0]
        
        if(!args[0]){
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Poprawne użycie: mchead [nick premium]!`)
                .setColor("RED")
            message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
            .setTitle(message.member.user.tag)
            .setDescription(`Głowa gracza ${args[0]}`)
            .setImage(url)
            .setColor("RED")
        message.channel.send(embed)
        }

    }
}
