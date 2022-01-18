const { permissions } = require('discord.js');


module.exports = {
    name: 'kick',
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "This is the kick command!",
    execute(message, args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You couldnt kick that member');
        }
    }
}