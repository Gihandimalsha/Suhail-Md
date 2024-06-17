const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760789475";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_29_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICA4NixcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibURPV2lRK2xIMVdHOC9SWEdWdWg0L3JWNXh2eUNGVDZIbHp1eXBwR01FOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2MDc4OTQ3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTZBQzdFM0NGRjE1Nzg3MTJFNTA5MDM3NjIwQkY1Q0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NjEyOTg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjA3ODk0NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZBRDlEMzgwQUJDMTg2NjY5RUI0NDdBMEEyMDAxRjM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODYxMjk4OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxSG00M2JXbFJuU1kxV2lHQmV2NXp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQwYTZkMzY1LTc5NWQtNDlhYS1hNGM5LWYzNGQ2YWMxZjEwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAxNDAsXG4gICAgICA2LFxuICAgICAgMTQwLFxuICAgICAgMjUyLFxuICAgICAgODYsXG4gICAgICA1MSxcbiAgICAgIDY5LFxuICAgICAgMzcsXG4gICAgICAxMTEsXG4gICAgICAxNzYsXG4gICAgICAyMDQsXG4gICAgICAxLFxuICAgICAgMTcxLFxuICAgICAgMjYsXG4gICAgICAxMDEsXG4gICAgICAxNDYsXG4gICAgICAxMTcsXG4gICAgICA3NCxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICA5MSxcbiAgICAgIDE2NixcbiAgICAgIDE3NixcbiAgICAgIDQwLFxuICAgICAgOTQsXG4gICAgICAxNjksXG4gICAgICAxMTMsXG4gICAgICAxODEsXG4gICAgICAxMSxcbiAgICAgIDExMyxcbiAgICAgIDExMCxcbiAgICAgIDIyLFxuICAgICAgMTMwLFxuICAgICAgMTAsXG4gICAgICAxMzcsXG4gICAgICAxOTEsXG4gICAgICAxODksXG4gICAgICAyMTYsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDZYQlRTRlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYwNzg5NDc1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkwMDAxMzU4NTEyMzUxOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQm90IEFjY291bnRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeVp2ZjhDRVBibnY3TUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNleEkyYVB2Y281a05leE4yYkNVYWsxZ1lWMEVQR2JicXoyWUdjOUg4SGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicjlleEpEUkV2Z1RVWU5qRCtsZkUzcktMeTVubEJSSmQ0YVptOVk1dTNXKzlhWHFmZ2R5b1hQdVMwM3gyaWdpZnpCNHVHSHQweDlqMEd5VjVBdC91Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSXgwd3dsM3pPTGFJNWEraGRzVDRHSFQxT3pGdStNb0k3YnRvL1ZPQm9ybmsyd3pvSjRhbVpQTFZvcXRacHV2VHBvb2REa2tsai9WTWJsTy9QUlVKQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjA3ODk0NzU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjEyOTg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmloXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKaWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJENlZPM1R3dlRZSHExdnRpMWQ0WTlWNEJrMjV5a001ODFwT3lWN0RKT3NFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwNDIxMTkzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NjA3NjI5OTEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "`ASANKA MD`",
  ownername:process.env.OWNER_NAME|| "`ASANKA MD`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
