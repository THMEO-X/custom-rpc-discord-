require("dotenv").config();
const Discord = require("discord.js-selfbot-v13");
const keepAlive = require("./keep_alive");

keepAlive();

const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});




const DISCORD_TOKEN =process.env.DISCORD_TOKEN;


const APPLICATION_ID = "1460999009421230090";


const LARGE_IMAGE_URL =
  "https://cdn.discordapp.com/avatars/1390674997777010770/0b55fd397f1bf25834fc3c19586f2c4a.png?size=4096";


const SMALL_IMAGE_URL =
  "https://cdn.discordapp.com/attachments/1170739270093381714/1285227952707076187/image0.gif";


const BUTTON_1_LABEL = "Github";
const BUTTON_1_URL   = "https://github.com/THMEO-X/custom-rpc-discord-.git";

const BUTTON_2_LABEL = "Discord Sever";
const BUTTON_2_URL   = "https://discord.gg/VgqRgUgKzM";



client.on("ready", () => {
  console.clear();
  console.log(`${client.user.tag} - login success`);

  const rp = new Discord.RichPresence(client)
    .setApplicationId(APPLICATION_ID)
    .setType("Competing")
    .setName("Học là chính")
    .setDetails("sớm thôi, một hành trình mới trong 5 tháng")
    .setStartTimestamp(Date.now())


    .setAssetsLargeImage(LARGE_IMAGE_URL)
    .setAssetsLargeText("Large Image")
    .setAssetsSmallImage(SMALL_IMAGE_URL)
    .setAssetsSmallText("Small Image")


    .addButton(BUTTON_1_LABEL, BUTTON_1_URL)
    .addButton(BUTTON_2_LABEL, BUTTON_2_URL);

  client.user.setPresence({
    
    activities: [rp]
    
  });

  console.log("Rich Presence started (2 Buttons max)");
});

client.login(DISCORD_TOKEN);