/*
╭=================================================
|────「 AUTORESBOT.COM 」──✦
*/


require('./ac')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs            = require('fs')
const pino          = require('pino')
const chalk         = require('chalk')
const path          = require('path')
const readline      = require("readline");
const axios         = require('axios')
const FileType      = require('file-type')
const yargs         = require('yargs/yargs')
const _             = require('lodash')
const { Boom }      = require('@hapi/boom')
const moment        = require('moment-timezone')
const PhoneNumber   = require('awesome-phonenumber')
const figlet        = require("figlet")
const usePairingCode   = true
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep }= require('./lib/myfunc')
const question      = (text) => {
const rl            = readline.createInterface({input: process.stdin,output: process.stdout});
return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

var low
try {low = require('lowdb')} catch (e) {low = require('./lib/lowdb')}
const { Low, JSONFile } = low
const mongoDB           = require('./lib/mongoDB')
const store             = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const color             = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

global.db_welcome      = JSON.parse(fs.readFileSync('./db/welcome.json', 'utf-8')) || {};
global.opts             = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db               = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ? new mongoDB(opts['db']) : new JSONFile(`src/database.json`))
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

function colorfulConsoleLog(text, color) {
    const colors = {
        reset: '\x1b[0m',
        bright: '\x1b[1m',
        dim: '\x1b[2m',
        underscore: '\x1b[4m',
        blink: '\x1b[5m',
        reverse: '\x1b[7m',
        hidden: '\x1b[8m',
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
    };

    const lineLength = process.stdout.columns || text.length + 4; // Gunakan lebar terminal, jika tersedia
    const line = '='.repeat(lineLength);
    const line2 = '_'.repeat(lineLength);
    console.log(`${colors[color]}${colors.reset}\n`);
    console.log(`${colors[color]}${line}`);
    console.log(`${colors[color]}| ${text} |`);
    console.log(`${colors[color]}${line}${colors.reset}`);
    console.log(`${colors[color]}${colors.reset}\n`);
}

colorfulConsoleLog('AUTORESBOT VERSION 1.0.3', 'yellow');

async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const autoresbot = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});

if(usePairingCode && !autoresbot.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif (Awali Dengan 628) :\n');
		const code = await autoresbot.requestPairingCode(phoneNumber.trim())
		console.log(`PhoneNumber: ${phoneNumber}`)
        console.log(`Pairing code: ${code}`)
}

autoresbot.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
    let decode = jidDecode(jid) || {}
    return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
}



