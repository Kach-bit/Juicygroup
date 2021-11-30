const { permissions } = require('discord.js');

module.exports = {
    name: 'command', 
    aliases: [],
    permissions: [],
    description: "Embeds!",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Rules')
        .setURL('https://Youtube.com')
        .setDescription('This is a embed for the server rules!')
        .addFields(
            {name:'Rule 1', value:'Be a degenerate'},
            {name:'Rule 2', value:'Be rude'},
            {name:'Rule 3', value:'Be homophobic'},
            



        )
        .setImage('https://cdn.discordapp.com/attachments/671710633242394647/915316375197716490/unknown.png')//will change
        .setFooter('Welcome to the JuicyZone!');
        
        message.channel.send(newEmbed);
    }

}