const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const ytdl = require("ytdl-core");
const description = "Playing!";
const fs = require('fs');
const mongoose = require("mongoose");



client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {

    require(`./handlers/${handler}`)(client, Discord);
    

});

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    userUnifiedTopology: true,
    userFindAndModify: false
}).then(() => {
    console.log('connected to the database!')
}).catch((err) => {
    console.log(err);
});

client.on('ready', () => {

    client.user.setActivity('with your juicy');

});



client.login(process.env.DISCORD_TOKEN);