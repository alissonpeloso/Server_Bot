const Discord = require("discord.js");
const fetch = require('node-fetch');

async function getData(url, id) {
	return await (await fetch(url + "'" + id + "'")).json();
}

module.exports.run = async (client, message, args) => {
	try {
		var sheetUrl = "https://opensheet.vercel.app/1q0LyS1weVdLfzAA7jUyF71LBLYC-X36LszYWx8LOR4s/";
		var author;

		var dayArg = args[1];

		if (args[0] == "Alisson" || args[0] == "Eduardo" || args[0] == "Guilherme" || args[0] == "Stefani" || args[0] == "Rafael") {
			author = args[0]
		} else {
			dayArg = args[0];
			switch (message.author.discriminator) {
				case "8793":
					author = "Alisson";
					break;
				case "8592":
					author = "Eduardo";
					break;
				case "5122":
					author = "Guilherme";
					break;
				case "6149":
					author = "Stefani";
					break;
				case "1761":
					author = "Rafael";
					break
				default:
					break;
			}
		}
	
		now = new Date;
		weekDay = now.getDay();
	
		if(dayArg === "tomorrow" || dayArg === "tom"){
			weekDay = weekDay+1;
			if(weekDay == 7){
				weekDay = 0;
			}
		}
		else if(dayArg === "monday" || dayArg === "mon"){
			weekDay = 1;
		}
		else if(dayArg === "tuesday" || dayArg === "tue"){
			weekDay = 2;
		}
		else if(dayArg === "wednesday" || dayArg === "wed"){
			weekDay = 3;
		}
		else if(dayArg === "thursday" || dayArg === "thu"){
			weekDay = 4;
		}
		else if(dayArg === "friday" || dayArg === "fri"){
			weekDay = 5;
		}
		else if(dayArg === "saturday" || dayArg === "sat"){
			weekDay = 6;
		}
		else if(dayArg === "sunday" || dayArg === "sun"){
			weekDay = 0;
		}
	
		if (!author) {
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
	} catch (error) {
		console.log(error);
	}
};