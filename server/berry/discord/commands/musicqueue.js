const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');







module.exports = {
    data: new SlashCommandBuilder()
        .setName('musicqueue')
        .setDescription('Display the current queue!'),
    async execute(interaction) {
            const response = await axios.get('https://6296b12957b625860611e8c6.mockapi.io/queue')
            console.log(response.data)
            let queue = response.data
            const names = queue.map(obj => obj.user)
            const numberedNames = names.map((name, index) => `${index + 1}. ${name}`)
            console.log('queue ', queue)
            console.log('names are: ', names)
            console.log('numberedNames ', numberedNames)
            await interaction.reply(`The queue is: ${numberedNames.join(' | ')}`)

    },
};