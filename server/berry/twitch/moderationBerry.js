const  { RefreshingAuthProvider } = require('@twurple/auth');
const { promises: fs } = require('fs');
const { bannedWords } = require('./data/bannedWords');
const { ChatClient } = require('@twurple/chat');
require('dotenv').config();

const axios = require('axios');
const path = require('path');

const TARGET = 'hfernz';


 const POINTS_API = process.env.POINTS_API



 //--------- HELPER FUNCTIONS ---------//

 async function getPointsData() {
    const response = await axios.get(POINTS_API);
    return response.data;   
 }

 async function patchUserPoints(id, point) {
     await axios.patch(`${POINTS_API}/${id}`, {points: point})
         .then(console.log(`${id}'s points have been updated to ${point}`))
         .catch(err => console.log(err));
 }

 async function setUserPoints(obj) {
     const response = await axios.post(POINTS_API, obj).catch(err => console.log(err)); 
     return response.data;
 }

 async function moderationAction(channel,user, points, chatClient){
     console.log('Moderation Action');
     console.log('User: ' + user, 'Points: ' + points);
     if (points <= 3) return
     if(points > 5) {
          chatClient.say(channel,`@${user} has been timed!`);
         await chatClient.timeout(channel, user, 30, 'Berry Point Ban > 8');
         console.log(`${user} has been timedout!`);
     }
 }

 async function processMessage(user, message, pointsData, chatClient, channel) {
        try {
            if (bannedWords.some(word => message.includes(word))) {
                chatClient.say(channel, `@${user} Please watch your language`);
                const names = pointsData.map(user => user.user);
        
                if (names.includes(user)) {
                    const userObj = pointsData.find(obj => obj.user === user);
                    const userPoints = userObj.points;
                    const userId = userObj.id;
                    const assignedPoints = await assignPoints(message);
                    console.log('assignedPoints: ', assignedPoints);
                    const newPoints = userPoints + assignedPoints;
                    await patchUserPoints(userId, newPoints);
                    await moderationAction(channel, user, newPoints, chatClient);
                    const newPointsData = await getPointsData();
                    pointsData = newPointsData;
                    console.log("User: " + user + " Found! Points Updated");
                }
                
                if (!names.includes(user)) {
                    setUserPoints({user, points: 1});
                    const newPointsData = await getPointsData();
                    pointsData = newPointsData;
                    console.log("User Not Found! Points Added");
                }
            }
        } catch (err) {
            console.log(err);
        }
     
 }

 function assignPoints(message){
     const level_1_words = ['nigger', 'wetback', 'chink', 'homo', 'test']

     if (message.includes(level_1_words)) return 5

     if (!message.includes(level_1_words)) return 1
 }

 //---------------------------------------------------------------------------------------------------------------------//



 //----------- MAIN FUNCTION -----------//

 async function moderationBerry () {
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

    const chatClient = new ChatClient({ 
        authProvider, 
        channels: [TARGET]
     });
	await chatClient.connect();
    console.log('Moderation Berry Connected');

    let pointsData = await getPointsData();

    await chatClient.onRegister(() => { 
        chatClient.say(TARGET, 'Chat Moderation is active');
    })

    chatClient.onMessage( async (channel, user, message, self) => {
        await processMessage(user, message, pointsData, chatClient, channel)

    })
 }

 module.exports = {moderationBerry};