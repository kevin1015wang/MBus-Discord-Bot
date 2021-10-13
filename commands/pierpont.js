const fetch = require('node-fetch');

module.exports = {
	name: 'pierpont',
	description: 'Gives Pierpont CCTC stop times',
	execute(message, args) {
		
        let url = "https://mbus.ltp.umich.edu/bustime/api/v3/getpredictions?key=mrBJV8guVpvDc4FvtQ2xHhBjY&stpid=N553&format=json";

        let settings = { method: "Get" };

        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {

                wait1 = json['bustime-response']['prd'][0]['prdctdn'];
                wait2 = json['bustime-response']['prd'][1]['prdctdn'];

                warning = '';

                if (wait1 <= 4) {
                    warning = '\n\n⚠️ I recommend getting to the bus stop **now.**'
                }
                
                message.channel.send({ embed: {
                    color: 15844367,
                    author: {
                        name: 'Next Bus',
                        icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
                    },
                    description: 'Hi ' + message.author.username + '! 👋\n\n**The next CC will arrive at Pierpont in:** \n`' + wait1 + '` minute(s)\n\n**If you miss that, then the bus after that will be in:**\n`' + wait2 + "` minute(s)" + warning,
    
                    footer: {
                        text: 'All stop times approximate. Data from UMich BusTime API.',
                    },
                } });
            });


	},
};
    