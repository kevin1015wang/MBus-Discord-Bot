module.exports = {
	name: 'bus',
	description: 'Tells you when the next bus arrives.',
	execute(message) {

        //Warning message
        warning = '';

        //Finds the current time.
        var today = new Date();
        hourTime = today.getHours();
        minute = today.getMinutes();
        day = today.getDay();

        //Weekdays
        if (day >= 1 & day <= 5) {
            if (hourTime >= 2 & hourTime < 7) {

                message.channel.send({ embed: {
                    color: 3447003,
                    author: {
                        name: 'Next Bus',
                        icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
                    },
                    description: 'The busses are currently sleeping. Service resumes at 8 AM.',
    
                    footer: {
                        text: 'All stop times approximate. Data from LTP stop times PDF.',
                    },
                } });

            } else {

                //7 AM
                if (hour = 7) {
                    if (minute <= 18) {
                        wait = 18 - minute;
                    } else if (minute > 18 & minute <= 25) {
                        wait = 25 - minute;
                    } else if (minute > 25 & minute <= 33) {
                        wait = 33 - minute;
                    } else if (minute > 33 & minute <= 40 ) {
                        wait = 40 - minute;
                    } else if (minute > 40 & minute <= 48 ) {
                        wait = 48 - minute;
                    } else if (minute > 48 & minute <= 55 ) {
                        wait = 55 - minute;
                    } else if (minute > 55) {
                        wait = (60 - minute) + 3;
                    }
                }

                //8AM to 7 PM
                if (hour > 7 & hour < 19) {
                    if (minute <= 3) {
                        wait = 3 - minute;
                    } else if (minute > 3 & minute <= 10) {
                        wait = 10 - minute;
                    } else if (minute > 10 & minute <= 18) {
                        wait = 18 - minute;
                    } } else if (minute > 18 & minute <= 25) {
                        wait = 25 - minute;
                    } else if (minute > 25 & minute <= 33) {
                        wait = 33 - minute;
                    } else if (minute > 33 & minute <= 40 ) {
                        wait = 40 - minute;
                    } else if (minute > 40 & minute <= 48 ) {
                        wait = 48 - minute;
                    } else if (minute > 48 & minute <= 55 ) {
                        wait = 55 - minute;
                    } else if (minute > 55) {
                        wait = (60 - minute) + 3;
                    }
                } 

                //8 PM
                if (hour == 20) {
                    if (minute <= 3) {
                        wait = 3 - minute;
                    } else if (minute > 3 & minute <= 10) {
                        wait = 10 - minute;
                    } else if (minute > 10 & minute <= 18) {
                        wait = 18 - minute;
                    } } else if (minute > 18 & minute <= 25) {
                        wait = 25 - minute;
                    } else if (minute > 25 & minute <= 33) {
                        wait = 33 - minute;
                    } else if (minute > 33 & minute <= 48 ){
                        wait = 48 - minute;
                    } else if (minute > 48 ) {
                        wait = (60 - minute ) + 3;
                    }
                
                //9 PM to 1 AM

                if (hour > 20 & hour <= 24 || hour == 0 || hour == 1 ) {
                    if (minute <= 3) {
                        wait = 3 - minute;
                    } else if (minute > 3 & minute <= 18 ) {
                        wait = 18 - minute;
                    } else if (minute > 18 & minute <= 33 ) {
                        wait = 33 - minute;
                    } else if (minute > 33 & minute <= 48 ) {
                        wait = 48 - minute;
                    } else {
                        wait = (60 - minute ) + 3;
                    }
                }

        }
            
            // Weekends

            if (day == 0 || day == 6) {
                if (hourTime >= 2 & hourTime < 8) {

                    message.channel.send("The busses are currently sleeping. Service resumes at 8 AM.")

                    message.channel.send({ embed: {
                        color: 3447003,
                        author: {
                            name: 'Next Bus',
                            icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
                        },
                        description: 'The busses are currently sleeping. Service resumes at 8 AM.',
        
                        footer: {
                            text: 'All stop times approximate. Data from LTP stop times PDF.',
                        },
                    } });

                } else {
                    if (hour >= 8 || hour == 0 || hour == 1) {
                        if (minute <= 3) {
                            wait = 3 - minute;
                        } else if (minute > 3 & minute <= 18 ) {
                            wait = 18 - minute;
                        } else if (minute > 18 & minute <= 33 ) {
                            wait = 33 - minute;
                        } else if (minute > 33 & minute <= 48 ) {
                            wait = 48 - minute;
                        } else {
                            wait = (60 - minute ) + 3;
                        }
                    }
                }
            }   
            
            //Embed

            if (wait <= 4) {
                warning = '\n\n⚠️ I recommend getting to the bus stop **now.**'
            }

            message.channel.send({ embed: {
                color: 15844367,
                author: {
                    name: 'Next Bus',
                    icon_url: 'https://i.ibb.co/qsKg98d/UMich-logo-modified.png',
                },
                description: 'Hi ' + message.author.username + '! 👋\n\nThe next bus will arrive at the stop in: \n**Baits II: ** `' + wait + '` minute(s)' + '\n**Bursley: ** ' + '`' + (wait + 1) + '`' + ' minute(s)' + warning,

                footer: {
					text: 'All stop times approximate. Data from LTP stop times PDF.',
				},
            } });

            },
        }; 
