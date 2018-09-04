const Discord = require(`discord.js`);
const req = require('snekfetch')
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
//Let
let p ='##';
let color = '#615172';
let bot_name = "Volts";
//end Let
//Log
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `##help`, type: 0 } }).catch();
});
bot.on('ready', () => {
    console.log("<---->Я готов<---->")
    console.log(`Я на ${bot.guilds.size} серверах`)
    console.log(`Каналов/категорий ${bot.channels.size}`)
    console.log(`Юзеров ${bot.users.size}`)
    console.log(`<---->Бот<---->`)
    console.log(`Название бота ${bot.user.username}`)
    console.log(`Айди бота: ${bot.user.id}`)
    console.log("<----------------->");
//end Log
bot.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(message.content.startsWith(p + `help`)) {
    const embed = new Discord.RichEmbed()
        .setTitle("Help you")
        .setColor(color)
        .setDescription('**Bot prefix - ' + p + '**' + '\n\n ##help - All commands\n##hug - hug other user')
        .setFooter(bot_name) 
        .setTimestamp();
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'hug')
    var page = req.get('https://nekos.life/api/v2/img/hug')	
    const embed = new Discord.RichEmbed()	
      .setTitle(`${message.author.tag} hug vоid`)	
      .setImage(page.body.url)	
      .setColor('FFFFFF')
})});
