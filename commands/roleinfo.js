module.exports = {
    name: 'roleinfo',
    description: 'Display a roles info.',
    async execute(Discord, message, command, client, member, args, arguments, amount, role, userMention, ms, user) {
        const roleArgs = args[0]
        const noRoleProvided = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setDescription(`Please provide a role to check`)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
console.log(roleArgs)
        if (!roleArgs) {
            message.channel.send(noRoleProvided)
            return;
        }
        const mentionedRole = message.mentions.roles.first()
        const roleInfo = new Discord.MessageEmbed()
            .setColor("#0fff4b")
            .setDescription(`**Name: ${mentionedRole.name}** \n**ID: ${mentionedRole.id}** \n**Created on: ${mentionedRole.createdAt}** \n**Colour: ${mentionedRole.hexColor}** \n**Displayed: ** ${mentionedRole.hoist} \n**Managed: ** ${mentionedRole.managed} \n**Mentionable: ** ${mentionedRole.mentionable} \n**Position: ** ${mentionedRole.position} \n**Permissions: ** ${mentionedRole.permissions}`)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({
                format: "png"
            }))
            .setTimestamp()
            .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        message.channel.send(roleInfo)
        return;
    }
}