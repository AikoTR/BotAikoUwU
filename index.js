const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 32767});
const { TOKEN } = require('./config.json');
const { promisify } = require('util');
const { glob } = require('glob');
const Ascii = require('ascii-table');

const PG = promisify(glob);

client.commands = new Collection();

["eventHandler", "commandHandler", "distubeHandler"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});

client.login(TOKEN)

module.exports = client;