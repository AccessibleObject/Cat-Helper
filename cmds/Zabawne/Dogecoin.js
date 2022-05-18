// Cat Helper Source Code
// ver. 2.10.2 - Discord.js v12

module.exports = {
  name: "doge",
  async run(client, message, args, MessageEmbed, db){
    let dogecoin = new MessageEmbed()
    .setTitle("DOGECOIN TO THE MOOOOOOON")
    .setThumbnail("https://i.ytimg.com/vi/s3NWyh8a5t0/maxresdefault.jpg")
    .setColor("YELLOW")
    .setDescription(`
What is the only crypto currency that you should invest? Dogecoin!
It’s the peolpes currency, you know it’s the best. Please mine!
The most fun and ironic crypto that is for sure. So crypto!
We’re taking dogecoin to the moon! To the moon!


And if a broker says: „Listen, you can’t get rich with dogecoin“. Say: „Stonks“!
But even daddy Elon knows it’s the time to join. Much fun!
Cause faith loves ironie, therefore we’re passing bitcoin soon
Elon! Gene! Snoop! Take this little puppie to the moon!


Hold it, hold it, hold it, hold it, never sell! Much rich!
Buy more, buy more, buy more, buy more, it’s doing well! Such high!
Hold it, hold it, hold it, hold it, never sell! Much value!
Rising, rising, rising, rising, I can tell! Very trading!


Shut up and take my money, this meme coin is looking funny
Let’s write history together! In doge we trust! Much trust!
Jump on the hypetrain bro’s, cause even Snoop Doge knows
It’s going up, don’t drop it when it’s hot! Hot Hot!


Doge is the only crypto currency that you should invest? Dogecoin!
It’s the peolpes currency, you know it’s the best. Please mine!
The most fun and ironic crypto that is for sure. So crypto!
We’re taking dogecoin to the moon!

Dogecoin to the moon!
Dogecoin to the moon!
Dogecoin to the moon!
Dogecoin to the… moon!
…and beyond
`)



message.channel.send(dogecoin)
  }
}