const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
	const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latência: ${m.createdTimestamp - message.createdTimestamp}ms.`);	
};