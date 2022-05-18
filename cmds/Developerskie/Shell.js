module.exports = {
  name: "shell",
  async run (client, message, args, MessageEmbed) {
     if(message.author.id !== "565790986777657345"){
      const embed = new MessageEmbed()
      .setTitle( message.member.user.tag)
      .setDescription("Nie posiadasz permisji `cathelper.global.developer` aby wykonać komende `shell`!")
      .setColor("RANDOM")
      message.channel.send(embed)
    }
    

    if(message.author.id == "565790986777657345"){
      const { exec } = require('child_process');
      exec(args.join(" "), (error, stdout, stderr) => {
        const embed = new MessageEmbed()
      .setTitle( message.member.user.tag)
      .setDescription(stdout)
      .setColor("RANDOM")
      message.channel.send(embed)
      });
   
    }
    
  }
}