module.exports = {
	name: 'serverinfo',
	description: 'Gives info about server',
	execute(message) {
		message.channel.send({ embed: {
			color: 15844367,
			author: {
				name: 'Server Info',
				icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
			},
			description: 'Server Name: `' + message.guild.name + '`\nMembers: ' + '`' + message.guild.memberCount + '`',
		} });


	},
};