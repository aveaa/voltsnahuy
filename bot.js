const Discord = require(`discord.js`);
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
  
 if (['eval', 'евал'].includes(command) && ['406343162651738112', '341988428457705482'].includes(msg.author.id)) {
    var code = args.join(' ');
    try {
      let evaled = eval(code);
      if (!code) {
        return msg.channel.send('For eval code im need code.');
      }
      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled)
        var embed = new Discord.RichEmbed()
          .setTitle(`Evaled`)
          .setColor('0x4f351')
          .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
        msg.channel.send({embed});
    } catch (err) {
      var embed = new Discord.RichEmbed()
        .setTitle('Eval error')
        .setColor('0xff0202')
        .setDescription(`📥 Input: \n \`\`\`${code}\`\`\`\n 📤 Output:\n  \`\`\`${(err)}\`\`\``)
      msg.channel.send({embed});
}
})});
