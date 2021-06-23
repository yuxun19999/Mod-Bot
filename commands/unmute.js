module.exports = {
    name: 'unmute',
    description: 'Use this command to unmute users.',
    async execute(Discord, message, command, client, member, args, arguments, amount, role) {
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
        const noUser = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You forgot to mention a user.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const noRolesFound = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You do not have a proper `Muted` role. Please create a role called `Muted`, or edit the name of the current `Muted` role so that it matches with: `Muted`.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const alreadyUnmuted = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("User is not muted.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const unmuteEmbed = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("User Unmuted")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription(`${member} has been unmuted.`)
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");


        if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send(modCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            message.channel.send(botCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (!member) {
            message.channel.send(noUser).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (!role) {
            message.channel.send(noRolesFound).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (!member.roles.cache.has(role.id)) {
            message.channel.send(alreadyUnmuted).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (member.roles.cache.has(role.id)) {
            member.roles.remove(role);
            message.channel.send(unmuteEmbed);
            message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(unmuteEmbed);
            return;
        }
    }
}