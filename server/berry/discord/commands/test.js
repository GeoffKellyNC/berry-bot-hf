const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Dev Test command...'),
	async execute(interaction) {
		await interaction.reply('Test is still Working!!');
	},
};