autoresbot.ev.on('messages.upsert', async chatUpdate => {
try {
chatinfo         = chatUpdate.messages[0]
if (!chatinfo.message) return
chatinfo.message = (Object.keys(chatinfo.message)[0] === 'ephemeralMessage') ? chatinfo.message.ephemeralMessage.message : chatinfo.message
if (chatinfo.key && chatinfo.key.remoteJid === 'status@broadcast') return
if (!autoresbot.public && !chatinfo.key.fromMe && chatUpdate.type === 'notify') return
if (chatinfo.key.id.startsWith('BAE5') && chatinfo.key.id.length === 16) return
m = smsg(autoresbot, chatinfo, store)
require("./autoresbot")(autoresbot, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})




/*
╭=================================================
|────「 AUTO NGEBLOCK KALO DI TELPON 」──✦
*/


/* 
autoresbot.ev.on('call', async (celled) => {
let botNumber = await autoresbot.decodeJid(autoresbot.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await autoresbot.sendTextWithMentions(kopel.from, `*${autoresbot.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
autoresbot.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await autoresbot.updateBlockStatus(kopel.from, "block")
}
}
}
})
*/



autoresbot.ev.on('group-participants.update', async (anu) => {

try {
let metadata = await autoresbot.groupMetadata(anu.id)
let participants = anu.participants

for (let num of participants) {
// Get Profile Picture User
try {
    ppuser      = await autoresbot.profilePictureUrl(num, 'image')
    pushname_   = await autoresbot.getName(num)
} catch {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    pushname_ = `@${num.split('@')[0]}`
}





// Get Profile Picture Group
try {
    ppgroup = await autoresbot.profilePictureUrl(anu.id, 'image')
} catch {
    ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}



/*
╭=================================================
|────「 KALAU ADA MEMBER YANG MASUK GRUB 」──✦
*/
if (anu.action == 'add') {

    const db_welcome      = JSON.parse(fs.readFileSync('./db/welcome.json', 'utf-8')) || {};


    if (Array.isArray(db_welcome[anu.id])) {
        
           if (db_welcome[anu.id][0].status == 'on') {
                welcome_status = 'ON'


            // pushname_
            let welcome_1 = db_welcome[anu.id][0].text
            welcome_1 = welcome_1.replace('$NAME',pushname_)
            welcome_1 = welcome_1.replace('$GROUP',metadata.subject)


            autoresbot.sendMessage(anu.id, { text: welcome_1,  contextInfo: { externalAdReply: { title: `${botname}`, body: `${ownername}`,
                 thumbnailUrl: ppuser,
                 sourceUrl: "https://portofolio-yosepwd.yosepwahyu.repl.co/",
                 mediaType: 1,
                 renderLargerThumbnail: true
            }}})



            }else {
                welcome_status = 'OFF'
            }


    }else {
        // JIKA WELCOME TIDAK ADA ATAU OFF
         let a = `👋🏻 *Halo Kak @${num.split('@')[0]}*\n*Welcome To ${metadata.subject}*\n*Jangan Lupa Membaca Deskripsi Grup Ya 😋*

            Mari Join Grub Bot Comunity
            https://whatsapp.com/channel/0029VaIZqLT3GJOqN5NQ0B2Y`


              autoresbot.sendMessage(anu.id, { text: a,  contextInfo: { externalAdReply: { title: `${botname}`, body: `${ownername}`,
                     thumbnailUrl: ppuser,
                     sourceUrl: "https://portofolio-yosepwd.yosepwahyu.repl.co/",
                     mediaType: 1,
                     renderLargerThumbnail: true
                }}})
    }





} else if (anu.action == 'remove') {



/*
╭=================================================
|────「 KALAU ADA MEMBER YANG KELUAR/KICK GRUB 」──✦
*/

   /*
let b = `🕊️ Selamat Tinggal *@${num.split('@')[0]}*\nDia Keluar Dari Grup *${metadata.subject}*`
autoresbot.sendMessage(anu.id, {
     text: b, 
      contextInfo: {
         externalAdReply: {
         title: `${botname}`,
         body: `${ownername}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://autoresbot.com",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
    */
// await sleep(100)
// autoresbot.sendMessage(anu.id, { audio: fs.readFileSync('./mp3/sayonara.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})



} else if (anu.action == 'promote') {

/*
╭=================================================
|────「 KALAU ADA MEMBER DI PROMOSI JADI ADMIN 」──✦
*/
    //autoresbot.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Ciee Jadi Admin Di Group ${metadata.subject} ${metadata.desc}`  })



} else if (anu.action == 'demote') {
/*
╭=================================================
|────「 KALAU ADA MEMBER DI TURUNKAN JADI ADMIN 」──✦
*/

   // autoresbot.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Sekarang Kamu Gak Lagi Jadi Admin Group ${metadata.subject} ${metadata.desc}`})
  }


}
} catch (err) {
console.log(err)
}
})





autoresbot.ev.on('contacts.update', update => {
for (let contact of update) {
let id = autoresbot.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})

autoresbot.getName = (jid, withoutContact  = false) => {
id = autoresbot.decodeJid(jid)
withoutContact = autoresbot.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = autoresbot.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === autoresbot.decodeJid(autoresbot.user.id) ?
autoresbot.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}

autoresbot.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await autoresbot.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await autoresbot.getName(i + '@s.whatsapp.net')}\nFN:${await autoresbot.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/HbCl8qf3KQK1MEp3ZBBpSf\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}

autoresbot.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}

//Kalau Mau Self Lu Buat Jadi false
autoresbot.public = true


autoresbot.ev.on('creds.update', saveCreds)
 
autoresbot.downloadMediaMessage = async (message) => {
    let mime        = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream    = await downloadContentFromMessage(message, messageType)
    let buffer      = Buffer.from([])
    for await(const chunk of stream) {
    buffer          = Buffer.concat([buffer, chunk])}
    return buffer
} 



 
autoresbot.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await autoresbot.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}

autoresbot.sendText = (jid, text, quoted = '', options) => autoresbot.sendMessage(jid, { text: text, ...options }, { quoted })

autoresbot.sendTextWithMentions = async (jid, text, quoted, options = {}) => autoresbot.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 
autoresbot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await autoresbot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 
autoresbot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await autoresbot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 
 autoresbot.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 autoresbot.cMod = (jid, copy, text = '', sender = autoresbot.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === autoresbot.user.id
return proto.WebMessageInfo.fromObject(copy)}
autoresbot.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await autoresbot.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await autoresbot.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
autoresbot.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}

autoresbot.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await autoresbot.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}

autoresbot.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}



autoresbot.serializeM = (m) => smsg(autoresbot, m, store)
autoresbot.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(   chalk.redBright.bold(`Bad Session File, Please Delete Folder Autoresbot and Start Again`)  );
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log(  chalk.redBright.bold("Connection closed, reconnecting....")   );
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log( chalk.redBright.bold("Connection Lost from Server, reconnecting...")   );
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log(   chalk.redBright.bold("Connection Replaced, Another New Session Opened, Please Restart Bot")    );
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(  chalk.redBright.bold(`Device Logged Out, Please Delete Folder Autoresbot and Scan Again.`)  );
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log( chalk.redBright.bold( "Restart Required, Restarting...") );
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log( chalk.redBright.bold("Connection TimedOut, Reconnecting...")  );
connectToWhatsApp();
  } else {
console.log( chalk.redBright.bold(  `Unknown DisconnectReason: ${reason}|${connection}` )  );
connectToWhatsApp();
  }



} else if (connection === "open") {
/*
╭=================================================
|────「 KALAU BOT CONNECTED」──✦
*/
console.log(chalk.blueBright.bold('Status Bot: Connected') )
  // autoresbot.sendMessage('6289501427163' + "@s.whatsapp.net", { text: `*Connected! 🕊️*\n\nYour bot has successfully connected to the server\n\n*Warn : Dont Sell The Bot !!!*` });
}




});









return autoresbot
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
