const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  aliases: ['8', '8b'],
  permissions: [],
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(message, args, cmd, client, Discord) {
    if (!args[0]) return message.channel.send('Please ask a full question!');
    const replies = ['Yes.',
      'Never.',
      'Definitely.',
      'Ask again later.',
      'Yes, but do it drunk as fuck.',
      'My sources say no, but they also said hillary would win.',
      'Do what jesus would do, die at age of 33.',
      'Trump uses me when deciding to go to war', 'I am sleeping with Curiis girlfriend.',
      'I am a talking ball you retard, go ask your mum instead!',
      'Can you tell Curii to suck a big fat one like the dirty slut that he is?',
      'Josh cant sing sadly even though hes trying so fucking hard'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');

    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed()
        .setAuthor('🎱 The 8 Ball says...')
        .setColor('RANDOM').addField('Question:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed);
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`);
    }//anyway, imma stop cause i've been at this for 6 hours apparently 
  },
};

