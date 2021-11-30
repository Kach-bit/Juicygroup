const { permissions } = require('discord.js');


module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'sug'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, discord){
        const channel = message.guild.channels.cache.find(c => c.name === '❓guildsuggestions');
        if(!channel) return message.channel.send('The Suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) => {

            msg.react('848589631440027678');
            msg.react('332903545714114560');//332903545714114560

            message.delete();
        }).catch((err) => {
            throw err;
        });
    }

}