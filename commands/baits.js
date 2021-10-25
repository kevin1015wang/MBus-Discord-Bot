const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('baits')
		.setDescription('When the next bus arrives at Baits.'),
	async execute(interaction) {

        //Warning message
        warning = '';

        const response = await fetch('https://mbus.ltp.umich.edu/bustime/api/v3/getpredictions?key=mrBJV8guVpvDc4FvtQ2xHhBjY&stpid=N409&format=json');
        const data = await response.json();

        wait = data['bustime-response']['prd'][0]['prdctdn'];
            
            //Embed

            if (wait <= 4) {
                warning = '\n\n⚠️ I recommend getting to the bus stop **now.**'
            }

            //Comment2

            const arrival = new MessageEmbed()
			    .setColor('#FBCE33')
			    .setAuthor('Next Bus', 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png')
			    .setDescription('Hi ' + `${interaction.user.username}` + '! 👋\n\nThe next bus will arrive at the stop in: \n**Baits II: ** `' + wait + '` minute(s)' + '\n' + warning)
                .setFooter('All stop times approximate. Data from UMich BusTime API.')
            
            await interaction.reply({ ephemeral: true, embeds: [arrival] });
            
	},
};