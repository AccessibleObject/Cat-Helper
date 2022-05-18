const util = require("minecraft-server-util")
module.exports = {
     name: "mcserver",
    async run (client, message, args, MessageEmbed, db) {

         let text = args[0]
        if(!text){
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`Proszę podać adres IP!`)
                .setColor("RED")
            message.channel.send(embed)
        } else {
            util.status(args[0], { port: 25565, enableSRV: true, timeout: 5000, protocolVersion: 47 })
                .then((response) => {
                    const embed = new MessageEmbed()
                        .setTitle(message.member.user.tag)
                        .addField("Adres IP:", response.host + ":" + response.port, )
                        .addField("Online graczy:", response.onlinePlayers, )
                        .addField("Max graczy:", response.maxPlayers, )
                        .addField("Wersja", response.version, )
                        
                    message.channel.send(embed)
                })

        }

    }
}