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
    
  // EMBED CONSTS
  const modCheckEmbed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("You must be moderator to use this command!")
    .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");    
    
    const botCheckEmbed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("I do not have the correct permissions to do this!")
    .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");    
  
    const welcomeEmbed = new Discord.MessageEmbed()
    .setColor("#0fff4b")
    .setTitle("Welcome to the server!")
    .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setDescription("Welcome to the server! Navigate about the server to find anything you may need relating to Ancient Resurge.")
    .addFields(
      { name: "Official Server:", value: "https://discord.gg/r7NSkFQ" },
    )
    .setImage("https://images-ext-2.discordapp.net/external/Chkd3qt-yN-qEspd_KUhwAT14GJn2-mk8Emg5eSILMA/%3Fsize%3D1024/https/cdn.discordapp.com/icons/746364860392013854/afce46e5c8ae4080d4f829992db2375d.webp")
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");    
  
    const muteEmbed = new Discord.MessageEmbed()
    .setColor("#ffd400")
    .setTitle("User Muted")
    .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setDescription(`${member} has been muted.`)
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
  
    const unmuteEmbed = new Discord.MessageEmbed()
	  .setColor("#0fff4b")
    .setTitle("User Unuted")
    .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setDescription(`${member} has been unmuted.`)
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
  
    const commandsEmbed = new Discord.MessageEmbed()
	  .setColor("#000001")
	  .setTitle("How to use this bot:")
    .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
	  .setDescription("Commands")
	  .addFields(
		  { name: "Moderation Commands", value: "Use !ban <@user> to ban a user. \nUse !unban <userid> to unban a user. \nUse !mute <@user> to mute a user. \nUse !unmute <@user> to unmute a user. \nUse !kick <@user> to kick a user." },
	  	{ name: "\u200B", value: "\u200B" },
  		{ name: "Misc Commands", value: "Use !commands to see this response. \nUse !ping to check your ping. \nUse !welcome to welcome a new user.", inline: true },
	  )
	  .setTimestamp()
    .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
    const shutdownEmbed = new Discord.MessageEmbed()
	  .setColor("#000001")
	  .setTitle("Shutdown")
    .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
	  .setDescription("Bot Shutting Down...")
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");

    const kickEmbed = new Discord.MessageEmbed()
	  .setColor("#ff0000")
	  .setTitle("User Kicked")
	  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
	  .setDescription(`${member} has been kicked from the server.`)
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
  
    const banEmbed = new Discord.MessageEmbed()
	  .setColor("#ff0000")
	  .setTitle("User Banned")
	  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
    .setDescription(`${member} has been banned from the server.`)
    .setImage("https://gfycat.com/playfulfittingcaribou.gif")
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
  
    const unbanEmbed = new Discord.MessageEmbed()
	  .setColor("#0fff4b")
	  .setTitle("User Unbanned")
	  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
    .setDescription(`${member} has been banned from the server.`)
    .setImage("https://gfycat.com/playfulfittingcaribou.gif")
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
  
    const lockEmbed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Channel Locked")
    .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setDescription("This channel has been locked.")
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
  
    const unlockEmbed = new Discord.MessageEmbed()
    .setColor("#0fff4b")
    .setTitle("Channel Unlocked")
    .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setDescription("This channel has been unlocked.")
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
  
    const lockSpecifyEmbed = new Discord.MessageEmbed()
    .setColor("#000001")
    .setTitle("Please Specify On or Off")
    .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
    .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");


