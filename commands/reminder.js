const ms = require('ms')

module.exports = {
    name: "remind",
    category: "utility",
    aliases: ["reminder", "rem"],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description:{
        usage: "remind <time> <reminder>",
        content:  "Helps remind you something",
    },
    async execute(message, args, cmd, client, Discord) {
        let time = args[0];
        //let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Please specify the time!**`)

        const wrongtime = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Sorry I only do d, m, h, or s.**`)

        const reminderembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Please tell me what you want to be reminded off**`)

        if (!args[0]) return message.channel.send(notime)
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.channel.send(wrongtime)
        if (!reminder) return message.channel.send(reminderembed)

       /* const remindertime = new Discord.MessageEmbed()
        .setColor('#33F304')
        .setDescription(`\**Your reminder will go off in ${time}**`)

        message.channel.send(remindertime)*/

        const reminderdm = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**REMINDER**')
        .setDescription(`**It has been ${time} here is your reminder:** ${reminder}`)  

        setTimeout(async function () {
           try{

            await message.channel.send(reminderdm)
            message.delete();

           }catch(err){

           } 
           
        }, ms(time));
    }
}