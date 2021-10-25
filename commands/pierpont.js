const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pierpont')
		.setDescription('When the next buses arrive at Pierpont.'),
	async execute(interaction) {

        //Warning message
        warning = '';

		//Get Data for stop at bottom

        const response1 = await fetch('https://mbus.ltp.umich.edu/bustime/api/v3/getpredictions?key=mrBJV8guVpvDc4FvtQ2xHhBjY&stpid=N553&format=json');
        const stop1 = await response1.json();

        wait1 = stop1['bustime-response']['prd'][0]['prdctdn'];
		line1 = stop1['bustime-response']['prd'][0]['rt'];

		//Get Data for side stop

		const response2 = await fetch('https://mbus.ltp.umich.edu/bustime/api/v3/getpredictions?key=mrBJV8guVpvDc4FvtQ2xHhBjY&stpid=N551&format=json');
        const stop2 = await response2.json();

		wait2 = stop2['bustime-response']['prd'][0]['prdctdn'];
		line2 = stop2['bustime-response']['prd'][0]['rt'];

		//Get Data for stop to North

		const response3 = await fetch('https://mbus.ltp.umich.edu/bustime/api/v3/getpredictions?key=mrBJV8guVpvDc4FvtQ2xHhBjY&stpid=N550&format=json');
        const stop3 = await response3.json();

		wait3 = stop3['bustime-response']['prd'][0]['prdctdn'];
		line3 = stop3['bustime-response']['prd'][0]['rt'];

		wait4 = stop3['bustime-response']['prd'][1]['prdctdn'];
		line4 = stop3['bustime-response']['prd'][1]['rt'];

            //Comment2

            const arrival = new MessageEmbed()
			    .setColor('#FBCE33')
			    .setAuthor('Next Bus', 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png')
			    .setDescription('Hi ' + `${interaction.user.username}` + '! 👋\n\nHere will be the next buses at Pierpont:\n\n**Towards Central Campus:**\n\n**Bus 1:**\nRoute: `' + line1 + '`\nTime: `' + wait1 + '` minute(s)\n\n**Bus 2:**\nRoute: `' + line2 + '`\nTime: `' + wait2 + '` minute(s)\n\n' + '**Towards North Campus:**\n\n**Bus 1:**\nRoute: `' + line3 + '`\nTime: `' + wait3 + '` minute(s)\n\n**Bus 2:**\nRoute: `' + line4 + '`\nTime: `' + wait4 + '` minute(s)')
                .setFooter('All stop times approximate. Data from UMich BusTime API.')
            
            await interaction.reply({ ephemeral: true, embeds: [arrival] });
            
	},
};