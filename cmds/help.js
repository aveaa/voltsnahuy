if(message.content.startsWith(p + `help`)) {
    const embed = new Discord.RichEmbed()
        .setTitle("Help for you.")
        .setColor(color)
        .setDescription('**Bot prefix - ' + p + '**')
        .addField('Fun', '##help - help for you.')
        .setFooter(bot_name) 
        .setTimestamp();
    message.channel.send({embed});
