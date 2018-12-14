const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522486253397082114")
setInterval(function() {
channel.send(`i need credit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
