const tmi = require('tmi.js');
require('dotenv').config();


const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'xberrybot',
		password: 'oauth:4itmfoj1xdfcwyl5ihq76xr2ywkx5t'
	},
	channels: [ 'xberrybot' ]
});

client.connect();
console.log(process.env)

client.on('connected', (address, port) => {
    console.log(`Address: ${address} Port: ${port}`);
    client.say('xberrybot', 'Connected to Twitch!');
});

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});
