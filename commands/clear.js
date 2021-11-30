const { permissions } = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ["cl", "delete", "c"],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Clear Messages!",
    async execute(message, args, cmd, client, Discord){
        if(!args[0]) return message.reply("Please Enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number, quit fucking with me!");

        if(args[0] > 100) return message.reply("You cannot to delete that amount of number!");
        if(args[0] < 1) return message.reply("You need to delete at least 1 message to use this command!");

    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);

    });
    }
}