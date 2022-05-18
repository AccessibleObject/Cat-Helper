const ytdl = require("ytdl-core")

module.exports = {
  name: "skip",
  async run (client, message, args, MessageEmbed, db) {
    const { channel } = message.member.voice;
    const embed1 = new MessageEmbed()
    .setTitle(message.member.user.tag)
    .setDescription("Musisz byc na kanale glosowym!")
    .setColor("RED")
      if (!channel) return message.channel.send(embed1);
      const serverQueue = message.client.queue.get(message.guild.id);
      const embed2 = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription('Nie ma nic co moge zagracw kociej kolejce!.')
      .setColor("RED")
      if (!serverQueue) return message.channel.send(embed2);
  
      serverQueue.connection.dispatcher.end('Polecenie wykonane');

  }
}