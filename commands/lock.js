module.exports = {
    name: 'lock',
    description: 'Use this command to lock a channel.',
    async execute(Discord, message, command, client, member, args, arguments, amount, role, userMention, ms, user) {
        const lockEmbed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Channel Locked")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription("This channel has been locked.")
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const unlockEmbed = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("Channel Unlocked")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription("This channel has been unlocked.")
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const lockSpecifyEmbed = new Discord.MessageEmbed()
            .setColor("#000001")
            .setTitle("Please Specify On or Off")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
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

        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send(modCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
        }
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send(botCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        const channel = message.channel
        if (args[0] === "on") {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            })
            message.channel.send(lockEmbed);
            return;
        } else if (args[0] === "off") {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: true
            })
            return message.channel.send(unlockEmbed);
        } else {
            message.channel.send(lockSpecifyEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
    }
}