const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ disableEveryone: true });

client.on("ready", async function () {
    console.log(client.user.username + " is ready!");
    client.user.setActivity("to my own sorrow.", { type: "LISTENING" });
});
client.on("message", async (message) => {
    if (
        !message.content.startsWith(config.prefix) ||
        message.author.bot ||
        message.channel.type === "dm"
    )
        return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === `welcome`) {
      message.channel.send("Welcome to the server! :wave:");
      message.delete();
      return;
    }
    if (command === `pog`) {
        message.channel.send("<:Pog:769654225599725588> <:Pog:769654225599725588> <:Pog:769654225599725588>");
        message.delete();
        return;
    }
    if (command === `commands`) {
        message.channel.send("Use !kick to kick a user. \nUse !ban to ban a user, and !unban to unban a user. \nUse !mute to mute a user, and !unmute to unmute a user.");
        message.delete();
          return;
    }
    if (command === `fakeban`) {
      message.channel.send(`${member.displayname} has been banned.`)
    }
  
    if (command ===`mute`) {
      const member = message.mentions.members.first();
      message.guild.roles.cache.find(r => r.name === "Muted");
      message.delete();
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send("You do not have permission to use this command");
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.channel.send('I do not have permission to use this command');
        return;
      }
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.add(role);
      message.channel.send(`${member.displayName} has been muted.`);
      return;
    }
    if (command ===`unmute`) {
      const member = message.mentions.members.first();
      message.guild.roles.cache.find(r => r.name === "Muted");
      message.delete();
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send("You do not have permission to use this command");
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.channel.send('I do not have permission to use this command');
        return;
      }
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.remove(role);
      message.channel.send(`${member.displayName} has been muted.`);
      return;
    }
    if (command === `kick`) {
      message.delete();
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
                    `:wave: ${member.displayName} has been successfully kicked :point_right: `
                );
            })
            .catch(() => {
                // Failmessage
                message.channel.send("Access Denied");
            });
    }
    if (command === `ban`) {
      message.delete();
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You must be a moderator to use this command`)
      }

      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, I can not unban this user because I do not have the permission to do so.`)
      }
        // Easy way to get member object though mentions.
        // ban
        member
            .ban()
            .then((member) => {
                // Successmessage
                message.channel.send(
                    `:wave: ${member.displayName} has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: `
                );
            })
            .catch(() => {
                // Failmessage
                message.channel.send("Access Denied");  
            });
    }
    if(command === "unban"){
      message.delete();
        if(!message.member.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, You must be a moderator to use this command`)
        }

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, I can not unban this user because I do not have the permission to do so.`)
        }

        let userID = args[0]
          message.guild.fetchBans().then((bans) => {
              if (bans.size == null)
                return;
              let bUser = bans.find(b => b.user.id == userID);
              if (!bUser)
                return;
              message.guild.members.unban(bUser.user);
              return message.channel.send(
                ":wave: User has been successfully unbanned"
              );
            });
          }
});
client.login(config.token)
