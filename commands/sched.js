const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
	var m = new Array(11).fill(0); //criar as linhas e preencher com zeros
	m = m.map(linha => new Array(6).fill(0)); //criar as colunas e preencher com zeros

	m[0][0] = "";	
	m[0][1] = "mon";
	m[0][2] = "tue";
	m[0][3] = "wed";
	m[0][4] = "thu";
	m[0][5] = "fri";
	m[1][0] = "07:30 - 08:20"
	m[2][0] = "08:20 - 09:10"
	m[3][0] = "09:10 - 10:00"
	m[4][0] = "10:10 - 11:00"
	m[5][0] = "11:00 - 11:50"
	m[6][0] = "13:30 - 14:20"
	m[7][0] = "14:20 - 15:10"
	m[8][0] = "15:10 - 16:00"
	m[9][0] = "16:20 - 17:10"
	m[10][0] = "17:10 - 18:00"

	console.table(m);
	message.channel.send.table(m);

	if(args[0] === "set"){

	}
};