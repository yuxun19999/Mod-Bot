module.exports = {
    name: 'mute',
    description: 'Use this command to mute a user.',
    async execute(Discord, message, command, client, member, args, arguments, amount, role, userMention) {
        const ms = require("ms")
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
        const noRolesFound = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("You do not have a proper `Muted` role. Please create a role called `Muted`, or edit the name of the current `Muted` role so that it matches with: `Muted`.")
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
        const alreadyMuted = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setTitle("User is already muted.")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const indefiniteMuteEmbed = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("User Indefinitely Muted")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription(`${member} has been muted.`)
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
        if (!role) {
            message.channel.send(noRolesFound).then(msg => msg.delete({
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

        let time = args[1]
        if (!time) {
            if (member.roles.cache.has(role.id)) {
                message.channel.send(alreadyMuted).then(msg => msg.delete({
                    timeout: 3000
                }));
                return
            }
            message.channel.send(indefiniteMuteEmbed);
            member.roles.add(role)
                .catch(() => message.channel.send('There was an error!'));
            message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(indefiniteMuteEmbed);
            return;
        }
        // 
        time = ms(time)
        const muteEmbed = new Discord.MessageEmbed()
            .setColor("#ffd400")
            .setTitle("User Muted")
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setDescription(`${member} has been muted for ${args[1]}.`)
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        await member.roles.add(role).then(() => {
            message.channel.send(muteEmbed)
            setTimeout(() => {
                member.roles.remove(role)
            }, time)
            message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(muteEmbed);
        })
        return;
    }
}