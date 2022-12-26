const Discord = require('discord.js')
const client = new Discord.Client({ disableMentions: 'all' })
const { prefix, token } = require('./config.json')
var suckballsrandonmiser = Math.floor((Math.random() * 22) + 1)

client.on('ready', async () => {
        client.user.setActivity('real shitty bot', {type: 'WATCHING' })
        console.log(`watching ${client.users.cache.size} users and ${client.guilds.cache.size} guilds.`)
})

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
let assianhire =['@here @everyonewe will hire an assian if yo do not buy mee6 premium']

                            if (suckballsrandonmiser == 1) {
                                message.channel.send(premimum)
                              } else {
                                if (suckballsrandonmiser == 2) {
                                    message.channel.send(web)
                                } else {
                                  if (suckballsrandonmiser == 3) {
                                    message.channel.send(freecredits)
                                  } else {
                                    if (suckballsrandonmiser == 4) {
                                        message.channel.send(spellingerr)
                                    } else {
                                        if (suckballsrandonmiser == 5 ) {
                                            message.channel.send(music)
                                        } else {
                                            if (suckballsrandonmiser == 6) {
                                                message.channel.send(votecredits)
                                            } else {
                                                if (suckballsrandonmiser == 7) {
                                                    message.channel.send(quote)
                                                } else{
                                                    if (suckballsrandonmiser == 8){
                                                        message.channel.send(letquote1)
                                                    } else {
                                                        if (suckballsrandonmiser == 9) {
                                                            message.channel.send(crappypaidbot)
                                                        } else {
                                                            if (suckballsrandonmiser == 10) {
                                                                message.channel.send(plsbuypremimumcok)
                                                            } else{
                                                                if (suckballsrandonmiser == 11) {
                                                                    message.channel.send(devpoor)
                                                                } else {
                                                                    if (suckballsrandonmiser == 12) {
                                                                        message.channel.send(noinvite)
                                                                    } else {
                                                                        if (suckballsrandonmiser == 13) {
                                                                            message.channel.send(premimumbad)
                                                                        } else {
                                                                            if (suckballsrandonmiser == 14) {
                                                                                message.channel.send(justbutit)
                                                                            } else {
                                                                                if (suckballsrandonmiser == 15){
                                                                                    message.channel.send(kidney)
                                                                                } else{
                                                                                    if (suckballsrandonmiser == 16) {
                                                                                        message.channel.send(badcmd)
                                                                                    } else {
                                                                                        if (suckballsrandonmiser == 17) {
                                                                                            message.channel.send(badcmd)
                                                                                        } else {
                                                                                            if (suckballsrandonmiser == 18) {
                                                                                                message.channel.send(youallping)
                                                                                            } else {
                                                                                                if (suckballsrandonmiser == 19) {
                                                                                                    message.channel.send(mee6devdrunk)
                                                                                                } else {
                                                                                                    if (suckballsrandonmiser == 20) {
                                                                                                        message.channel.send(somuchfeaturesping)
                                                                                                    } else{
                                                                                                        if (suckballsrandonmiser == 21){
                                                                                                            message.channel.send(t)
                                                                                                        } else {
                                                                                                            message.channel.send(assianhire)
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

    // message.channel.send(premimum)
    
})

client.login(token)
