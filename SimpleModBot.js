const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ disableEveryone: true });

client.on("ready", async function () {
    console.log(client.user.username + " is ready!");
    client.user.setActivity("to !commands.", { type: "LISTENING" });
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
    const amount = args.join(" ");
    const member = message.mentions.members.first();
    
    //WELCOME COMMAND
    if (command === `welcome`) {
      message.channel.send("Welcome to the server! :wave:");
      return;
    }
    // HELP COMMAND
    if (command === `commands`) {
      message.channel.send("Use `!kick <@user>` to kick a user. \nUse `!ban <@user>` to ban a user, and `!unban <@user>` to unban a user. \nUse `!mute <@user>` to mute a user, and `!unmute <@user>` to unmute a user. \nUse `!warn <@user>` to warn a user. (unlogged) \nUse `!clear <messageAmount>` to purge messages.");
        return;
    }
    // SHUTDOWN COMMAND
    if (command === `shutdown`) {
      if (message.author.id === " ") { // PUT YOUR OWN USER ID IN THE BLANK SPACE
        await message.channel.send("Shutting down...")
        await console.log(`The bot has been shut down by ${message.author.username}`)
        process.exit()
        return;
      }
      else message.channel.send(`${message.author}, you must be the bot's owner to use this command.`)
      return;
    }
    // SOURCECODE COMMAND
    if (command === `sourcecode`) {
      message.channel.send("You can find my source code here: \nhttps://github.com/xWass/Simple-Moderator-Bot");
      return;
    }
    // CHANNEL LOCK COMMAND
    if (command === `lock`) {
      if(!message.member.hasPermission("MANAGE_CHANNELS")) {
       message.channel.send(`${message.author}, you must be a moderator to use this command`)
       return;
      }
      if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        message.channel.send(`${message.author.username}, I do not have the correct permissions to lock this channel.`);
        return;
      }
      const channel = message.channel
      if (args[0] === "on") {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            })
        return message.channel.send(`${message.channel} has been locked.`);
      } else if (args[0] === "off") {
        channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true
        })
        return message.channel.send(`${message.channel} has been unlocked.`);
      } else {
        message.channel.send("Please specify on or off.");
        return;
          }
  }
  // MUTE COMMAND
  if (command ===`mute`) {
    message.guild.roles.cache.find(r => r.name === "Muted");
    if(!message.member.hasPermission("MANAGE_ROLES")){
      message.channel.send(`${message.author.username}, you must be a moderator to use this command`);
      return;
    }
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
      message.channel.send(`${message.author.username}, I do not have the correct permissions to mute this user.`);
      return;
    }
    const role = message.guild.roles.cache.find(r => r.name === "Muted");
    member.roles.add(role);
    message.channel.send(`${member} has been muted by ${message.author}.`);
    console.log(`${member} has been muted by ${message.author.username}.`)
    return;
  }
    // UNMUTE COMMAND
    if (command ===`unmute`) {
      message.guild.roles.cache.find(r => r.name === "Muted");
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(`${message.author.username}, you must be a moderator to use this command`);
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.channel.send(`${message.author.username}, I do not have the correct permissions to unmute this user.`);
        return;
      }
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.remove(role);
      message.channel.send(`${member} has been unmuted by ${message.author}.`);
      console.log(`${member} has been unmuted by ${message.author.username}.`)
      return;
    }
    // PING COMMAND
    if (command ===`ping`) {
      message.channel.send("Pinging...").then(sent => {
      sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
      return;
      });
    }
    // CLEAR COMMAND
    if (command === `clear`) {
      if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(`${message.author.username}, you must be a moderator to use this command.`);
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        message.channel.send(`${message.author.username}, I do not have the correct permissions to clear messages.`);
        return;
      }
      if(!amount) return message.channel.send("You need to provide a number of messages to delete.")
      if(amount > 1000) return message.channel.send("You cannot clear more than 1000 messages at once")
      if(amount < 1) return message.channel.send("You need to delete atleast one messages")
      await message.channel.messages.fetch({limit: amount}).then(messages => {
          message.channel.bulkDelete(messages)
          message.channel.send(`${amount} messages cleared by ${message.author}!`);
          console.log(`${amount} messages cleared by ${message.author.username} in ${message.channel}.`)
          return;
      });
    }
    // WARN COMMAND
    if (command === `warn`) {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${message.author.username}, you must be a moderator to use this command.`)
      }
      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${message.author}, I do not have the correct permissions to warn this user.`)
      }
  const user = args[0];
  const userLength = user.length;
  const reason = args.join(" ").slice(userLength);
  if(!args[0]) return message.reply("please provide a user to warn.");
  if(!args[1]) return message.reply("please provide the reason you are warning them..");
  member.send(`You have been warned for${reason}`);
  message.channel.send(`${member} has been warned for${reason}`);
  console.log(`${member} has been warned by ${message.author.username} for ${reason}`)
  return;
  }
    // KICK COMMAND
    if (command === `kick`) {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${message.author}, you must be a moderator to use this command.`)
      }

      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${message.author}, I do not have the correct permissions to kick this user.`)
      }
        // Kick
        member
            .kick()
            .then((member) => {
                // Successmessage
                message.channel.send(
                    `${member} has been successfully kicked by ${message.author}.`
                );
                console.log(`${member} has been successfully kicked by ${message.author}.`)
                return;
            })
            .catch(() => {
                // Failmessage
                message.channel.send("Access Denied");
                return;
            });
    }
    // BAN COMMAND
    if (command === `ban`) {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, you must be a moderator to use this command.`)
      }
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, I do not have the correct permissions to ban this user.`)
      }
        // ban
        member
            .ban()
            .then((member) => {
                // Successmessage
                message.channel.send(`:wave: ${member} has been successfully banned  by ${message.author} https://gfycat.com/playfulfittingcaribou`);
                    console.log(`${member} has been successfully banned by ${message.author}.`)
                return;
            })
            .catch(() => {
                // Failmessage
                message.channel.send("Access Denied");  
                return;
            });
    }
    // UNBAN COMMAND
    if(command === "unban"){
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, you must be a moderator to use this command.`)
      }
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, I do not have the correct permissions to unban this user.`)
      }
      const userID = args[0]
        message.guild.fetchBans().then((bans) => {
            if (bans.size == null)
              return;
            const bUser = bans.find(b => b.user.id == userID);
            if (!bUser)
              return;
            message.guild.members.unban(bUser.user);
            message.channel.send(`${member} has been successfully unbanned by ${message.author}`);
            console.log(`${member} has been successfully unbanned by ${message.author}`)
          });
        };
});
client.login(config.token)
