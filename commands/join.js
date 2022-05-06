module.exports = {
  name: "join",
  desciption: "-game-connect",
  execute(msg, args) {
    
    const room = msg.guild.channels.cache.find(channel => channel.name === "b-spike-game-room");
    room.updateOverwrite(msg.author.id, {
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
    }); 
    room.send(`*${msg.author} has Joined the Game!*`);
    
  }
}
