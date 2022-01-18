const ms = require('ms');
const { permissions } = require('discord.js');

module.exports = {
    name: 'mute',
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "This is the mutes command!",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainrole = message.guild.roles.cache.find(role => role.name === 'Member');
            let mutedrole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);
            if(!args[1]){
                memberTarget.roles.remove(mainrole.id);
                memberTarget.roles.add(mutedrole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainrole.id);
            memberTarget.roles.add(mutedrole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function(){
                memberTarget.roles.remove(mutedrole.id);
                memberTarget.roles.add(mainrole.id);
               
            }, ms(args[1]));
        }else{
            message.channel.send('Cant find that member!');
        }
    }
}