const { permissions } = require('discord.js');


module.exports = {
    name: 'unban',
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "This is the unban command!",
    execute(message, args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.unban();
            message.channel.send("User has been unbanned");
        }else{
            message.channel.send('You couldnt unban that member');
        }
    }
}