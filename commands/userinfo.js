
module.exports = {
    name: 'userinfo',
    description: "Display a user's information",
    async execute(Discord, message, command, client, member) {
        if (!member) {
            const userInfo = new Discord.MessageEmbed()
                .setColor("#0fff4b")
                .setDescription(`**Username: ${message.author.tag}** \n**ID: ${message.author.id}** \n**Registered: ${message.author.createdAt}** \n**Joined: ${message.member.joinedAt}** \n**Avatar:**`)
                .setImage(message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                    format: "png"
                }))
                .setTimestamp()
                .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");

            message.channel.send(userInfo)
            return;
        }
        if (member) {
            const userInfoMention = new Discord.MessageEmbed()
                .setColor("#0fff4b")
                .setDescription(`**Username: ${member.user.tag}** \n**ID: ${message.id}** \n**Registered: ${member.user.createdAt}** \n**Joined: ${member.joinedAt}** \n**Avatar:**`)
                .setImage(member.user.displayAvatarURL({
                    dynamic: true
                }))
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                    format: "png"
                }))
                .setTimestamp()
                .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
            message.channel.send(userInfoMention)
            return;
        }
    }
}