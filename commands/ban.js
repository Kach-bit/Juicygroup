const { permissions } = require('discord.js');


module.exports = {
    name: 'ban',
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "This is the ban command!",
    execute(message, args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('You couldnt ban that member');
        }
    }
}