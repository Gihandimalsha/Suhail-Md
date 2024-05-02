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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94778963451";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_33_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTgwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ0IvZW1iQStwSlRJaFIvdDZVM3NCL1RqZTZ0cjdwY3JNZU5pSlM5N3p3az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3ODk2MzQ1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTFFODYyQUNCQTIwRDg0RDdBMzVDMkQ1OTJBQjcxMUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0NjY0MDAyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk0xVXg2VUZyVEJXcGdWRS12R2hQWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDdjOTgyODEtMDMzYS00YjA1LWJiNTQtNGQ4ZWY3ZmFjYmFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE5LFxuICAgICAgMjE5LFxuICAgICAgMjQ3LFxuICAgICAgNzQsXG4gICAgICA1LFxuICAgICAgODYsXG4gICAgICAzNyxcbiAgICAgIDEzOCxcbiAgICAgIDI0MixcbiAgICAgIDEwMyxcbiAgICAgIDE5NCxcbiAgICAgIDMwLFxuICAgICAgNTIsXG4gICAgICA0MSxcbiAgICAgIDEyMixcbiAgICAgIDE5MCxcbiAgICAgIDE3OSxcbiAgICAgIDE0NCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDE4MSxcbiAgICAgIDE5NCxcbiAgICAgIDEzMSxcbiAgICAgIDU5LFxuICAgICAgNCxcbiAgICAgIDIwLFxuICAgICAgNTYsXG4gICAgICAxNTQsXG4gICAgICAyNTEsXG4gICAgICAxNzIsXG4gICAgICAxMTYsXG4gICAgICAxNDYsXG4gICAgICAxNDAsXG4gICAgICAyMjAsXG4gICAgICAxODQsXG4gICAgICAyMzUsXG4gICAgICA4MixcbiAgICAgIDE5MSxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSlk1U1FCWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Nzg5NjM0NTE6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MjA0NjI0NjcyMzYwMTo0M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBc2Fua2Eg4p2k77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdtb05zREVMbmt6ckVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2dFo3ZzA2ajdFOWxYVCtNc2YxR0tFNzhxWTZ3U1U2SHhneW4xQ3pQeGhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjV0NG1wN3MrYjNWV3dhSGdQRmxrVlFPU1FDSzJiYitIT2Z4U3ltbmFYRGRSR1dGOVo0QWFHSE1oSmh3QUNmYjNtU0NJMkhLQU10dFFFZk5NN2VhaURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNCRy9wTHY0WkM5bDIvNERVZFhOU1EzSGh2S1kvRU9BRmFhcmVKeXNwZzVFTGhDQmFldlZaeXd2MWkyS1FLa3dOYnNHZXh5UC9lb0lvYjY5NWNtYWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc4OTYzNDUxOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0NjYzOTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVUvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
