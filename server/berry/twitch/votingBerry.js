
// import { RefreshingAuthProvider } from '@twurple/auth';

const  { RefreshingAuthProvider } = require('@twurple/auth');

const { promises: fs } = require('fs');

const path = require('path');


const { ChatClient } = require('@twurple/chat');
require('dotenv').config();




 const TARGET = process.env.TARGET;







async function votingBerry() {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const tokenLocation = path.join(__dirname, 'tokens.json')
    const tokenData = JSON.parse(await fs.readFile(tokenLocation, 'utf8'));
    const authProvider = new RefreshingAuthProvider(
        {
            clientId,
            clientSecret,
            onRefresh: async newTokenData => await fs.writeFile(tokenLocation, JSON.stringify(newTokenData, null, 4), 'UTF-8')
        },
        tokenData
    );

    const chatClient = new ChatClient({ authProvider, channels: [TARGET] });
	await chatClient.connect();
    console.log('Voting Berry Connected');

    await chatClient.onRegister(() => { 
        chatClient.say(TARGET, 'Voting Func is working finally!');
    })


}

module.exports = {votingBerry};