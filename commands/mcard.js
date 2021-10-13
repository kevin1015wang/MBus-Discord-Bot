module.exports = {
	name: 'mcard',
	description: 'Discord mcard',
	execute(message) {
		message.channel.send({ embed: {
			color: 15844367,
			author: {
				name: 'Discord Mcard for ' + message.member.user.tag,
				icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
			},
			description: '**Account**\n' + message.author.username + ' (`' + message.member.id + '`)',
			image: {
				url: message.author.displayAvatarURL({ dynamic: true }),
			},
		} });


	},
};