const fs = require('fs');

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        const event_file = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of event_file){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client));
        }
    }
    ['client', 'guild'].forEach(e => load_dir(e));
}