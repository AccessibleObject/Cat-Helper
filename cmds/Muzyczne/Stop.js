const ytdl = require("ytdl-core")

module.exports = {
  name: "stop",
  async run (client, message, args, MessageEmbed, db) {
     
    const embed1 = new MessageEmbed()
    .setTitle(message.member.user.tag)
    .setDescription("Musisz byc na kanale glosowym!")
    .setColor("RED")

		const { channel } = message.member.voice;
		if (!channel) return message.channel.send(embed1);
		const serverQueue = message.client.queue.get(message.guild.id);
    const embed2 = new MessageEmbed()
    .setTitle(message.member.user.tag)
    .setDescription("Nie grasz nic abym mogl zastopowac")
    .setColor("RED")
		if (!serverQueue) return message.channel.send(embed2);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Wykonano pomyslnie!');

const stopped = new MessageEmbed()
.setTitle(message.member.user.tag)
.setColor("GREEN")
.setDescription("Zatrzymano muzyke!")

message.channel.send(stopped)

  }
}