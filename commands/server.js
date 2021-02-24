const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
	var newMessage = `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`

	const messageEmbed = new Discord.MessageEmbed()
		.setColor('#036699')
		.setTitle('Server Info')
		.setDescription(`${newMessage}`)
		.setTimestamp()
	
	message.channel.send(messageEmbed);

	message.channel.send();
};