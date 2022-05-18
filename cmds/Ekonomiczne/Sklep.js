module.exports = {
    name: "sklep",
    async run (client, message, args, MessageEmbed, db) {

        if(!args[0]) {
            const embed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(` 
                    Już za 2137 dni będzie dostępne!
                 `)
                .setColor("GREEN")
            message.channel.send(embed)

            // } else if(args[0] === "1"){
            //     const embed = new MessageEmbed()
            //     .setTitle(message.member.user.tag)
            //         .setDescription(`
            //
            //         Bot ci wpierdolił! Nie możesz używać komendy work przez 48 godzin!
            //          `)
            //         .setColor("GREEN")
            //     message.channel.send(embed)
            //     db.subtract(`coins_${message.author.id}`, 300)
            // } else if(args[0] === "2"){
            //     const embed = new MessageEmbed()
            //         .setTitle(message.member.user.tag)
            //         .setDescription(`
            //            Proszę poczekać 2137 godzin aż zmiany w bazie danych zostaną zastosowane!
            //          `)
            //         .setColor("GREEN")
            //     message.channel.send(embed)
            //     db.subtract(`coins_${message.author.id}`, 7500)
            // } else if(args[0] === "3"){
            //     const embed = new MessageEmbed()
            //         .setTitle(message.member.user.tag)
            //         .setDescription(`
            //            Kot ci wpierdolił! Nie możesz używać komendy work przez 168 godzin!
            //          `)
            //         .setColor("GREEN")
            //     message.channel.send(embed)
            //     db.subtract(`coins_${message.author.id}`, 100)
            // }
        }
    }
}