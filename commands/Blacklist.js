const db = require("quick.db");
const { MessageEmbed } = require('discord.js');//require the packages

module.exports = {
    name: 'blacklist',
    category: 'Dev',
    description: 'Blacklists a user from using the bot',
    aliases: ['block'],
    cooldown: 0,
    usage: 'blacklist <@user>',
    execute: async (message, args, cmd, client, Discord, text, prefix) => { //change all this previous lines to your normal parameters
        if(message.author.id != 324984925499555841) return message.channel.send("This can only be ran by the bot owner!") //add your id without quotes
    
        let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else if (args[0]) {
          user = message.guild.members.cache.get(args[0]).user;
        } 
        
        if(!user) return message.channel.send("You forgot to specify a user!")
        let blacklist = db.get(`blacklist_${user.id}`)
  
        if(blacklist === null) {
            db.set(`blacklist_${user.id}`, 1);
        const embed = new MessageEmbed()
        .setAuthor('Hype', client.user.displayAvatarURL())
        .setTitle('Blacklisted!')
        .setDescription('Damn, It looks like you have been blacklisted from the bot... sad')
        .setTimestamp()
        user.send(embed)

        message.channel.send(`${user} is now blacklisted`)
        } else if(blacklist !== null) {
            message.channel.send(`That person is already blacklisted!`)
        } return;
    }
}