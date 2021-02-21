const Discord = require('discord.js')
const client = new Discord.Client({ disableMentions: 'all' })
const { prefix, token } = require('./config.json')
client.on('ready', async () => {
        client.user.setActivity('real shitty bot', {type: 'WATCHING' });
        console.log(`watching ${client.users.cache.size} users and ${client.guilds.cache.size} guilds.`)
});

client.on('message', async message => {
    let responses = ['@everyone @here PLEASE BUY PREMIUM, I WONT WORK WITHOUT IT', 'PLEASE I AM A SHITTY PAID BOT, BUY PREMIUM @everyone @here', 'PLEASE BUY PREMIUM @everyone @here I will suck cok', '@everyone my developer poor ples buy premium', 'dont invite other bots, they noob just buy mee6 premium @everyone']
    message.channel.send(responses[Math.floor(Math.random()*responses.length)]);
});

client.login(token)