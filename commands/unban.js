module.exports = {
    name: 'unban',
    description: 'Use this command to unban a user. (Based on ID)',
    async execute(Discord, message, command, client, member, args, arguments, amount, role, userMention) {

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
        const noUnbanID = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("Please provide a user ID to unban them.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const notBannedEmbed = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("User is not banned.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const unbanEmbed = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("User Unbanned")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription("User has been unbanned from the server.")
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");

        const userID = args[0]


        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            message.channel.send(botCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send(modCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (!userID) {
            message.channel.send(noUnbanID).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        console.log(userID)
        message.guild.fetchBans().then((bans) => {
            if (bans.size == null)
                return;
            const bUser = bans.find(b => b.user.id == userID);
            if (!bUser) {
                message.channel.send(notBannedEmbed).then(msg => msg.delete({
                    timeout: 3000
                }));
                return;
            }
            message.guild.members.unban(bUser.user);
            message.channel.send(unbanEmbed);
            message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(unbanEmbed);
        });
    }
}