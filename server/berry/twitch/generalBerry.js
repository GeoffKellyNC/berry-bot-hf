
// import { RefreshingAuthProvider } from '@twurple/auth';

const  { RefreshingAuthProvider } = require('@twurple/auth');

const { promises: fs } = require('fs');

const path = require('path');

const axios = require('axios');



const { ChatClient } = require('@twurple/chat');
require('dotenv').config();




const TARGET = process.env.TARGET;

const PINGS_URL = process.env.PINGS_URL

let pings

const getPings = () =>  {
        axios.get(PINGS_URL)
        .then(res => {
            console.log('getPings Res: ', res.data);
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
    console.log('General Berry Connected');


    chatClient.onMessage((channel, user, message) => {

        switch (message){
            case '!ping':
                getPings();
                chatClient.say(channel, 'pong ' + (pings.length + 1));
                addPing(user);
                break;
            default: 
                return
        }
    })


}
getPings()

module.exports = {generalBerry};