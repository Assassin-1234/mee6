const Discord = require('discord.js')
const client = new Discord.Client({ disableMentions: 'all' })
const { prefix, token } = require('./config.json')
var randstuuf = Math.floor((Math.random() * 4) + 1);

client.on('ready', async () => {
        client.user.setActivity('real shitty bot', {type: 'WATCHING' });
        console.log(`watching ${client.users.cache.size} users and ${client.guilds.cache.size} guilds.`)
});

client.on('message', async message => {
setInterval(() => {

    // formating is bad on purpose btw
         let premimum = ["@everyone @here PLEASE BUY PREMIUM, I WONT WORK WITHOUT IT"]
    let web = ['@everyone @here Make sure to buy your premium web3 subscription which is just used to sound cool and make teens buy it and all that money will be used to fuel our pockets']
       let freecredits = ['@everyone @here Get free credits when your community members vote and spend them on your MEE6 subscription which needs premium to work']
 let spellingerr = ['@here i am a bto htat hsa speling erors thta was onyl fixde in 2020']
     let music = ['@here Dont use Fred boat use my crappy music plugin which can only play music up to 2 Minutes']
  let votecredits = ['@everyone @here Don\'t forget to use /vote to get mee6 credits which needs premium to work so you need premium to get premium'] 
     let quote = ['"You need premium to get premium -Kacper Podpora#5321"']
    let letquote1 = ['"mee6 is a f**cking joke -Kacper Podpora#5321"']
       let crappypaidbot =['PLEASE I AM A SHITTY PAID BOT, BUY PREMIUM @everyone @here',]
 let plsbuypremimumcok = ['PLEASE BUY PREMIUM @everyone @here I will suck cok']
     let devpoor = ['@everyone my developer poor ples buy premium']
let noinvite = ['don\'t invite other bots, they noob just buy mee6 premium @everyone', ]
            let premimumbad = ['@everyone MY PREMIUM IS VERY SHITTY LIKE ME, SO BUY IT']
          let justbutit = ['@everyone Just buy premium, cause I am a shitty paid bot']
        let kidney = ['@here Dont forget to sell your kidney before buying premimum.',]
  let badcmd = ['Buy premium to get all the shitty commands I have and no one will want to use (@here oops)']
   let youallping = ['@everyone Can y\'all just ping @everyone in all the other servers and tell em to buy premium']
 let mee6devdrunk = ['Mee6 developer was drunk when he made mee6 @everyone']
  let somuchfeaturesping = ['I have so many good features like pinging @here @everyone and telling them to buy premium']
                            let t = ['Get 20% more XP for 12h by voting for MEE6 on top.gg.\nEvery 12 hours, you can vote for MEE6 on top.gg, which would help us stand out at the top.gg website.\nWhat are you waiting for? To the voting page!']


                            if (randstuuf == 1) {
                                message.channel.send(premimum[Math.floor(Math.random()*responses.length)]);
                              } else {
                                if (randstuuf == 2) {
                                    message.channel.send(web[Math.floor(Math.random()*responses.length)]);
                                } else {
                                  if (randstuuf == 3) {
                                    message.channel.send(freecredits[Math.floor(Math.random()*responses.length)]);
                                  } else {
                                    if (randstuuf == 4) {
                                        message.channel.send(spellingerr[Math.floor(Math.random()*responses.length)]);
                                    } else {
                                        if (randstuuf == 5 ) {
                                            message.channel.send(music[Math.floor(Math.random()*responses.length)]);
                                        } else {
                                            if (randstuuf == 6) {
                                                message.channel.send(votecredits[Math.floor(Math.random()*responses.length)]);
                                            } else {
                                                if (randstuuf == 7) {
                                                    message.channel.send(quote[Math.floor(Math.random()*responses.length)]);
                                                } else{
                                                    if (randstuuf == 8){
                                                        message.channel.send(letquote1[Math.floor(Math.random()*responses.length)]);
                                                    } else {
                                                        if (randstuuf == 9) {
                                                            message.channel.send(crappypaidbot[Math.floor(Math.random()*responses.length)]);
                                                        } else {
                                                            if (randstuuf == 10) {
                                                                message.channel.send(plsbuypremimumcok[Math.floor(Math.random()*responses.length)]);
                                                            } else{
                                                                if (randstuuf == 11) {
                                                                    message.channel.send(devpoor[Math.floor(Math.random()*responses.length)]);
                                                                } else {
                                                                    if (randstuuf == 12) {
                                                                        message.channel.send(noinvite[Math.floor(Math.random()*responses.length)]);
                                                                    } else {
                                                                        if (randstuuf == 13) {
                                                                            message.channel.send(premimumbad[Math.floor(Math.random()*responses.length)]);
                                                                        } else {
                                                                            if (randstuuf == 14) {
                                                                                message.channel.send(justbutit[Math.floor(Math.random()*responses.length)]);
                                                                            } else {
                                                                                if (randstuuf == 15){
                                                                                    message.channel.send(kidney[Math.floor(Math.random()*responses.length)]);
                                                                                } else{
                                                                                    if (randstuuf == 16) {
                                                                                        message.channel.send(badcmd[Math.floor(Math.random()*responses.length)]);
                                                                                    } else {
                                                                                        if (randstuuf == 17) {
                                                                                            message.channel.send(badcmd[Math.floor(Math.random()*responses.length)]);
                                                                                        } else {
                                                                                            if (randstuuf == 18) {
                                                                                                message.channel.send(youallping[Math.floor(Math.random()*responses.length)]);
                                                                                            } else {
                                                                                                if (randstuuf == 19) {
                                                                                                    message.channel.send(mee6devdrunk[Math.floor(Math.random()*responses.length)]);
                                                                                                } else {
                                                                                                    if (randstuuf == 20) {
                                                                                                        message.channel.send(somuchfeaturesping[Math.floor(Math.random()*responses.length)]);
                                                                                                    } else {
                                                                                                        if (randstuuf == 21) {
                                                                                                            message.channel.send(t[Math.floor(Math.random()*responses.length)]);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                  }
                                }
                              }
                              
    
    }, 1000)

    // message.channel.send(premimum[Math.floor(Math.random()*responses.length)]);
    
});

client.login(token)
