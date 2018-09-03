const Discord = require('discord.js');
const bot = new Discord.Client()
bot.login(process.env.TOKEN)
 
let p = '##'
let color = '#615172'
let bot_name = 'Volts'

bot.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
if(message.content.startsWith(p + `help`)) {
    const embed = new Discord.RichEmbed()
        .setTitle("Help for you.")
        .setColor(color)
        .setDescription('**Bot prefix - ' + p + '**')
        .addField('Fun', 'sukablet')
        .setFooter(bot_name) 
        .setTimestamp();
    message.channel.send({embed});
 
if(message.content.startsWith(p + 'presence')( {
  const pr = ['PLAYING', 'STREAMING', 'LISTENING', 'WATCHING']
  const type = args.shift()
  if(!type) return msg.reply(`Вы должны указать тип (${pr.join(' ')})`)
  if(!pr.includes(type)) {
    args.unshift(type)
    type = pr[0]
  }
  client.user.setActivity(args.join(' ') || '##help', {type})
}
});

