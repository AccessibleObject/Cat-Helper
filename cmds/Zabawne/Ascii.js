const { MessageFlags } = require('discord.js');
const figlet = require('figlet')

module.exports = {
  name: "ascii",
  async run (client, message, args, MessageEmbed, db) {
    
    const ms = args.slice(0).join(" ");

    if(!ms){
      const embed = new MessageEmbed()
      .setTitle(message.member.user.tag)
      .setDescription(`Poprawne użycie: ascii [tekst]`)
      .setColor("RED")
      message.channel.send(embed)
    }
    if(ms){
      figlet(ms, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription('```' + data + '```')
        .setColor("RED")
        message.channel.send(embed)
  
      })
      
    }

    
  }
}