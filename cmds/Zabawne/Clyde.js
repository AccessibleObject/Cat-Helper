const axios = require("axios");
module.exports = {
    name: "clyde",
    async run (client, message, args, MessageEmbed, db ) {
        const wiadomosc = args.splice(0).join(` `)
        if (!wiadomosc) {
            const embed = new MessageEmbed()
            await embed
                .setTitle(message.member.user.tag)
                .setColor("RED")
                .setDescription(`Poprawne użycie: clyde [tekst]`)
            message.channel.send(embed)
        }
        else {
            if (!(wiadomosc.includes(`ł`) || wiadomosc.includes(`ó`) || wiadomosc.includes(`ż`) || wiadomosc.includes(`ź`) || wiadomosc.includes(`ć`) || wiadomosc.includes(`ń`) || wiadomosc.includes(`ą`) || wiadomosc.includes(`ś`) || wiadomosc.includes(`ę`))) {
                const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${wiadomosc}`
                let data, response;
                try {
                    response = await axios.get(url);
                    data = response.data;
                } catch (e) { }
                const embed = new MessageEmbed()
                await embed
                    .setTitle(`Clyde!`)
                    .setColor("RED")
                    .setImage(data.message)
                message.channel.send(embed)
            }
            else {
                const embed = new MessageEmbed()
                await embed
                    .setTitle(message.member.user.tag)
                    .setColor("RED")
                    .setDescription(` Wiadomość nie może zawierać polskich znaków!`)
                message.channel.send(embed)
            }
        }
    }
}