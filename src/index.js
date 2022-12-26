const Discord = require('discord.js')
const client = new Discord.Client({ disableMentions: 'all' })
const { prefix, token } = require('./config.json')
client.on('ready', async () => {
        client.user.setActivity('real shitty bot', {type: 'WATCHING' });
        console.log(`watching ${client.users.cache.size} users and ${client.guilds.cache.size} guilds.`)
});

client.on('message', async message => {
setInterval(() => {
    let responses = [
                '@everyone @here PLEASE BUY PREMIUM, I WONT WORK WITHOUT IT', 
                '@everyone @here Make sure to buy your premium web3 subscription which is just used to sound cool and make teens buy it and all that money will be used to fuel our pockets', //     makes fun at mee6 WEB3 which is very scummy and am pretty sure breaks tos  
                '@everyone @here Get free credits when your community members vote and spend them on your MEE6 subscription which needs premium to work', // MEE6 credits which need premium to work also breaks top.gg tos
                '@here i am a bto htat hsa speling erors thta was onyl fixde in 2020',// makes fun at mee6 spelling errors that where only fixed in 2021  or 2020 idk
                '@here Dont use Fred boat use my crappy music plugin which can only play music up to 2 Minutes', 
                '@everyone @here Don\'t forget to use /vote to get mee6 credits which needs premium to work so you need premium to get premium',
                '"You need premium to get premium -Kacper Podpora#5321"',
                '"mee6 is a f**cking joke -Kacper Podpora#5321"',
                'PLEASE I AM A SHITTY PAID BOT, BUY PREMIUM @everyone @here', 
                'PLEASE BUY PREMIUM @everyone @here I will suck cok', 
                '@everyone my developer poor ples buy premium', 
                'don\'t invite other bots, they noob just buy mee6 premium @everyone', 
                '@everyone @here I am MEE6 and pls buy premium', 
                '@everyone MY PREMIUM IS VERY SHITTY LIKE ME, SO BUY IT', 
                '@everyone Just buy premium, cause I am a shitty paid bot',
                '@here Dont forget to sell your kidney before buying premimum.',
                'Buy premium to get all the shitty commands I have and no one will want to use (@here oops)',
                '@everyone Can y\'all just ping @everyone in all the other servers and tell em to buy premium',
                'Mee6 developer was drunk when he made mee6 @everyone',
                '@everyone Can y\'all just ping @here in all the other servers and tell em to buy premium',
                'I have so many good features like pinging @here @everyone and telling them to buy premium',
                'Get 20% more XP for 12h by voting for MEE6 on top.gg.\nEvery 12 hours, you can vote for MEE6 on top.gg, which would help us stand out at the top.gg website.\nWhat are you waiting for? To the voting page!',
        ]
    message.channel.send(responses[Math.floor(Math.random()*responses.length)]);
    
    }, 1000)
    
});

client.login(token)
