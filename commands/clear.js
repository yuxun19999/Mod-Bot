
module.exports = {
    name: 'clear',
    description: 'Clear messages in the chat.',
    async execute(Discord, message, command, client, member, args, arguments, amount, role, userMention, noUser) {
        const clearEmbed = new Discord.MessageEmbed()
        .setColor("#0fff4b")
        .setTitle("Messages Cleared")
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
            format: "png"
        }))
        .setDescription(`${amount} messages cleared in <#${message.channel.id}>`)
        .setTimestamp()
        .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const clearProvideEmbed = new Discord.MessageEmbed()
        .setColor("#0fff4b")
        .setTitle("Please provide a number of messages to delete.")
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
            format: "png"
        }))
        .setTimestamp()
        .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const clearMAXEmbed = new Discord.MessageEmbed()
        .setColor("#0fff4b")
        .setTitle("Cannot clear more than 100 messages.")
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
            format: "png"
        }))
        .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const clearMINEmbed = new Discord.MessageEmbed()
        .setColor("#0fff4b")
        .setTitle("You have to delete at least one message.")
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
            format: "png"
        }))
        .setTimestamp()
        .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        const notANumberEmbed = new Discord.MessageEmbed()
        .setColor("#ffd400")
        .setTitle("The number you provided is not a number. (1-99)")
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
            format: "png"
        }))
        .setTimestamp()
        .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
    
        
        
        
        
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(cannotUseEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send(botCheckEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (!amount) {
            message.channel.send(clearProvideEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (amount > 99) {
            message.channel.send(clearMAXEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (amount < 1) {
            message.channel.send(clearMINEmbed).then(msg => msg.delete({
                timeout: 3000
            }));
            return;
        }
        if (isNaN(amount)) {
            message.channel.send(notANumberEmbed)
            return;
        } else {
        
        const set = parseInt(amount);
        await message.channel.bulkDelete(set + 1);
        message.channel.send(clearEmbed).then(msg => msg.delete({
            timeout: 3000
        }));
        message.guild.channels.cache.find(ch => ch.name === "bot-logs").send(clearEmbed);
        return;
    }
}
}