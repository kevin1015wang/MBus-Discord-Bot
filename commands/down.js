module.exports = {
	name: 'down',
	description: 'Announces Update Starting',
	execute(message, args) {

        if(message.author.id === "425285763194945537"){

		message.channel.send({ embed: {
			color: 15844367,
			author: {
				name: '🚧 Update Notice 🚧',
				icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
			},
			description: 'I\’m currently being updated to a newer version, so I might not be able to respond to your commands for the next bit of time. I don\’t have an estimated time for completion, but feel free to ask Kevin for more info. After the update has been successfully installed, I\’ll post update notes.\n\nSorry for the inconvenience! ',

			footer: {
				text: 'Feel free to contact Kevin with comments or questions.',
			},

            image: {
				url: 'https://i.ibb.co/bPG8pMc/undraw-Next-tasks-re-5eyy.png',
			},
		} });

        }

	},
};