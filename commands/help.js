
module.exports = {
    name: 'help',
    description: 'Sends help embed',
    async execute(Discord, message) {
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor("#000001")
        .setTitle("How to use this bot:")
        .addFields({
            name: "Commands:",
            value: "Use `;mute <@user>` to mute a user indefinitely. \nUse `;mute <@user> [time(1m, 1h, 1d)]` to mute a user for a specified time. \nUse `;unmute <@user>` to unmute a user. \nUse `;lock on` or `;lock off` to lock a channel. \nUse `;kick <@user>` to kick a user. \nUse `;ban <@user>` to ban a user. \nUse `;unban <userID>` to unban a user \nUse `;userinfo [mention]` to check your information or another user's information. \nUse `;roleinfo <@role>` to check a role's information. \nUse `;ping` to check your ping. \nUse `;uptime` to check how long the bot has been online",
            inline: true
        })
        .setTimestamp()
        .setFooter("Created by xWass", "https://images-ext-2.discordapp.net/external/o4pf20HyK0u5557o_RzzfSVidwkKA4a30e8r63G_Pjw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.png");
        message.channel.send(commandsEmbed);
        return;
    }
}