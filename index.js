const fs = require('fs');
const Discord = require('discord.js');
const {
	prefix,
	token
} = require('./config.json');
const config = require('./config.json')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});
const express = require('express');
const app = express();
const port = 2050;

app.get('/', (req, res) => res.send('If you are seeing this page, the bot is online.'));

app.listen(port, () => console.log(`Bot is online at http://localhost:${port}`));

client.on("message", async (message) => {
    if (message.content.startsWith(config.prefix)) {
        return;
    } else {
        if (message.channel.name === "counter") {
            const categoryChannel = client.channels.cache.get("842165999696609361");
            if (!categoryChannel) return;
            return await categoryChannel.setName(`[${message.cleanContent}] ARE ONLINE.`);
        } else {
            return;
        }
    }
})
client.on('message', async(message) => {
	if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const arguments = message.content.substring('suggest'.length + 1)
	const amount = args[1];

	const member = message.mentions.members.first();
	const role = message.guild.roles.cache.find(r => r.name === "Muted");
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(Discord, message, command, client, member, args, arguments, amount, role);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
		console.log(amount)
	}
});
client.login(token);