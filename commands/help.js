module.exports = {
	name: 'help',
	description: 'Announces the announcement. **Dev+ only.**',
	execute(message) {
			message.channel.send({embed: {
				color: 15844367,
				author: {
					name: 'Help',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: '`!bus\n!help\n!8ball [question]\n!about\n!rate [thing]\n!serverinfo\n!mcard`',
			} });
		


	},
};