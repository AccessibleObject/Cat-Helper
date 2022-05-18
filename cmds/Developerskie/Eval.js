const ms = require("ms")

module.exports = {
  name: "eval",
   run (client, message, args, MessageEmbed, db)  {
     if(message.author.id !== "565790986777657345"){
      const embed = new MessageEmbed()
      .setTitle( message.member.user.tag)
      .setDescription("Nie posiadasz permisji `cathelper.global.developer` aby wykonać komende `eval`!")
      .setColor("RANDOM")
      message.channel.send(embed)
    }
    const code = args.slice(0).join(" ")

    if(message.author.id == "565790986777657345"){

      if(!code){
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription(`Podaj kod`)
        .setColor("RANDOM")
        message.channel.send(embed)
      }
      if(code){
       try {
        let evaled = eval(code);
        const embed = new MessageEmbed()
        .setTitle(message.member.user.tag)
        .setDescription('Wprowadzony kod:``` ' + code + "```\nKod wyjściowy: ```" + evaled + "```\nTyp kodu wyjściowego: ```" +  typeof evaled + "```")
        .setColor("BLUE")
        message.channel.send(embed)
       }catch(k){
         const embed = new MessageEmbed()
         .setTitle(message.member.user.tag)
        .setDescription(`Błąd: ${k}`)
        .setColor("RED")
        .setFooter("jebać hakerskiego :: Pozdrawiam Kot")
        message.channel.send(embed)
       }
      }
      
   
    }
    
  }
}