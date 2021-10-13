module.exports = {
	name: 'updated',
	description: 'Announces Update',
	execute(message, args) {

        if(message.author.id === "425285763194945537"){

		message.channel.send({ embed: {
			color: 15844367,
			author: {
				name: 'Update Notes 📝',
				icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
			},
			description: 'Thanks for the patience everyone! I just got updated to version `2.0` with some pretty cool features! The biggest improvement is that the bot is able to read into the BusTime API, which means live bus tracking and more accurate stop time. \n\nAfter the BBL comes onto the Magic Bus App, I\’ll start using BusTime data to track those buses. This change will make it much easier to expand into more routes and focus on other things. A revamped UI is also being considered, but more on that later!\n\n**Changes:**\n\n`!pierpont` shows when the next two CC buses arrive there.\nPierpont command uses live data from BusTime API.',

			footer: {
				text: 'Feel free to contact Kevin with comments or questions.',
			},

            image: {
				url: 'https://i.ibb.co/j4xVkc8/undraw-Update-re-swkp.png',
			},

		} });

        }

	},
};