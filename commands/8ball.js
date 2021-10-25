const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask your questions.')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('Your question.')
                .setRequired(true)),
	async execute(interaction) {

        interaction.options.getSubcommand('question') === ques;

        const roll = (Math.floor(Math.random() * 20) + 1);
		if(roll == 0) {
            res = 'As I see it, yes.';
		}
		else if (roll == 1) {
            res = 'Ask again later.';
		}
		else if (roll == 2) {
            res = 'Better not tell you now.';
		}
		else if (roll == 3) {
            res = 'Cannot predict now.';
		}
		else if (roll == 4) {
            res = 'Concentrate and ask again.';
		}
		else if (roll == 5) {
            res = 'Don’t count on it.';
		}
		else if (roll == 6) {
            res = 'It is certain.';
		}
		else if (roll == 7) {
            res = 'It is decidedly so.';
		}
		else if (roll == 8) {
            res = 'Most likely.';
		}
		else if (roll == 9) {
            res = 'My reply is no.';
		}
		else if (roll == 10) {
            res = 'My sources say no.';
		}
		else if (roll == 11) {
            res = 'Outlook not so good.';
		}
		else if (roll == 12) {
            res = 'Outlook good.';
		}
		else if (roll == 13) {
            res = 'Reply hazy, try again.';
		}
		else if (roll == 14) {
            res = 'Signs point to yes.';
		}
		else if (roll == 15) {
            res = 'Very doubtful.';
		}
		else if (roll == 16) {
            res = 'Without a doubt.';
		}
		else if (roll == 17) {
            res = 'Yes.';
		}
		else if (roll == 18) {
            res = 'Yes – definitely.';
		}
		else if (roll == 19) {
            res = 'You may rely on it.';
		}
		else {
            res = 'Yes.';
		}

        const embed = new MessageEmbed()
			.setColor('#FBCE33')
			.setAuthor('8 Ball', 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png')
			.setDescription(ques + res)

		await interaction.reply({ ephemeral: true, embeds: [embed] });
	},
};