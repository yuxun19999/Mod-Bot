module.exports = {
    name: 'ping',
    description: 'Ping!',
    async execute(Discord, message) {
        await message.guild.members.fetch(message.author.id)
        const pingBaseEmbed = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("Pinging...")
            .setAuthor(`${message.member.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const myMsg = await message.channel.send(pingBaseEmbed)
        const latency = myMsg.createdTimestamp - message.createdTimestamp
        const apiLatency = Math.round(message.client.ws.ping)
        let color
        if (latency >= 151) {
            color = "#FF0000"
        } else if (latency >= 90 || latency <= 150) {
            color = "#FFFF00";
        } else if (latency <= 89) {
            color = "#00FF00"
        }
        const pingEmbed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle(`Latency is ${latency}ms. API Latency is ${apiLatency}ms.`)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        await myMsg.edit(pingEmbed)
    },
};