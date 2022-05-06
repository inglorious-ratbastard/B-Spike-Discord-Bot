const Discord = require("discord.js");
const bot = new Discord.Client();
require('dotenv').config();

const app = require('./server');

const PREFIX = "b$!";
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
  console.log("Chew bubblegum and kick some ass!");
  /* console.log(Migrated into ${bot.guilds.cache.size} Servers`); */
});

bot.on("message", msg => {
  if (msg.guild === null) return;
  if (msg.author.bot) return;

  if (msg.mentions.members.first() !== undefined){
    if(msg.mentions.members.first().id == process.env.ID){
        msg.channel.send('*If you need help with this game bot try **b$!game** for the general rules & gameplay or **b$!action** for the game commands. Please be familiar with this game before playing. Best of luck, Spike!*')
    }
  }

  let args = msg.content.substring(PREFIX.length).split(" ");
  
  let spikeStart = false; 
  let startLog = require('./startlog.json');
  let playerId = require('./userlog.json');
 
  var Player = {
      id: msg.member.user.id,
      tag: msg.member.user.tag,
  };
  
  function gameStatus(msg, args){
   /* Add Gameplay Timer on Start */
    if(args.includes("start")){
      spikeStart = !false;
      startLog.push(spikeStart);
      startLog.push(Player);
      // playerId.push(Player); 
      console.log("\nGame Initiated: " + spikeStart);
      // console.log(playerId); 
      console.log(startLog);
      return; 
    }
    if(args.includes("join")){
      if(spikeStart == !false){
         startLog.push(Player);
         console.log(startLog);
         // playerId.push(Player);
         // console.log(playerId); 
       } 
    }  
  }

  switch(args[0]){

    case "game":
      bot.commands.get('game').execute(msg, args);
      break;
    
    case "ass":
      bot.commands.get('ass').execute(msg, args);
      break;

    case "action":
      bot.commands.get('action').execute(msg, args);
      break;    
    
    case "start":
      gameStatus(msg, args);
      bot.commands.get('start').execute(msg, args);
      break;

    case "join":
      gameStatus(msg, args);
      bot.commands.get('join').execute(msg, args, spikeStart);
      break;

    case "invite":
      gameStatus(msg, args);
      bot.commands.get('invite').execute(msg, args);
      break;  
  } 
});

bot.on("error", (e) => {
  console.error(e);
  console.log("We're all out of bubblegum..");
}); 

bot.login(process.env.TOKEN); 