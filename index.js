const express = require('express');
const app = express();
const token = 'ODEyMTE1NDI2Njc4MDEzOTc3.YC8Dbg.tAHOvv1LVNVQbye1GkTbrLGf26o';

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

// client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
client.login(token); //Ligando o Bot caso ele consiga acessar o token

client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    return message.channel.send('pong.');
  }
  else if (command === 'server') {
    return message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  else if(command === 'zap'){
    return message.channel.send(`Chama lá ${message.author} ;), 984316738`);
  }
});