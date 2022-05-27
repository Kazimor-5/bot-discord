// ! IMPORTS
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const kick = require('./commands/kick');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env.DISCORD_BOT_TOKEN;

client.once('ready', () => {
  console.log('Félicitation, votre bot Discord a été correctement initialisé.');
});

client.on('message', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong');
  }
});

module.exports = (client, message) => {
  if (message.content.startsWith('!kick')) {
    return kick(message);
  }
};

client.login(token);
