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
const welcomeEmbed = new Discord.MessageEmbed()
.setColor("#0099ff")
.setTitle("Welcome to the server!")
.setURL("https://discord.js.org/")
.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
.setDescription("Some description here")
.setThumbnail("https://i.imgur.com/wSTFkRM.png")
.addFields(
  { name: "Regular field title", value: "Some value here" },
  { name: "\u200B", value: "\u200B" },
  { name: "Inline field title", value: "Some value here", inline: true },
  { name: "Inline field title", value: "Some value here", inline: true },
)
.addField("Inline field title", "Some value here", true)
.setImage("https://i.imgur.com/wSTFkRM.png")
.setTimestamp()
.setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");

  const muteEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("User Muted")
	.setURL("https://discord.js.org/")
	.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription("Some description here")
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://i.imgur.com/wSTFkRM.png")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
  const unmuteEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("User Unmuted")
	.setURL("https://discord.js.org/")
	.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription("Some description here")
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://i.imgur.com/wSTFkRM.png")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
  const commandsEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("How to use this bot:")
	.setURL("https://discord.js.org/")
	.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription("Some description here")
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://i.imgur.com/wSTFkRM.png")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
  const shutdownEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Bot Shutting Down")
	.setURL("https://discord.js.org/")
	.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription("Some description here")
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://i.imgur.com/wSTFkRM.png")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
  const warnEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("User Warned")
	.setURL("https://discord.js.org/")
	.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription("Some description here")
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://i.imgur.com/wSTFkRM.png")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
  const kickEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Commands:")
	.setURL("https://discord.js.org/")
	.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription("Some description here")
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://i.imgur.com/wSTFkRM.png")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
  const banEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("User Banned")
	.setURL("https://discord.js.org/")
	.setAuthor(`${message.author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription(`${member} has been banned by ${message.author}`)
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://gfycat.com/playfulfittingcaribou")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  
  const unbanEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("User Unbanned")
	.setURL("https://discord.js.org/")
	.setAuthor(`${author}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
	.setDescription("Some description here")
	.setThumbnail("https://i.imgur.com/wSTFkRM.png")
	.addFields(
		{ name: "Regular field title", value: "Some value here" },
		{ name: "\u200B", value: "\u200B" },
		{ name: "Inline field title", value: "Some value here", inline: true },
		{ name: "Inline field title", value: "Some value here", inline: true },
	)
	.addField("Inline field title", "Some value here", true)
	.setImage("https://i.imgur.com/wSTFkRM.png")
	.setTimestamp()
  .setFooter("Created by xWass", "https://i.imgur.com/wSTFkRM.png");
  


    //WELCOME COMMAND
    if (command === `welcome`) {
      message.channel.send(`${welcomeEmbed}`);
      return;
    }
    // HELP COMMAND
    if (command === `commands`) {
        message.channel.send(`${commandsEmbed}`);
          return;
    }
    // SHUTDOWN COMMAND
    if (command === `shutdown`) {
      if (message.author.id === "431487139298017282") {
        await message.channel.send(`${shutdownEmbed}`)
        await console.log(`The bot has been shut down by ${message.author}`)
        process.exit()
        return;
      }
      else message.channel.send(`${message.author}, you must be the bot"s owner to use this command.`)
      return;
    }
    // CHANNEL LOCK COMMAND
    if (command === `lock`) {
      if(!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send(`${message.author}, You must be a moderator to use this command`)
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
        message.channel.send(`${message.author}, You must be a moderator to use this command`);
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.channel.send("I do not have permission to use this command");
        return;
      }
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.add(role);
      message.channel.send(`${muteEmbed}`);
      console.log(`${member} has been muted by ${message.author}.`)
      return;
    }
    // SUPERMUTE COMMAND (NO PERMS)
    if (command ===`supermute`) {
      message.guild.roles.cache.find(r => r.name === "Muted");
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.add(role);
      message.channel.send(`${muteEmbed}`);
      console.log(`${member} has been super muted by ${message.author}.`)
      return;
    }
    // UNMUTE COMMAND
    if (command ===`unmute`) {
      message.guild.roles.cache.find(r => r.name === "Muted");
      if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(`${message.author}, you must be a moderator to use this command`);
        return;
      }
      if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.channel.send("I do not have permission to use this command.");
        return;
      }
      const role = message.guild.roles.cache.find(r => r.name === "Muted");
      member.roles.remove(role);
      message.channel.send(`${unmuteEmbed}`);
      console.log(`${member} has been unmuted by ${message.author}.`)
      return;
    }
        // SUPER UNMUTE COMMAND (NO PERMS)
        if (command ===`superunmute`) {
          message.guild.roles.cache.find(r => r.name === "Muted");
          const role = message.guild.roles.cache.find(r => r.name === "Muted");
          member.roles.remove(role);
          message.channel.send(`${unmuteEmbed}`);
          console.log(`${member} has been super unmuted by ${message.author}.`)
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
        message.channel.send(`${message.author}, you must be a moderator to use this command`);
        return;
      }
        if(!amount) return message.channel.send("You need to provide a number of messages to delete.")
        if(amount > 1000) return message.channel.send("You cannot clear more than 1000 messages at once")
      if(amount < 1) return message.channel.send("You need to delete atleast one messages")
        await message.channel.messages.fetch({limit: amount}).then(messages => {
          message.channel.bulkDelete(messages)
          message.channel.send(`${amount} messages cleared!`);
          console.log(`${amount} messages cleared by ${message.author} in ${message.channel}.`)
          return;
      });
    }
        // SUPER CLEAR COMMAND (NO PERMS)
        if (command === `superclear`) {
          if(!amount) return message.channel.send("You need to provide a number of messages to delete.")
          if(amount > 1000) return message.channel.send("You cannot clear more than 1000 messages at once")
          if(amount < 1) return message.channel.send("You need to delete atleast one messages")
          await message.channel.messages.fetch({limit: amount}).then(messages => {
              message.channel.bulkDelete(messages)
              message.channel.send(`${amount} messages cleared!`);
              console.log(`${amount} messages super cleared by ${message.author} in ${message.channel}.`)
              return;
          });
        }
    // WARN COMMAND
    if (command === `warn`) {
        if(!message.member.hasPermission("KICK_MEMBERS")) {
          return message.channel.send(`${message.author}, you must be a moderator to use this command`)
        }
    const user = args[0];
    const userLength = user.length;
    const reason = args.join(" ").slice(userLength);
      if(!args[0]) return message.reply("please provide a user to warn.");
        if(!args[1]) return message.reply("please provide the reason you are warning them..");
    member.send(`You have been warned for${reason}`);
      message.channel.send(`${warnEmbed}`);
        console.log(`${member} has been warned by ${message.author} for ${reason}`)
          return;
    }
        // SUPER WARN COMMAND (NO PERMS)
        if (command === `superwarn`) { 
      const user = args[0];
      const userLength = user.length;
      const reason = args.join(" ").slice(userLength);
        if(!args[0]) return message.reply("please provide a user to warn.");
          if(!args[1]) return message.reply("please provide the reason you are warning them..");
      member.send(`You have been warned for${reason}`);
        message.channel.send(`${member} has been super warned for${reason}`);
          console.log(`${member} has been super warned by ${message.author} for ${reason}`)
            return;
      }
    // KICK COMMAND
      //PERMCHECK
    if (command === `kick`) {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${message.author}, you must be a moderator to use this command`)
      }
      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${message.author}, I can not unban this user because I do not have the permission to do so.`)
      }
        // Kick
        member
            .kick()
            .then((member) => {
                // Successmessage
                message.channel.send(
                    `${kickEmbed}`
                );
                console.log(`${member} has been successfully kicked!`)
                return;
            })
            .catch(() => {
                // Failmessage
                message.channel.send("Access Denied");
                return;
            });
    }
    // BAN COMMAND
      // Perm Check
    if (command === `ban`) {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, you must be a moderator to use this command`)
      }
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, I can not unban this user because I do not have the permission to do so.`)
      }
        // ban
        member
            .ban()
            .then((member) => {
                // Successmessage
                message.channel.send(`${banEmbed}`);
                    console.log(`${member} has been successfully banned.`)
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
          return message.channel.send(`${message.author}, you must be a moderator to use this command`)
        }
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
          return message.channel.send(`${message.author}, I can not unban this user because I do not have the permission to do so.`)
        }
        const userID = args[0]
          message.guild.fetchBans().then((bans) => {
              if (bans.size == null)
                return;
              const bUser = bans.find(b => b.user.id == userID);
              if (!bUser)
                return;
              message.guild.members.unban(bUser.user);
              message.channel.send(`${unbanEmbed}`);
              console.log(`${member} has been successfully unbanned by ${message.author}`)
            });
          };
});
client.login(config.token)
