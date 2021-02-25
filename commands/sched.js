const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
	var m = new Array(11).fill(0); //criar as linhas e preencher com zeros
	m = m.map(linha => new Array(6).fill(0)); //criar as colunas e preencher com zeros

	now = new Date;
	weekDay = now.getDay();

	if(args[0] === "tomorrow" || args[0] === "tom"){
		weekDay = weekDay+1;
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

	m[0][0] = "";	
	m[0][1] = "**Segunda-Feira**";
	m[0][2] = "**Terça-Feira**";
	m[0][3] = "**Quarta-Feira**";
	m[0][4] = "**Quinta-Feira**";
	m[0][5] = "**Sexta-Feira**";

	m[1][0] = "**07:30**"
	m[2][0] = "**08:20**"
	m[3][0] = "**09:10**"
	m[4][0] = "**10:10**"
	m[5][0] = "**11:00**"
	m[6][0] = "**13:30**"
	m[7][0] = "**14:20**"
	m[8][0] = "**15:10**"
	m[9][0] = "**16:20**"
	m[10][0] = "**17:10**"

	//monday
	m[1][1] = "Grafos";
	m[2][1] = "Grafos";
	m[3][1] = "Grafos";
	m[4][1] = "Org. de Computadores";
	m[5][1] = "Org. de Computadores";
	m[6][1] = "Prog. II";
	m[7][1] = "Prog. II";
	m[8][1] = "Prog. II";
	m[9][1] = "Banco de Dados I";
	m[10][1] = "Banco de Dados I";

	//tuesday
	m[6][2] = "IPC";
	m[7][2] = "IPC";
	m[8][2] = "IPC";
	m[9][2] = "Prog. II";
	m[10][2] = "Prog. II";

	//wednesday
	m[6][3] = "Eng. de Software I";
	m[7][3] = "Eng. de Software I";
	m[8][3] = "Eng. de Software I";
	m[9][3] = "Eng. de Software I";
	m[10][3] = "Eng. de Software I";

	//thursday
	m[6][4] = "Banco de Dados I";
	m[7][4] = "Banco de Dados I";
	m[8][4] = "Banco de Dados I";
	m[9][4] = "Org. de Computadores";
	m[10][4] = "Org. de Computadores";

	//friday
	m[6][5] = "Grafos";
	m[7][5] = "Grafos";
	m[8][5] = "Grafos";
	m[9][5] = "IPC";
	m[10][5] = "IPC";

	var newMessage = "";

	if(weekDay == 6){
		const messageEmbed = new Discord.MessageEmbed()
		.setColor('#036699')
		.setTitle("**Sábado**")
		.setDescription("Folgaa! 🥳🥳")
		.setTimestamp()
	
		message.channel.send(messageEmbed);
		return;
	}
	else if(weekDay == 0){
		const messageEmbed = new Discord.MessageEmbed()
		.setColor('#036699')
		.setTitle("**Domingo**")
		.setDescription("Folgaa! 🥳🥳")
		.setTimestamp()
	
		message.channel.send(messageEmbed);
		return;
	}

	for(var i = 1; i < m.length; i++){
		if(m[i][weekDay] == 0){
			newMessage+= "";
		}
		else{
			newMessage+= m[i][0]+": "+m[i][weekDay]+"\n";
			if(i == 5){
				newMessage+= "\n"
			}
		}
	}

	const messageEmbed = new Discord.MessageEmbed()
		.setColor('#036699')
		.setTitle(`${m[0][weekDay]}`)
		.setDescription(`${newMessage}`)
		.setTimestamp()
	
	message.channel.send(messageEmbed);
};