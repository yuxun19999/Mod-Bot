const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({ disableEveryone: true });

client.on('ready', async function () {
    console.log(client.user.username + ' is ready!');
    client.user.setActivity(' ', { type: 'LISTENING' });
});
client.on('message', async (message) => {
    if (
        !message.content.startsWith(config.prefix) ||
        message.author.bot ||
        message.channel.type === 'dm'
    )
        return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === `welcome`) {
      message.delete();
      message.channel.send('Welcome to the server! :wave:');
      return
    }
    if (command === `help`) {
        message.delete();
        message.channel.send(
            "Use !kick to kick a user. \nUse !ban to ban a user, and !unban to unban a user. \nUse !pog because why not. \mUse !ping to check your ping. ");
          return;
    }
    if (command === `kick`) {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You must be a moderator to use this command`)
      }

      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, I can not unban this user because I do not have the permission to do so.`)
      }
        // Easy way to get member object though mentions.
        const member = message.mentions.members.first();
        // Kick
        member
            .kick()
            .then((member) => {
                // Successmessage
                message.channel.send(
                    ':wave: ' +
                        member.displayName +
                        ' has been successfully kicked :point_right: '
                );
            })
            .catch(() => {
                // Failmessage
                message.channel.send('Access Denied');
            });
    }
    if (command === `ban`) {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You must be a moderator to use this command`)
      }

      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, I can not unban this user because I do not have the permission to do so.`)
      }
        // Easy way to get member object though mentions.
        const member = message.mentions.members.first();
        // ban
        member
            .ban()
            .then((member) => {
                // Successmessage
                message.channel.send(
                    ':wave: ' +
                        member.displayName +
                        ' has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: '
                );
            })
            .catch(() => {
                // Failmessage
                message.channel.send('Access Denied');  
            });
    }
    if(command === "unban"){
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You must be a moderator to use this command`)
      }

      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, I can not unban this user because I do not have the permission to do so.`)
      }

      let userID = args[0]
        message.guild.fetchBans().then(bans=> {
        if(bans.size == null) return
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return
        message.guild.members.unban(bUser.user)
        return message.channel.send(
          ':wave: User has been successfully unbanned'
        )
  })
}
});
client.login(config.token)