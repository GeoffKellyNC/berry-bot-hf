
const { promises } = require('fs');
const { RefreshableAuthProvider, StaticAuthProvider } = require('twitch-auth');
const { ChatClient } = require('twitch-chat-client');
const fs = promises;


const target = process.env.TARGET;



async function main() {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const tokenData = JSON.parse(await fs.readFile('./tokens.json', 'UTF-8'));
    const auth = new RefreshableAuthProvider(
        new StaticAuthProvider(clientId, tokenData.accessToken),
        {
            clientSecret,
            refreshToken: tokenData.refreshToken,
            expiry: tokenData.expiryTimestamp === null ? null : new Date(tokenData.expiryTimestamp),
            onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
                const newTokenData = {
                    accessToken,
                    refreshToken,
                    expiryTimestamp: expiryDate === null ? null : expiryDate.getTime()
                };
                await fs.writeFile('./tokens.json', JSON.stringify(newTokenData, null, 4), 'UTF-8')
            }
        }
    );

    const chatClient = new ChatClient(auth, { channels: [target] });
    await chatClient.connect();

    const date = new Date();

    console.log(`Connected to twitch at ${date}`)
}
main();