// COMMAND CODE
    // PING COMMAND
    if (command ===`ping`) {
      message.channel.send("Pinging...").then(sent => {
        const pingEmbed = new Discord.MessageEmbed()
        .setColor("#000001")
        .setTitle(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`)
        .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
        .setTimestamp()
        .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");    
      sent.edit(pingEmbed);
      return;
      });
    }
    //WELCOME COMMAND
    if (command === `welcome`) {    
      message.channel.send(welcomeEmbed);
      return;
    }
    
    // HELP COMMAND
    if (command === `commands`) {
        message.channel.send(commandsEmbed);
          return;
    }
    // SHUTDOWN COMMAND
    if (command === `shutdown`) {
      if (message.author.id === "431487139298017282") {
        await message.channel.send(shutdownEmbed)
        console.log(`The bot has been shut down by ${message.author}`)
        process.exit()
        return;
      }
      else message.channel.send(`${message.author}, you must be the bot"s owner to use this command.`)
      return;
    }
    // CHANNEL LOCK COMMAND
    if (command === `lock`) {
      if(!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send(modCheckEmbed)
      }
      const channel = message.channel
      if (args[0] === "on") {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            })
        return message.channel.send(lockEmbed);
      } else if (args[0] === "off") {
        channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true
        })
        return message.channel.send(unlockEmbed);
      } else {
        message.channel.send(lockSpecifyEmbed);
        return;
          }
  }
  // MUTE COMMAND
    if (command ===`mute`) {
      message.guild.roles.cache.find(r => r.name === "Muted");
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(modCheckEmbed);
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.channel.send(botCheckEmbed);
        return;
      }
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.add(role);
      message.channel.send(muteEmbed);
      console.log(`${member} has been muted by ${message.author}.`)
      return;
    }
    // SUPERMUTE COMMAND (NO PERMS)
    if (command ===`supermute`) {
      message.guild.roles.cache.find(r => r.name === "Muted");
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.add(role);
      message.channel.send(muteEmbed);
      console.log(`${member} has been super muted by ${message.author}.`)
      return;
    }
    // UNMUTE COMMAND
    if (command ===`unmute`) {
      message.guild.roles.cache.find(r => r.name === "Muted");
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(modCheckEmbed);
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.channel.send(botCheckEmbed);
        return;
      }
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.remove(role);
      message.channel.send(unmuteEmbed);
      console.log(`${member} has been unmuted by ${message.author}.`)
      return;
    }
        // SUPER UNMUTE COMMAND (NO PERMS)
        if (command ===`superunmute`) {
          message.guild.roles.cache.find(r => r.name === "Muted");
          const role = message.guild.roles.cache.find(r => r.name === "Muted");
          member.roles.remove(role);
          message.channel.send(unmuteEmbed);
          console.log(`${member} has been super unmuted by ${message.author}.`)
          return;
        }
    // CLEAR COMMAND
    if (command === `clear`) {
      const clearEmbed = new Discord.MessageEmbed()
      .setColor("#0fff4b")
      .setTitle("Messages Cleared")
      .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
      .setDescription(`${amount} messages cleared.`)
      .setTimestamp()
      .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");  
      const clearMAXEmbed = new Discord.MessageEmbed()
      .setColor("#0fff4b")
      .setTitle("Cannot clear more than 100 messages.")
      .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
      .setTimestamp()
      .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
      const clearProvideEmbed = new Discord.MessageEmbed()
      .setColor("#0fff4b")
      .setTitle("Please provide a number of messages to delete.")
      .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
      .setTimestamp()
      .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
      const clearMINEmbed = new Discord.MessageEmbed()
      .setColor("#0fff4b")
      .setTitle("You have to delete atleast one message.")
      .setAuthor("xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg", "https://xwass.github.io/AncientResurge")
      .setTimestamp()
      .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
      if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(modCheckEmbed);
        return;
      }
        if(!amount) return message.channel.send(clearProvideEmbed)
        if(amount > 100) return message.channel.send(clearMAXEmbed)
      if(amount < 1) return message.channel.send(clearMINEmbed)
        await message.channel.messages.fetch({limit: amount}).then(messages => {
          message.channel.bulkDelete(messages)
          message.channel.send(clearEmbed);
          console.log(`${amount} messages cleared by ${message.author} in ${message.channel}.`)
          return;
      });
    }
        // SUPER CLEAR COMMAND (NO PERMS)
        if (command === `superclear`) {
          if(!amount) return message.channel.send(clearProvideEmbed)
          if(amount > 1000) return message.channel.send(clearMAXEmbed)
          if(amount < 1) return message.channel.send(clearMINEmbed)
          await message.channel.messages.fetch({limit: amount}).then(messages => {
              message.channel.bulkDelete(messages)
              message.channel.send(clearEmbed);
              console.log(`${amount} messages super cleared by ${message.author} in ${message.channel}.`)
              return;
          });
        }
    // WARN COMMAND
    if (command === `warn`) {
      const user = args[0];
      const userLength = user.length;
      const reason = args.join(" ").slice(userLength);
    const warnEmbed = new Discord.MessageEmbed()
	  .setColor("#ffff00")
	  .setTitle("User Warned")
	  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
	  .setDescription(`${member} warned for ${reason}`)
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
    const warnDMEmbed = new Discord.MessageEmbed()
	  .setColor("#ffff00")
	  .setTitle("You were warned")
	  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
	  .setDescription(`You have been warned for ${reason}`)
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
    const warnProvideEmbed = new Discord.MessageEmbed()
	  .setColor("#ffff00")
	  .setTitle("Please provide a user to warn")
	  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
    const warnReasonEmbed = new Discord.MessageEmbed()
	  .setColor("#ffff00")
	  .setTitle("Please provide the reason you are warning the user.")
	  .setAuthor(`${message.author.tag}`, "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg")
	  .setTimestamp()
    .setFooter("Created by xWass", "https://cdn.discordapp.com/avatars/431487139298017282/1452cddabb6ea77663a0d704ad3cb48a.jpg");
        if(!message.member.hasPermission("KICK_MEMBERS")) {
          return message.channel.send(modCheckEmbed)
        }
      if(!args[0]) return message.reply(warnProvideEmbed);
      if(!args[1]) return message.reply(warnReasonEmbed);
    member.send(warnDMEmbed);
      message.channel.send(warnEmbed);
        console.log(`${member} has been warned by ${message.author} for ${reason}`)
          return;
    }
        // SUPER WARN COMMAND (NO PERMS)
        if (command === `superwarn`) { 
      const user = args[0];
      const userLength = user.length;
      const reason = args.join(" ").slice(userLength);
        if(!args[0]) return message.reply(warnProvideEmbed);
          if(!args[1]) return message.reply(warnReasonEmbed);
      member.send(warnDMEmbed);
        message.channel.send(warnEmbed);
          console.log(`${member} has been super warned by ${message.author} for ${reason}`)
            return;
      }
    // KICK COMMAND
      //PERMCHECK
    if (command === `kick`) {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(modCheckEmbed)
      }
      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(botCheckEmbed)
      }
        // Kick
        member
            .kick()
            .then((member) => {
                // Successmessage
                message.channel.send(kickEmbed);
                console.log(`${member} has been successfully kicked!`)
                return;
            })
            .catch(() => {
                // Failmessage
                message.channel.send(modCheckEmbed);
                return;
            });
    }
    // BAN COMMAND
      // Perm Check
    if (command === `ban`) {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(modCheckEmbed)
      }
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(botCheckEmbed)
      }
        // ban
        member
            .ban()
            .then((member) => {
                // Successmessage
                message.channel.send(banEmbed);
                    console.log(`${member} has been successfully banned.`)
                return;
            })
            .catch(() => {
                // Failmessage
                message.channel.send(modCheckEmbed);  
                return;
            });
    }
    // UNBAN COMMAND
    if(command === "unban"){
        if(!message.member.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(modCheckEmbed)
        }
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(botCheckEmbed)
        }
        const userID = args[0]
          message.guild.fetchBans().then((bans) => {
              if (bans.size == null)
                return;
              const bUser = bans.find(b => b.user.id == userID);
              if (!bUser)
                return;
              message.guild.members.unban(bUser.user);
              message.channel.send(unbanEmbed);
              console.log(`${member} has been successfully unbanned by ${message.author}`)
            });
          };
});
client.login(config.token)
