const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

const cron = require('node-cron');
const express = require('express');

app = express();

cron.schedule('0 6 * * *', function() {
  var chan = client.channels.cache.get("814237038680735806").send("!sched");
  var chan = client.channels.cache.get("812100021104148490").send("!list");
}, {
  timezone: "America/Sao_Paulo"
});

app.listen(3000);

client.on("ready", () => {
  client.user.setActivity("Xesquedele | !help");
  console.log("Ourbot está pronto para uso!");
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
