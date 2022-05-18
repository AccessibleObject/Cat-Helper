module.exports = {
    name: "add-money",
    async run(client, message, args, MessageEmbed, db) {
        var coins = db.get(`coins_${message.author.id}`);
        let member = message.mentions.users.first()
        if(!message.author.id != '565790986777657345') {
            if(message.author.id !== "565790986777657345"){
                const embed = new MessageEmbed()
                    .setTitle( message.member.user.tag)
                    .setDescription("Nie posiadasz permisji `cathelper.global.developer` aby wykonać komende `add-money`!")
                    .setColor("RANDOM")
                message.channel.send(embed)
            }

            if(message.author.id == "565790986777657345"){
                let coinsToAdd = parseInt(args[1])
                if(!coinsToAdd){
                    let embed = new MessageEmbed()
                        .setTitle(message.member.user.tag)
                        .setDescription(`Poprawne użycie: add-money @Użytkownik [liczba]`)
                        .setColor("RED")
                    message.channel.send(embed)
                } else {
                    if(isNaN(coinsToAdd)){
                        let embed = new MessageEmbed()
                            .setTitle(message.member.user.tag)
                            .setDescription(`${coinsToAdd} nie jest liczbą!`)
                            .setColor("RED")
                        message.channel.send(embed)
                    } else if(!isNaN(coinsToAdd)){
                        let embed = new MessageEmbed()
                            .setTitle(message.member.user.tag)
                            .setDescription(`Dodano ${coinsToAdd} monet do konta użytkownika ${member.tag}`)
                            .setColor("GREEN")
                        message.channel.send(embed)
                        db.add(`coins_${member.id}`, coinsToAdd)
                    }
                }


        }

        }
    }
}