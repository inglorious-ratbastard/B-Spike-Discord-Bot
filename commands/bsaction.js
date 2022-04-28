module.exports = {
  name: "action",
  desciption: "b-spike actions",
  execute(msg, args) {
    msg.channel.send("To begin a game of B-Spike use the **b$!start** command. Only one instance of the game can be initialized. Use the **b$!join** command to join an existing game within the 5 min. delay period. You can use the **b$!invite** *@username* command to bring more players to the game. To punch an offending player use **b$!punch** *@username* or to decalre Spike use the **b$!spike** command.");
  }
}