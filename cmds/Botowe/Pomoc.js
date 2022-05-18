const { readdirSync } = require("fs")
module.exports = {
  name: "pomoc",
  aliases: ["help"],
  async run (client, message, args, MessageEmbed, db) {
    var prefix = db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = "c."
    const embed = new MessageEmbed()

    if(!args[0]) {
      const embed = new MessageEmbed()
    .setTitle(message.member.user.tag)
    .setColor("RANDOM")
    .setDescription(`
    <a:strzalka:851028144663167007> • Cześć! Jestem Cat Helper! Obecnie posiadam **${client.commands.size}** komend!
    <a:strzalka:851028144663167007> • Mój prefix dla tego serwera: **${prefix}**

    Lista moich poleceń:

    <:developer:850405812471332864> • Polecenia developerskie
    \`eval, blacklist, blacklist-remove, update, shell\`

    <:staff:850777389051019274> • Polecenia moderacyjne 
    \`ankieta, ban, case-info, clear, kick, slowmode, unban, warn\`

    :robot: • Bolecenia botowe 
    \`botinfo, ping, pomoc, zgłoś-błąd\`

    :heavy_dollar_sign: • Polecenia ekonomii globalnej 
    \`work, rob, add-money, daily, remove-money, slots, sklep\` 

    :musical_note: • Polecenia muzyczne 
    \`play, skip, stop\`

    :busts_in_silhouette: • Polecenia praktyczne 
    \`userinfo, serverinfo\`

    :joy_cat: • Polecenia 4-FUN
    \`ascii, clyde, doge, mchead, mcserver, reverse\`
    

    `)
    message.channel.send(embed)
    }
    // if(args[0] === 'mod' || args[0] === 'moderacyjne') {
    //   const embed = new MessageEmbed()
    // .setTitle(message.member.user.tag)
    // .setColor("RANDOM")
    // .setDescription(`Komendy moderacyjne bota cat helper
    
    // Ban: ${prefix}ban @Użytkownik Powód - Banujesz użytkownika
    // Kick: ${prefix}kick @Użytkownik Powód - Wyrzucasz użytkownika
    // Ankieta: ${prefix}ankieta Treść - Tworzysz ankiete
    // Warn: ${prefix}warn @Użytkownik Powód - Ostrzegasz użytkownika
    // Case-Info: ${prefix}case-info ID - Sprawdzasz informacje o warnie
    // Clear: ${prefix} clear Ilość - Czyści podaną liczbe wiadomości
    // Slowmode: ${prefix}slowmode Czas (w sekundach) - Ustawia slowmode na podany czas
    // Mute: ${prefix}mute Użytkownik Powód - Wycisza użytkownika
    // `)
    // message.channel.send(embed)
    // }
    // if(args[0] === 'bot'){
    //   const embed = new MessageEmbed()
    // .setTitle(message.member.user.tag)
    // .setColor("RANDOM")
    // .setDescription(`Komendy bota cat helper
    
    // Zgłoś-Błąd: ${prefix}zgłoś-błąd Treść - zgłasza błąd
    // BotInfo: ${prefix}botinfo - Wyświetla informacje o bocie
    // Ping: ${prefix}ping - Wyświetla ping bota
    // `)
    // message.channel.send(embed)
    // }
    // if(args[0] === 'dev') {
    //   const embed = new MessageEmbed()
    // .setTitle(message.member.user.tag)
    // .setColor("RANDOM")
    // .setDescription(`Komendy developerskie bota cat helper
    
    // Eval: ${prefix}eval Kod - wywołuje podany kod
    // Update: ${prefix}update - Aktualizuje paczki
    // Blacklist: ${prefix}blacklist ID - Nadaje blackliste
    // Blacklist: ${prefix}blacklist-remove ID - Usuwa blackliste
    // `)
    // message.channel.send(embed)
    // }
    // if(args[0] === 'music'){
    //   const embed = new MessageEmbed()
    // .setTitle(message.member.user.tag)
    // .setColor("RANDOM")
    // .setDescription(`Komendy muzyczne bota cat helper
    
    // Play: ${prefix}play Link - gra podaną muzyke
    // Stop: ${prefix}stop - Zatrzymuje muzyke
    // Skip: ${prefix}skip - gra następny utwór w kolejce
    // `)
    // message.channel.send(embed)
    // }
    // if(args[0] === 'guild') {
    //   const embed = new MessageEmbed()
    //   .setTitle(message.member.user.tag)
    //   .setColor("RANDOM")
    //   .setDescription(`Komendy serwerowe bota cat helper
      
    //   Prefix: ${prefix}prefix <Nowy prefix> - ustawia prefix na serwerze
    //   `)
    //   message.channel.send(embed)
    // }
    // if(args[0] === '4fun'){
    //   const embed = new MessageEmbed()
    // .setTitle(message.member.user.tag)
    // .setColor("RANDOM")
    // .setDescription(`Komendy zabawne bota cat helper
    
    // Ascii: ${prefix}ascii Tekst - wyświetla podany tekst w ascii
    // Doge: ${prefix}doge - Dogecoin to the mooon
    // Reverse: ${prefix}reverse Tekst - odwraca tekst

    // `)
    // message.channel.send(embed)
    // }
    // if(args[0] === 'imp'){
    //   const embed = new MessageEmbed()
    // .setTitle(message.member.user.tag)
    // .setColor("RANDOM")
    // .setDescription(`Komendy praktyczne bota cat helper
    
    // Brak
    // `)
    // message.channel.send(embed)
    // }

    // if(args[0] === 'eco'){
    //   const embed = new MessageEmbed()
    //       .setTitle(message.member.user.tag)
    //       .setColor("RANDOM")
    //       .setDescription(`Komendy ekonomii globalnej bota cat helper
    
    // Work: ${prefix}work - Pracujesz za kase
    // Slots: ${prefix}slots Liczba - grasz w kocim kasynie
    // Balance: ${prefix}balance - Pokazuje twój stan konta
    // Daily: ${prefix}daily - Dzienna wypłata
    // Rob: ${prefix}rob - Napadasz na bank
    // Sklep: ${prefix}sklep - Sklep
    
    // `)
    //   message.channel.send(embed)

    }
  }