## B-Spike Discord Bot
#### B-Spike Discord Game Bot | Word Endurance Game

#### **About:**
**B-Spike** was an endurance and tolerance game played by strong-willed people willing to take a punch or few. This bot is a replica of that game and those good times we had playing it back in the day. 

#### **Rules & Gameplay:**
The rules are simple! Once the game has started, anyone playing **cannot** say any word that starts with the letter **B**. Doing so allows other players to virtually **'punch'** the offending player until they've countered by saying **Spike!** either immediately after the word or at end of the sentence. The last remaining players who haven't chosen to opt-out of the game are considered to be the winners.
___
#### **Commands:**
Users can use the `@B-Spike` command to initilize a response from the bot,  `b$!$action` to list all commands or `b$!game` for futher assistance. Full [documentation](#./commands/command.md) about this bot's commands has been provided for additional support.  
___
#### **Express Server and Live Hosting:**
This bot is built with a Node-Express backend server for the purpose of persistent hosting. This simple server is pinged by [UptimeRobot](https://uptimerobot.com) at a preset interval thus allowing the bot to remain active even during your host site's activity timeout settings. 
*The server will run on a default `PORT` unless specified otherwise.*
___
#### **How to Install and Run:**
1. Clone the repository
`git clone` 
2. Install the dependencies
`npm install` 
3. Create environment file and set bot credentials
 add `.env` file to your project folder
4. Run the Bot (also starts the Express server)
`npm index`
5. How to Run the Server (standalone version)
`npm server`

*The bot `TOKEN`, `ID` number, and Server `PORT` number must be properly configured within your own global enviroment `.env` file otherwise it will not work.*
___
#### **Source and License:**
**B-Spike Discord Bot** was created by [Javier Yzaguirre](https://github.com/inglorious-ratbastard) and is considered free and open source to use as reference for those wanting to create their own bot or contribute to this project. 
___
#### **Reporting Bugs or Issues:**
If you would like to report a **Bug** or **Issue** in this project feel free to do so under the **Issues** tab or contact me directly about any major concerns. Ideas for new features are also welcomed. Please address these by matters by sending a **Pull Request** as they will be reviewed for consideration. 
___
##### **External Resources:**
[DiscordJS](https://discord.js.org/#/docs/discord.js/stable/general/welcome)<br>
[Discord Developer Portal](https://discord.com/developers/docs/intro)<br>
[Repl.it](https://repl.it/)<br>
[UptimeRobot](https://uptimerobot.com/)
