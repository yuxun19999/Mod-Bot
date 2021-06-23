
module.exports = {
    name: 'uptime',
    description: 'Show client uptime.',
    async execute(Discord, message) {
            const someTimeInMS = message.client.uptime;
    
            let uptimeSeconds = someTimeInMS / 1000
    
            let days = Math.floor(uptimeSeconds / 86400)
            uptimeSeconds %= 86400
    
            let hours = Math.floor(uptimeSeconds / 3600)
            uptimeSeconds %= 3600
    
            let minutes = Math.floor(uptimeSeconds / 60)
            let seconds = Math.floor(uptimeSeconds % 60)
    
            let dateString = `${days} day${days === 1 ? "" : "s"}, ${hours} hour${hours === 1 ? "" : "s"}, ${minutes} minute${minutes === 1 ? "" : "s"}, ${seconds} second${seconds === 1 ? "" : "s"}`
            message.channel.send(`The client has been up for ${dateString}`)
            return;
    }
}