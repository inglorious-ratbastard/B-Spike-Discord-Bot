module.exports = {
  name: "invite",
  desciption: "-game-invite",
  execute(msg, args){
    const userb = msg.mentions.users.first();
  
      if(userb){
        const member = msg.guild.member(userb);
        msg.delete();
        if(member){
          msg.channel.send(`*${member.user} has been invited to play B-Spike! To join use the **b!play** command.*`);
        } else {
          msg.reply("That user isn\'t in this Guild");
        }
      }
   }
}