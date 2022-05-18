const { readdirSync } = require("fs")
const db = require("quick.db")
module.exports = (client) => {
  client.on("ready", () => {
    // let value = "<:developer:850776573258104864>"
    // db.push(`badges_565790986777657345`, value)
    // let value2 = "Developer (6)"
    // db.push(`group_565790986777657345`, value2)
     const statusArray = [
         `${client.commands.size} komend`,
         `Developer: Kot#6558`,
         `@Cat Helper`,
         'Domyślny prefix to \`c.\`',
     ]

    setInterval(() => {
        const index = Math.floor(Math.random() * (statusArray.length - 1) + 1)
      client.user.setActivity(`${statusArray[index]}`, { type: "LISTENING"})
    }, 6500)
    console.log("jestem i dzialam")  
  })

}
