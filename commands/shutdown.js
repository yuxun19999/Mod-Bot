module.exports = {
    name: 'shutdown',
    description: 'Shut down the bot (Owner only)',
    async execute(Discord, message) {
        const deniedEmbed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Only xWass can use this.")
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const shutdownEmbed = new Discord.MessageEmbed()
            .setColor("#000001")
            .setTitle("Shutdown")
            .setDescription("Bot Shutting Down...")
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");

        const xwass = new Discord.MessageEmbed()
            .setColor("#000001")
            .setTitle("Shutdown")
            .setDescription("xWass shut down the bot for maintenance.")
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");

        if (!message.author.id === "431487139298017282") {
            message.channel.send(deniedEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
        }
        await message.channel.send(shutdownEmbed)
        await console.log(`The bot has been shut down by ${message.author}`)
        await message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(xwass);
        process.exit()
        return;
    }
}