const slotItems = [":grapes:", ":watermelon:", "🍊", ":apple:", ":slot_machine:", ":strawberry:", ":cherries:"];
module.exports = {
    name: "slots",
    async run (client, message, args, MessageEmbed, db) {
        let user = message.author;

        let moneydb = await db.fetch(`coins_${user.id}`)

        let money = parseInt(args[0]);

        let win = false;

        let moneymore = new MessageEmbed()
            .setTitle(message.member.user.tag)
            .setColor("#FFFFFF")
            .setDescription(`Nie posiadasz tyle pieniędzy`);

        let moneyhelp = new MessageEmbed()
            .setTitle(message.member.user.tag)
            .setColor("#FFFFFF")
            .setDescription(`Podaj liczbe coinów`);

        if (!money) return message.channel.send(moneyhelp);
        if (money > moneydb) return message.channel.send(moneymore);

        let number = []
        for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

        if (number[0] == number[1] && number[1] == number[2]) {
            money *= 9
            win = true;
        } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
            money *= 2
            win = true;
        }
        if (win) {
            let slotsEmbed1 = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nWygrałeś: ${money} :coin:!`)
                .setColor("#FFFFFF")
            message.channel.send(slotsEmbed1)
            await db.add(`coins_${user.id}`, money)
        } else {
            let slotsEmbed = new MessageEmbed()
                .setTitle(message.member.user.tag)
                .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nPrzegrałeś: ${money} :coin:!`)
                .setColor("#FFFFFF")
            message.channel.send(slotsEmbed)
            await db.subtract(`coins_${user.id}`, money)
        }

    }
}