const Discord = require('discord.js')
const client = new Discord.Client({ disableMentions: 'all' })
const { prefix, token } = require('./config.json')
client.on('ready', async () => {
        client.user.setActivity('real shitty bot', {type: 'WATCHING' });
        console.log(`watching ${client.users.cache.size} users and ${client.guilds.cache.size} guilds.`)
});

client.on('message', async message => {
    let responses = ['@everyone @here PLEASE BUY PREMIUM, I WONT WORK WITHOUT IT', 
        'PLEASE I AM A SHITTY PAID BOT, BUY PREMIUM @everyone @here', 
        'PLEASE BUY PREMIUM @everyone @here I will suck cok', 
        '@everyone my developer poor ples buy premium', 
        'dont invite other bots, they noob just buy mee6 premium @everyone', 
        '@everyone @here I am MEE6 and pls buy premium', 
        '@everyone MY PREMIUM IS VERY SHITTY LIKE ME, SO BUY IT', 
        '@everyone Just buy premium, cause I am a shitty paid bot',
        'Buy premium to get all the shitty commands I have and no one will want to use (@here oops)',
        '@everyone Can y\'all just ping @everyone in all the other servers and tell em to buy premium',
        'Mee6 developer was drunk when he made mee6 @everyone',
        '@everyone Can y\'all just ping @here in all the other servers and tell em to buy premium',
        'I have so many good features like pinging @here @everyone and telling them to buy premium',
        ]
    message.channel.send(responses[Math.floor(Math.random()*responses.length)]);
});

client.login(token)