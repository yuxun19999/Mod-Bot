const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ disableEveryone: true });
const member = message.mentions.members.first();
const role = message.guild.roles.cache.find(r => r.name === "Muted");

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
    if (command === `commands`) {
        message.channel.send("Use !kick to kick a user. \nUse !ban to ban a user, and !unban to unban a user. \nUse !mute to mute a user, and !unmute to unmute a user.");
        message.delete();
          return;
    }
  
    if (command ===`mute`) {
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
      if(!user){
        message.channel.send("You didn't mention anyone!");
        return;
      }
      member.roles.add(role);
    }
    if (command ===`unmute`) {
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
      if(!user){
        message.channel.send("You didn't mention anyone!");
        return;
      }
      member.roles.remove(role);
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
                    ":wave: " +
                        member.displayName +
                        " has been successfully kicked :point_right: "
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
