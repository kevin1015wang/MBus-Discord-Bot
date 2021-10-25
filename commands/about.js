const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Gives information on the bot.'),
	async execute(interaction) {
        const embed = new MessageEmbed()
			.setColor('#FBCE33')
			.setAuthor('Hi everyone! 👋', 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png')
			.setDescription('I\'m a bot created by Kevin to help you wait less at the Baits and Bursley stops!\n\nMy data is from the University of Michigan\’s Logistics, Transportation & Parking stop times table. Drivers are required to follow those schedules as close as they can, but sometimes buses can run late or early. So, I recommend giving yourself **4 minutes** of extra time at the stops. I\'ll also warn you if you should be at the stop.\n\nSince I don\’t get any data from the buses themselves, I cannot guarantee the stop times accuracy, but hopefully they\’ll give you a general idea of when the bus will arrive. \n\nGo ahead and type `!bus` for the next stop times or `!help` for help on other commands. I\’m not just a bus schedule!\n\nLooking forward to helping you out!\n\nPS: I\'m still a work in progress so do tell Kevin of any issues! 👍')
            .setFooter('Feel free to contact Kevin with comments or questions.')

		await interaction.reply({ ephemeral: true, embeds: [embed] });
	},
};