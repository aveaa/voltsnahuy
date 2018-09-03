const Discord = require('discord.js');
const bot = new Discord.Client()
bot.login(process.env.TOKEN)
 
let p = '##'
let color = '#615172'
let bot_name = 'Volts'

bot.on('message', message => {
  if(message.author.bot) return
  if(message.content.indexOf(client.p) !== 0) return
  let args = message.content.slice(client.p.length).trim().split(/ +/g)
  let cmd = args.shift().toLowerCase()

  try { let req = require(`./cmds/${cmd}.js`) }
  catch(e) { return console.log(e) }
}
});

