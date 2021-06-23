# Simple-Moderator-Bot
Simple Discord Moderator Bot

I have coded a simple moderation bot, including a variety of commands as shown below. I plan to add timed mutes in the future, but that will have to wait.
The bot requires these modules/packages:
`discord.js`
`ms`
`fs`

`List of commands:`

!kick - Kicks the mentioned user. - Usage: `!kick <@user>`

!ban - Bans the mentioned user - Usage: `!ban <@user>`

!unban - Unbans the user based on ID - Usage: `!unban <@userID>`

!mute - Mutes the user based on a role labeled "Muted" - Usage: `!mute <@user> [time]` THE MUTE COMMAND RELIES ON A ROLE CALLED "Muted"! MAKE SURE YOU HAVE ONE

!unmute - Unmutes the user based on a role labeled "Muted" Usage: `!unmute <@user>` THE UNMUTE COMMAND RELIES ON A ROLE CALLED "Muted"! MAKE SURE YOU HAVE ONE

!welcome - Welcomes a new user - Usage: `!welcome`

!commands - Displays commands - Usage: `!help`

!shutdown - Turns off your bot. - Usage: `!shutdown` // CHECK LINE 181! PUT YOUR OWN DISCORD ID IN THE EMPTY QUOTES!

!ping - Tells you your ping - Usage: `!ping`

!uptime - Shows the bot's uptime - Usage: `!uptime`

!userinfo - Shows a user's information - Usage: `!userinfo [mention]`

!roleinfo - Shows a role's information - Usage: `!roleinfo <role-mention>`

!clear - Clears messages in the chat. - Usage: `!clear <amount>`

!lock - Locks or unlocks the current channel. - Usage: `!lock on` (Locks the channel) `!lock off` (Unlocks the channel)
