module.exports = {
    name: 'watch',
    description: 'Log a specific users messages in a logs channel.',
    async execute(Discord, message, command, client, member, args, arguments, amount, role) {
        const watchedRole = message.guild.roles.cache.find(r => r.name === "watched");
        const channel = message.guild.channels.cache.find(ch => ch.name === "bot-logs")
        const noRole = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You need a role called `watched`.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const noMention = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You forgot to mention a user!")
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
        const alreadyWatched = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("User is already marked as watched!")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const watched = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("User has been marked as watched!")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const noChannel = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("You need a channel called #bot-logs to use this command!")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");

        if (!channel) {
            message.channel.send(noChannel)
            return;
        }
        if (!watchedRole) {
            message.channel.send(noRole)
            return;
        }
        if (!member) {
            message.channel.send(noMention)
            return
        }
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send(modCheckEmbed)
            return
        }
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            message.channel.send(botCheckEmbed)
            return;
        }
        if (member.roles.cache.has(watchedRole.id)) {
            message.channel.send(alreadyWatched)
            return;
        }
        member.roles.add(watchedRole)
        message.channel.send(watched)
        return;
    }
}