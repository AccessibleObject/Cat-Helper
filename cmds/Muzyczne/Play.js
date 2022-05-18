const { Util } = require("discord.js");
const ytdl = require("ytdl-core")

module.exports = {
  name: "play",
  async run (client, message, args, MessageEmbed, db) {
    const embed1 = new MessageEmbed()
.setTitle(message.member.user.tag)
.setDescription(`Musisz być na kanale głosowym!`)
.setColor("RED")

const embed2 = new MessageEmbed()
.setTitle(message.member.user.tag)
.setDescription(`Poprawne uzycie: play [link]`)
.setColor("RED")

const embed4 = new MessageEmbed()
.setTitle(message.member.user.tag)
.setDescription(`Dodano do kolejki`)
.setColor("RED")

    const { channel } = message.member.voice;
		if (!channel) return message.channel.send(embed1);
		const permissions = channel.permissionsFor(message.client.user);

    if(channel){
      const songd = args[0];
      if(!songd){
        message.channel.send(embed2)
      }
      if(songd){
        const serverQueue = message.client.queue.get(message.guild.id);
		  const songInfo = await ytdl.getInfo(args[0])
		  const song = {
			  id: songInfo.videoDetails.video_id,
			  title: Util.escapeMarkdown(songInfo.videoDetails.title),
			  url: songInfo.videoDetails.video_url
		  };
      if (serverQueue) {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        return message.channel.send(embed4);
      }
  
      const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: channel,
        connection: null,
        songs: [],
        volume: 2,
        playing: true
      };
      message.client.queue.set(message.guild.id, queueConstruct);
      queueConstruct.songs.push(song);
  
      const play = async song => {
        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
          queue.voiceChannel.leave();
          message.client.queue.delete(message.guild.id);
          return;
        }
        const dispatcher = queue.connection.play(ytdl(song.url))
				.on('finish', () => {
					queue.songs.shift();
					play(queue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
      const embed3 = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Gram ${song.title}`)
      .setColor("RED")
  
    queue.textChannel.send(embed3);
  };

  try {
    const connection = await channel.join();
    queueConstruct.connection = connection;
    play(queueConstruct.songs[0]);
  } catch (error) {
    console.error(`err: ${error}`);
    message.client.queue.delete(message.guild.id);
    await channel.leave();
    const embed6 = new Discord.MessageEmbed()
    .setDescription(`Blad: ${error}`)
    .setColor("RED")
    return message.channel.send(embed6);
  }
  } 
      }
    }

  }
  