
const { RefreshableAuthProvider, StaticAuthProvider } = require('twitch-auth');
const { ChatClient } = require('twitch-chat-client');
require('dotenv').config();




const target = 'rhyezbot';



async function generalBerry() {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const accessToken = process.env.ACCESS_TOKEN;
    const refreshToken = process.env.REFRESH_TOKEN;
    const auth = new RefreshableAuthProvider(
        new StaticAuthProvider(clientId, accessToken),
        {
            clientSecret,
            refreshToken
        }
    );

    const chatClient = new ChatClient(auth, { channels: [target] });
    await chatClient.connect();

    const date = new Date();

    console.log(`Connected to twitch at ${date}`)

    chatClient.onMessage((channel, user, message, self) => {

        console.log(`
        USER 🧍: ${user}  ➡ 
        MESSAGE 💬: ${message} ➡ 
        CHANNEL 📺:  ${channel} ➡ 
        📆 ${date}`)


    switch(message) {
        case '!ping':
            chatClient.say(channel, 'pong');
            break;
        default:
            return
    }


    });

}

module.exports = {generalBerry};