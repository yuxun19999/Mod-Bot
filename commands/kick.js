module.exports = {
    name: 'kick',
    description: 'Use this command to kick members.',
    async execute(Discord, message, command, client, member, args, arguments, amount, role, userMention, ms, user) {
        const modCheckEmbed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("You are missing the correct permissions to do this!")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const botCheckEmbed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("I am missing the correct permissions to do this!")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const specifyKickUser = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("Please specify a user to kick.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const kickEmbed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("User Kicked")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription(`${member} has been kicked from the server.`)
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const kickDMEmbed = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You were kicked from Rune's Domain")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const noUser = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You forgot to mention a user.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");





        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(modCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
        }
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(botCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
        }
        if (!member) {
            message.channel.send(noUser).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (arguments === "") {
            message.channel.send(specifyKickUser).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        await member.send(kickDMEmbed)
        member.kick()
        message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(kickEmbed);
        message.channel.send(kickEmbed);
        return;
    }
}