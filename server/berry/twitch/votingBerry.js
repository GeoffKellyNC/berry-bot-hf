
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
        chatClient.say(TARGET, 'Voting has Started! ');
        
        
    })

    let votes = [];
    let voted = [];
    const bangerScores = ['420'];

    chatClient.onMessage( async (channel, user, message, self) => {
        const host = channel.substring(1)
        const authUsers = [host, 'rhyezbot', 'xberrybot', 'rhyeznc']

        if ((message >= 1 && message <= 10) || bangerScores.includes(message)) {
            if (!voted.includes(user)) {
                if(message === '420'){
                    chatClient.say(channel, `Ayeeeee @${user} You already know what time it is!!! Take a dab `)
                }else{
                    votes.push(message)
                    voted.push(user)
                    chatClient.say(channel, `@${user} has voted for ${message}`)
                    console.log("Voted List: ", votes)
                }
            } else {
                chatClient.say(channel, `@${user} you have already voted`)
            }
        }
        if (message === '!endvote') {
            if(authUsers.includes(user)){
                const average = getAverage(votes)
                chatClient.say(channel, ` Voting Ended! Banger Score:  ${average.toFixed(2)}`)
                voted = [];
                votes = [];
            }else{
                chatClient.say(channel, `@${user} you are not authorized to end the vote`)
            }
            setTimeout(() => {
                chatClient.reconnect()
                console.log('Re connected....')
            }, 2000);
        }


    })

}

function getAverage(arr) {
    console.log("arr ", arr)
    return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0) / arr.length
}

module.exports = {votingBerry};