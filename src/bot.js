require("dotenv").config();

const { TOKEN } = process.env;
const { Client, Collection } = require("discord.js");
const {readdirSync} = require("fs")

const client = new Client({ intents: 131071 });
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];

const functionFolders = readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = readdirSync(`./src/functions/${folder}`).filter(
    (file) => file.endsWith(".js")
  );
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.login(TOKEN)

client.handleEvents();
client.handleCommands();
client.handleComponents();
