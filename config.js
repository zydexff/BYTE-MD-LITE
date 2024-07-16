const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923072380380'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'talkdrove@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "923072380380"
global.devs = '923072380380';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtXR2VJYmVxNzBvYnc0dEtxMkxPOWtwNUxXWUNiNEFqanhtNDdObk5VMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXFQMVYzLzVUWGJ2U1hDZVVqS0hYV2VkbUFTTTdVenR3VXVqSFBtSloyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRi82ZEVFaCtPWVZOWmEycVJOQmhvMUxNQThHdEtzd0c4QXJ1YWdScDF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvdjk1blRQNmw1c2N4ZjF6NERjaGNkc2YzbmJ6SkRrMEY1N3p5TmF0T0JRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIQTRuZjRmZGVBT1NkU0MwNUZ2bDdERi81UU5WbGtWY1JFV1BPMWVzSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh5TlVsTEpON1piUk1IWHJsdTc1UGUrYnVQeGtZWFJxZEo3cWowYWZ4bUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlYdFowa0RBYjhGTEJqR3kxcjZOL2tKc3dJcmNNQ3pHMnAycGZ4OWhubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3lFMXRxNGZRallLVFBTZkplT2Z1WjBmRnpmV1Z1NnNvd3Zlb3o4VU1UZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJabDh6RythUTFVM21yMzd6VHBhUFhlN3lRbWNJZlNaaE4yK3NEWkYxbmhvNmR1eTkyWDRHeHdPL3NoUk1hZ2NxQytVaTEzNjgwVkJTMTZlNFZ0YWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6IkNjWVpFb1NHWVpxUlJ1cnNJeVN4bmd2MGVSNjFOSUJLTC9CbnJTREd5V0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxjdzdwM24xUVotSHRLRy01RllMR3ciLCJwaG9uZUlkIjoiZjFhNGYwYTAtYWUyZS00OGUwLWI3NjEtMDQwMTBlNmRlY2YwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3d2xleVJKRW1FbENua2liZS9RMFJ0RnB3UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUmQ4cnRWdmlqNTVXaDhpaEViL2NONTFEZFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjQ0NExRUDQiLCJtZSI6eyJpZCI6IjUwOTU1NTY0MTI1OjY1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQM3RwdE1GRU9ubzI3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYUTlhUVFSQy9XRzVma1B2K3h0VE9ISkkxbUUwdFpBZ0g1ZkdyaWdzZGtjPSIsImFjY291bnRTaWduYXR1cmUiOiJMQ1kxSExPRmh4a0p3bTZjMExlVE5TQzFBK1RhME5lbHNCd2Vxay9pTGRTZEJBOG5XZXVBQUtpQmpKbnQyR1ozd3h4VnFYWEdXSVM4VHd4Qkh3QWdCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL3lKblNRM1lUcjVJZ2lWdHRUTnpXZTRaRWdRcGlpZDczNEhJczlPUUJ6S24zU2Izdm9lcjVTZUMzaXFFZW9BM3Y4bGo1dXdPbVJHaklHWmhrNys5Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk1NTU2NDEyNTo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWMFBXa0VFUXYxaHVYNUQ3L3NiVXpoeVNOWmhOTFdRSUIrWHhxNG9MSFpIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMTY5MDEzfQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'POWERED BY TALKDROVE',
  
  botname:   process.env.BOT_NAME === undefined ? "BYTE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'TalkDrove' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'love' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*POWERED BY TALKDROVE* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'BYTE-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
