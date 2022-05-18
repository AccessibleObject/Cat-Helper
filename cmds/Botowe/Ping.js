module.exports = {
  name: "ping",
  description: "Pokazuje ping bota",
  async run (client, message, args, MessageEmbed, db) {
    const m = Date.now() - message.createdTimestamp
    const u = new MessageEmbed()
    .setTitle(message.member.user.tag)
    .setDescription('Ping bota (WebSocket): ```' + client.ws.ping + " ms```\nPing bota (Message latency): ```" + m + " ms```")
    .setColor("GREEN")
  
    const embed = new MessageEmbed()
    .setTitle(message.member.user.tag)
    .setDescription(`Pobieram ping...`)
    .setColor("RED")
    let x = await message.channel.send(embed)
    x.edit(u)
  
    

  }
}