
// import { RefreshingAuthProvider } from '@twurple/auth';

const  { RefreshingAuthProvider } = require('@twurple/auth');

const { promises: fs } = require('fs');

const path = require('path');

const axios = require('axios');

const { periodicBerry } = require('./periodicBerry');
const { killBerry } = require('./killBerry');

const { ChatClient } = require('@twurple/chat');
require('dotenv').config();

const { TARGET } = require('./data/target');




const PINGS_URL = process.env.PINGS_URL

const QUEUE_API = process.env.QUEUE_API

const discordLink = 'https://discord.gg/pfZ6dH5KVy'

console.log('TARGET:::::', TARGET)

let pings

const getPings = () =>  {
        axios.get(PINGS_URL)
        .then(res => {
            pings = res.data;
            return pings.length;
        })
        .catch(err => console.error(err) )
}

const addPing = (userName) => {
    return axios.post(PINGS_URL, {
        user: userName
    })
    .then(res => {
        const pings = res.data;
        return pings;
    }
    )
    .catch(err => console.error(err) )
}



async function generalBerry() {
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

    const date = new Date();

    console.log(`General Berry Connected at ${date}`)
    periodicBerry(authProvider);

    chatClient.onMessage( async (channel, user, message) => { 
        console.log(`
        USER 🧍: ${user}  ➡ 
        MESSAGE 💬: ${message} ➡ 
        CHANNEL 📺:  ${channel} ➡ 
        📆 ${date}`)

        switch (message){
            case '!ping':
                await getPings();
                await addPing(user);
                chatClient.say(channel, 'pong ' + (pings.length + 1));
                break;
                case '!help':
                    chatClient.say(channel, `@${user} Commands: !ping, !vote, !help, !discord, !points, !queue`)
                    break;
                case '!discord':
                    chatClient.say(channel, `@${user} Join our discord: ${discordLink}`)
                    break;
                case '!rules':
                    chatClient.say(channel, `Please follow the rules: https://www.twitch.tv/p/rules. Use !punishment for point information`)
                    break;
                case '!punishment':
                    chatClient.say(channel, `@${user} breaking the rules will earn you a point. Points can be used to get a punishment! So respect the rules please.`)
                    break;
                case '!submit':
                    chatClient.say(channel, `@${user} Join our Discord and send us your track in our #MUSIC channel ${discordLink}`)
                    break;
                case '!queue':
                    axios.get(QUEUE_API)
                    .then(res => {
                        let queue = res.data
                        const names = queue.map(user => user.user)
                        const numberedNames = names.map((name, index) => `${index + 1}. ${name}`)
                        chatClient.say(channel, `@${user} The queue is: ${numberedNames.join(' | ')}`)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    break;
                case '!yomama':
                    axios.get('https://yomomma-api.herokuapp.com/jokes')
                    .then(res => {
                        let yomama = res.data
                        chatClient.say(channel, `@${user} ${yomama.joke}`)
                    })
                    break;
                case '!killBerry':
                    if (user !== 'xberrybot') return
                    if (user === 'xberrybot'){
                        killBerry(chatClient);
                    }
                    break;
            default: 
                return
        }
    })
}
getPings()

module.exports = {generalBerry};