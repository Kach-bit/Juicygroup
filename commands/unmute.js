const { permissions } = require('discord.js');


module.exports = {
    name: 'unmute',
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "This is the unmutes command!",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainrole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muterole = message.guild.roles.cache.find(role => role.name === 'Mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muterole.id);
            memberTarget.roles.add(mainrole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        }else{
            message.channel.send('Cant find that member!');
        }
    }
}