const Discord = require("discord.js");


module.exports.run = async(client, message, args) => {
	var numMaxDado = args[0];
	var numFinal = "";

	if(numMaxDado.startsWith("d"))
		numMaxDado = numMaxDado.slice(1);
	
	for(var i = 1; i < args.length; i++)
		numFinal += args[i];

	if(numFinal.length > 0)
		numFinal = eval(numFinal);
	else
		numFinal = 0;
	
	var randNum = Math.floor(Math.random() * parseInt(numMaxDado, 10));
	randNum++;

	numFinal += randNum;

	if(randNum == numMaxDado)
		message.channel.send(numFinal + " (" + randNum + " natural :D)");
	else if(randNum == 1)
		message.channel.send(numFinal + " (" + randNum + " natural D:)");
	else
		message.channel.send(numFinal);
};
