module.exports = {
	name: '8ball',
	description: 'Posts a tweet. **Dev+ Only**',
	execute(message) {
		const roll = (Math.floor(Math.random() * 20) + 1);
		if(roll == 0) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'As I see it, yes.',
			} });
		}
		else if (roll == 1) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Ask again later.',
			} });
		}
		else if (roll == 2) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Better not tell you now.',
			} });
		}
		else if (roll == 3) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Cannot predict now.',
			} });
		}
		else if (roll == 4) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Concentrate and ask again.',
			} });
		}
		else if (roll == 5) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Don’t count on it.',
			} });
		}
		else if (roll == 6) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'It is certain.',
			} });
		}
		else if (roll == 7) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'It is decidedly so.',
			} });
		}
		else if (roll == 8) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Most likely.',
			} });
		}
		else if (roll == 9) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'My reply is no.',
			} });
		}
		else if (roll == 10) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'My sources say no.',
			} });
		}
		else if (roll == 11) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Outlook not so good.',
			} });
		}
		else if (roll == 12) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Outlook good.',
			} });
		}
		else if (roll == 13) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Reply hazy, try again.',
			} });
		}
		else if (roll == 14) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Signs point to yes.',
			} });
		}
		else if (roll == 15) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Very doubtful.',
			} });
		}
		else if (roll == 16) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Without a doubt.',
			} });
		}
		else if (roll == 17) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Yes.',
			} });
		}
		else if (roll == 18) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Yes – definitely.',
			} });
		}
		else if (roll == 19) {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'You may rely on it.',
			} });
		}
		else {
			message.channel.send({ embed: {
				color: 15844367,
				author: {
					name: '8 Ball',
					icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
				},
				description: 'Yes.',
			} });
		}
	},
};