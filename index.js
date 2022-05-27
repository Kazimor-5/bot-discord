// ! IMPORTS
require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env.DISCORD_BOT_TOKEN;

client.once('ready', () => {
  console.log('Félicitation, votre bot Discord a été correctement initialisé.');
});

client.login(token);
