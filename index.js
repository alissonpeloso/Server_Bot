// require('http').createServer().listen(3000)

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
require('dotenv').config();

const cron = require('node-cron');
const express = require('express');

app = express();

var users = ['<@!340640482256224259>, <@!251453510296666113>, <@!140525920111820800>, <@!523536956576104478>, <@!187703124402634752>'];

cron.schedule('0 6 * * *', async function () {
  for await(let user of users) {
    client.channels.cache.get("814237038680735806").send(`!sched ${user}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  client.channels.cache.get("812100021104148490").send("!list");
}, {
  timezone: "America/Sao_Paulo"
});

app.listen(3001);

client.on("ready", () => {
  client.user.setActivity("Xesquedele | !help");
  console.log("Jureide está pronta para uso!");
});

client.on('message', async message => {
  if (!message.content.startsWith(config.prefix) || message.channel.type === "dm") return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(client, message, args);
  } catch (error) {
    console.error("Erro: "+error);
  }
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
