module.exports = {
  name: "start",
  desciption: "-game-init",
  execute(msg, args){

 if (msg.guild.channels.cache.find(channel => channel.name === 'B-Spike! Game Channels')) { 
    msg.reply(`*Sorry but a Game is already being played.. \n Please wait for the next Game to begin shortly..*`).catch(console.error);
            return; 
        }   

    msg.channel.send(`*${msg.author} has initialized a new game of B-Spike!*`);   
    
  msg.guild.channels.create('B-Spike! Game Channels', {
        type: 'category',
        permissionOverwrites: [{
              id: msg.guild.id,
              //deny: ['MANAGE_MESSAGES'],
              allow: ['VIEW_CHANNEL']
          }]
      }).then(cat => {
    
  msg.guild.channels.create('B-Spike! Game Room', {
            type: 'text',
            parent: cat,
            permissionOverwrites: [{
                   id: msg.guild.id,
                   //deny: ['MANAGE_MESSAGES'],
                   deny: ['VIEW_CHANNEL']
                },
            {
               id: msg.guild.roles.cache.get(process.env.roleID),
               allow: ['VIEW_CHANNEL'],
            }]
            })
          
      })
      .catch(console.error);
  
  }
}  
