var Discord = require(`discord.js`)
var bot = new Discord.Client();
bot.login(process.env.TOKEN)
//Let
var p ='##';
var color = '#615172';
var bot_name = "Volts";
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
    let args = message.content.slice(p.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
  
 if (['eval', 'евал'].includes(command) && ['406343162651738112', '341988428457705482'].includes(msg.author.id)) {
    let code = args.join(' ');
    try {
      let evaled = eval(code);
      if (!code) {
        return message.channel.send('For eval code im need code.');
      }
      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled)
        let embed = new Discord.RichEmbed()
          .setTitle(`Evaled`)
          .setColor('0x4f351')
          .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
        message.channel.send({embed});
    } catch (err) {
      let embed = new Discord.RichEmbed()
        .setTitle('Eval error')
        .setColor('0xff0202')
        .setDescription(`📥 Input: \n \`\`\`${code}\`\`\`\n 📤 Output:\n  \`\`\`${(err)}\`\`\``)
      message.channel.send({embed});
}
});
