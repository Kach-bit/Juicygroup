const profileModel = require("../../models/profileShema");


/*module.exports = (Discord, client, message) => {
    
    let WelcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(WelcomeRole);
    guildMember.guild.channels.cache.get('845632656896032779').send(`Welcome <@${guildMember.user.id} to the server! Make sure to check out the rules!`)

}*/

module.exports = async(Discord, client, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0

    });

    profile.save();
}