const { MessageFlags } = require("discord.js")

module.exports = {
  name: "botinfo",
  description: "Wyswietla informacje o bocie",
  async run (client, message, args, MessageEmbed, db) {

    let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60
    const embed = new MessageEmbed()
    .setTitle("Bot info")
    .addField(':desktop: Czas działania', `${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund`)
    .addField('<:mem:850454209337098251> Użycie pamięci RAM', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("<:developer:850405812471332864> Developer", `RuntimeException#0001`)
    .addField("<:check:850457070088224809> Wersja", "-1 GitHub")
    .addField(":mobile_phone: Ping bota", client.ws.ping + " ms")
    .addField("<:kot:845959444574765057> Serwery", client.guilds.cache.size)
    .setColor("GREEN")
    message.channel.send(embed)

  }
}
