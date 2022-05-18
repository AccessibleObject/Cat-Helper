module.exports = {
  name: "update",
  async run (client, message, args, MessageEmbed) {
     if(message.author.id !== "565790986777657345"){
      const embed = new MessageEmbed()
      .setTitle( message.member.user.tag)
      .setDescription("Nie posiadasz permisji `cathelper.global.developer` aby wykonać komende `update`!")
      .setColor("RANDOM")
      message.channel.send(embed)
    }
    

    if(message.author.id == "565790986777657345"){
      const { exec } = require('child_process');
      exec('npm i', (error, stdout, stderr) => {
        const embed = new MessageEmbed()
      .setTitle( message.member.user.tag)
      .setDescription(`Aktualizacja paczek:\n ${stdout}`)
      .setColor("RANDOM")
      message.channel.send(embed)
      });
   
    }
    
  }
}