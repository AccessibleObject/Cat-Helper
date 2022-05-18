const shortid = require("shortid")

module.exports = {
  name: "warn",
  async run(client, message, args, MessageEmbed, db) {
    var prefix = db.get(`prefix_${message.guild.id}`);
        if(!message.member.hasPermission('KICK_MEMBERS')){
          const embed = new MessageEmbed()
          .setTitle(message.member.user.tag)
          .setDescription(`Nie posiadasz permisji aby wykonać to polecenie!`)
          .setColor("RED")
          message.channel.send(embed);
        }

        let target = message.guild.member(message.mentions.users.first());

        let reason = args.splice(1).join(" ")

        if(message.member.hasPermission("KICK_MEMBERS")){
          if(!target || !reason){
            const embed = new MessageEmbed()
            .setTitle(message.member.user.tag)
            .setDescription(`Poprawne użycie: warn @[kto] [za co]`)
            .setColor("RED")
             message.channel.send(embed);  
          }
          
          if(target){
            if(reason){
              var caseid = shortid.generate();

              let warn = db.fetch(`warn_${message.guild.id}_${caseid}`);
      
              const moment = require("moment");
              const at = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
              if(warn === null) warn = 0;
              db.set(`warned_${message.guild.id}_${caseid}.by`, message.author.tag);
              db.set(`warned_${message.guild.id}_${caseid}.caseid`, caseid);
              db.set(`warned_${message.guild.id}_${caseid}.linkedto`, target.user.tag)
              db.set(`warned_${message.guild.id}_${caseid}.reason`, reason);
              db.set(`warned_${message.guild.id}_${caseid}.at`, at);
              db.add(`usercases_${message.guild.id}_${target.user.id}`, 1)
              db.push(`casesids_${message.guild.id}`, caseid)
      
              const CaseAdded = new MessageEmbed()
              CaseAdded.setTitle(message.member.user.tag);
              CaseAdded.setDescription(`**${target.user.tag}** otrzymał ostrzeżenie od **${message.author.tag}**\n\n\
              **Informacje o warnie**\n\n:sparkles: ID: **${caseid}**\n
              :sparkles: Warn nadany: **${at}**\n:sparkles: Powód: **${reason}**\n\n
              Jest to **${db.fetch(`usercases_${message.guild.id}_${target.user.id}`)}** warn ${target.user.tag}`)
                  .setColor("RANDOM")
              message.channel.send(CaseAdded)
            }
          }
        }

      


       

    }

  }
