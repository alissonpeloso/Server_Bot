const Discord = require("discord.js");
const fetch = require('node-fetch');

async function getData(url, id) {
	return await (await fetch(url + "'" + id + "'")).json();
}

module.exports.run = async (client, message, args) => {
	var sheetUrl = "https://opensheet.vercel.app/1q0LyS1weVdLfzAA7jUyF71LBLYC-X36LszYWx8LOR4s/";
	var author = message.author.discriminator;

	var regexMention = new RegExp(/\<\@\![\d]*\>/);

	args.forEach( (element, index) => {
		if (regexMention.test(element)) {
			var user = client.users.cache.find(user => user.id === element.replace(/(\<\@\!|\>)/g, ""));
			author = user.discriminator;
			args.splice(index);
		}
	});

	now = new Date;
	weekDay = now.getDay();

	if(args[0] === "tomorrow" || args[0] === "tom"){
		weekDay = weekDay+1;
		if(weekDay == 7){
			weekDay = 0;
		}
	}
	else if(args[0] === "monday" || args[0] === "mon"){
		weekDay = 1;
	}
	else if(args[0] === "tuesday" || args[0] === "tue"){
		weekDay = 2;
	}
	else if(args[0] === "wednesday" || args[0] === "wed"){
		weekDay = 3;
	}
	else if(args[0] === "thursday" || args[0] === "thu"){
		weekDay = 4;
	}
	else if(args[0] === "friday" || args[0] === "fri"){
		weekDay = 5;
	}
	else if(args[0] === "saturday" || args[0] === "sat"){
		weekDay = 6;
	}
	else if(args[0] === "sunday" || args[0] === "sun"){
		weekDay = 0;
	}
	else if(args.length >= 1){
		return;
	}

	var sched = await getData(sheetUrl, author);

	var newMessage = "";

	var days = Object.keys(sched[0])
	var day = days[weekDay + 1];

	for (var line of sched) {
		if (line[day]) {
			newMessage += `**${line["Horário"]}**: ${line[day]}\n`;
		}
	}
	
	const messageEmbed = new Discord.MessageEmbed()
		.setColor('#036699')
		.setTitle(`**${day}**`)
		.setDescription(`${newMessage}`)
		.setTimestamp()
	
	message.channel.send(messageEmbed);
};