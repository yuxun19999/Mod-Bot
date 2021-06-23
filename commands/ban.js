module.exports = {
    name: 'ban',
    description: 'Ban users with this command',

    async execute(Discord, message, command, client, member, args, arguments, amount, role, userMention, ms, user) {
        const cannotUseEmbed = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You can not use this command.")
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
        const banEmbed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("User Banned")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription(`${member} has been banned from the server.`)
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");

        const banEmbedDM = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You were banned from Rune's Domain.")
            .setDescription("You can appeal your ban here: https://forms.gle/QBKJmKiQRkddpKiZ8.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            message.channel.send(botCheckEmbed).then(msg => msg.delete({
                timeout: 4500
            }));
            return;
        }
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send(cannotUseEmbed).then(msg => msg.delete({
                timeout: 4500
            }));
            return;
        }
        if (!member) {
            message.channel.send(noUser).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (member.hasPermission("BAN_MEMBERS")) {
            console.log("this code is being reached")
            message.channel.send(modCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            console.log("the embed was sent")
            return;
        }
        await member.send(banEmbedDM);
        message.channel.send(banEmbed);
        message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(banEmbed);
        member.ban()
        return;
    }
}