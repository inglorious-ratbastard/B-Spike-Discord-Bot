module.exports = {
  name: "join",
  desciption: "-game-connect",
  execute(msg, args) {
    msg.channel.send(`*${msg.author} has Joined the Game!*`);
  }
}