require('dotenv').config();
const { ChatClient } = require('@twurple/chat');
const { TARGET } = require('./data/target');


const discordLink = 'https://discord.gg/pfZ6dH5KVy'



async function periodicBerry (authProvider) {
  

    const chatClient = new ChatClient({ authProvider, channels: [TARGET] });

    await chatClient.connect()
    console.log('Periodic Berry is running.....')
    
    setInterval(() => {
        chatClient.say(TARGET, `Dont forget to join the discord server Beatz n' Berrii's!! ${discordLink}. Cool People and Good Music`)
    }, 600000); // 10 minutes

    setInterval(() => {
        chatClient.say(TARGET, 'Use !queue to see your place in the review queue!')
    }, 900000); // 15 minutes

    setInterval(() => {
        chatClient.say(TARGET, `Use !help for a list of commands from Berry Bot!`)
    }, 1200000); // 20 minutes

}

module.exports = {periodicBerry};

