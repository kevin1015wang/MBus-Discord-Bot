module.exports = {
	name: 'rate',
	description: 'Gives a rating.',
	args: true,
	usage: '<link>',
	execute(message) {
		const rating = Math.floor(Math.random() * 10);
		const saymsg = message.content;
		message.channel.send({ embed: {
			color: 15844367,
			author: {
				name: 'Rate',
				icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
			},
			description: message.author.username + ', I give ' + '**' + saymsg.replace('!rate', '') + '**' + ' a `' + rating + '/10`.',
		} });


	},
};