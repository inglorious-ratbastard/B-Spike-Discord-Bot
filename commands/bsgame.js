module.exports = {
  name: "game",
  desciption: "b-spike gameplay",
  execute(msg, args){
    msg.channel.send("**B-Spike** is a game started by one player and requires that anyone playing refrains from saying any word that starts with the letter **'B'** unless they follow it by saying **'Spike'**. Failure to follow with **Spike** allows the other players to punch that person until they give in and say **Spike**.");
  }
}