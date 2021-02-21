const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
};