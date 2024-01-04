
const apikey_autoresbot = '694627b7a9de86cb3fceaf783410cc64';
const cap               = 'Buddy'
const grubwa            = 'https://chat.whatsapp.com/KJD2nB7j7lfHux9AVQCra4'
const autoresbot_version= 'Lvy-NPC'
const onlygroup         = 'https://telegra.ph/file/9099fdecd6a9b21cc156f.jpg'
const allmenu           = 'https://telegra.ph/file/8303c9aaba8c2c8dd1f8e.jpg'
const sleep_tebak       = 60000; // waktu main tebak
let publik              = true // true | false
let antispam_filter     = true // true | false




/* ===================「 *ᴅᴏɴᴛ ᴇᴅɪᴛ* 」─=================== */
require('./ac')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const fs                = require('fs')
const util              = require('util')
const chalk             = require('chalk')
const os                = require('os')
const axios             = require('axios')
const fsx               = require('fs-extra')
const ffmpeg            = require('fluent-ffmpeg')
const moment            = require('moment-timezone')
const { color, bgcolor }= require('./lib/color')
const { ssweb }         = require('./lib/ssweb')
const { quote }         = require('./lib/quote')
const { UploadTph }     = require('./lib/upload')
const { Primbon }       = require('scrape-primbon')
const primbon           = new Primbon()
const jsobfus           = require('javascript-obfuscator')
const cheerio           = require('cheerio')
const ytdl              = require("ytdl-core")
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl }   = require('./database/mediafire.js')
const yts               = require('./scrape/yt-search')
const { ytSearch }      = require('./scrape/yt')
const listcolor         = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor       = listcolor[Math.floor(Math.random() * listcolor.length)]
let tak_dimenu          = true;
let wspam_fil           = ''





/* ===================「 DATABASE 」─=================== */
global.db           = global.db || {};
global.db.data      = JSON.parse(fs.readFileSync('./db/database.json', 'utf-8')) || {};
global.db.data.game = global.db.data.game || {};
global.totalAllfitur = 280
global.db.data.game = {
  tebaklagu         : [],
  _family100        : [],
  kuismath          : [],
  tebakgambar       : [],
  tebakkata         : [],
  caklontong        : [],
  caklontong_desk   : [],
  tebakkalimat      : [],
  tebaklirik        : [],
  tebaktebakan      : [],
  ...(global.db.data.game || {})
};


if (!global.antiSpam) {
  global.antiSpam = {};
}



const { tebaklagu, _family100, kuismath, tebakgambar, tebakkata, caklontong, caklontong_desk, tebakkalimat, tebaklirik, tebaktebakan } = global.db.data.game;


function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}
function tanggal_add(hari) {
  const tanggalIni = moment.tz('Asia/Jakarta');
  
  const tanggalBeberapaHariKedepan = tanggalIni.clone().add(hari, 'days');
  
  return tanggalBeberapaHariKedepan.valueOf();
}

function formatUptime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
}



const db_mute     = readJsonFile('./db/mute.json');
const db_pengguna = readJsonFile('./db/user.json');
const db_owner    = readJsonFile('./db/premium.json')
const db_vn       = readJsonFile('./db/vnadd.json')
const db_document = readJsonFile('./db/docu.json')
const db_zip      = readJsonFile('./db/zip.json')
const db_apk      = readJsonFile('./db/apk.json')
const db_antilink = readJsonFile("./db/antilink.json")
const db_antidel  = readJsonFile("./db/antidel.json")
const db_banned   = readJsonFile('./db/banned.json')
const db_sewa     = readJsonFile('./db/sewa.json')
const db_welcome  = readJsonFile('./db/welcome.json')
const db_shio     = readJsonFile('./db/shio.json')



function cariDataDenganID(idCari) {
  for (const nomorWhatsApp in db_sewa) {
    const dataSewa2 = db_sewa[nomorWhatsApp];
    const dataDitemukan = dataSewa2.find(item => item.id === idCari);
    if (dataDitemukan) {
        dataDitemukan.status = "sudah bayar";
      return dataDitemukan;
    }
  }
  return null;
}



// MODULE UTAMA OPEN
module.exports = autoresbot = async (autoresbot, m, chatUpdate, store) => {

try { // =================================================================
    



var body            = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var msg_text        = (typeof m.text == 'string' ? m.text : '')
var prefix          = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd         = body.startsWith(prefix)
const command       = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args          = body.trim().split(/ +/).slice(1)
const spychat       = body.replace().slice().trim()
const pushname      = m.pushName || "Undefined"
const text          = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted        = m.quoted ? m.quoted : false
const quoted_       = m.quoted ? m.quoted : m
const mime          = (quoted.msg || quoted).mimetype || ''
const from          = chatinfo.key.remoteJid
const botNumber     = await autoresbot.decodeJid(autoresbot.user.id)

const sender        = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await autoresbot.groupMetadata(from).catch(e => {}) : ''
const groupName     = m.isGroup ? groupMetadata.subject : ''
const participants  = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins   = m.isGroup ? await getGroupAdmins(participants) : ''


let firstTenCharacters = ''
if (body.length > 10) {
    firstTenCharacters = body.substring(0, 40)+ '...';
}else{
    firstTenCharacters = body
}




// INFO MESSAGE
const content       = JSON.stringify(m.message)

// WAKTU
//const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib           = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit           = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita          = moment.tz('Asia/Makassar').format('HH : mm : ss')
const time2         = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const jammenit      = moment().tz('Asia/Jakarta').format('HH:mm')
const timestamp     = moment().tz('Asia/Jakarta').valueOf();
const hariini       = tanggal(timestamp)


if (db.data.chats[m.chat] && 'antilink' in db.data.chats[m.chat]) {
  antilinkStatus = db.data.chats[m.chat].antilink ? 'ON' : 'OFF';
} else {
  antilinkStatus = 'OFF'
}

if (db.data.chats[m.chat] && 'antilinkv2' in db.data.chats[m.chat]) {
  antilinkv2Status = db.data.chats[m.chat].antilinkv2 ? 'ON' : 'OFF';
} else {
  antilinkv2Status = 'OFF'
}

if (db_welcome[m.chat]) {
   if (db_welcome[m.chat][0].status == 'on') {
        welcome_status = 'ON'
    }else {
        welcome_status = 'OFF'
    }
} else {
    welcome_status = 'OFF'
}



const resbot_ = {
    // checker
    numberSuperOwner: global.nomorsuperOwner + '@s.whatsapp.net',
    superOwner      : (global.nomorsuperOwner + '@s.whatsapp.net' == m.sender) ? true : false,
    isPremium       : [botNumber, ...db_owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender),
    isBotAdmins     : m.isGroup ? groupAdmins.includes(botNumber) : false,
    isAdmins        : m.isGroup ? groupAdmins.includes(m.sender) : false,
    isMuted         : m.isGroup ? db_mute.includes(from) : false,
    isBan           : db_banned.includes(m.sender),
    isUser          : db_pengguna.includes(m.sender),
    isMedia         : /image|video|sticker|audio/.test(mime),
    isReply         : m.quoted ? true : false,
    autodelete      : from && isCmd ? db_antidel.includes(from) : false,

    // Content data
    mentionByTag    : m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : [],
    time            : moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z'),
    salam           : moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a'),
    groupMetadata,
    sender,
    from,
    pushname,
    text,
    full_text : body,
    quoted_reply : m.quoted ? m.quoted : m
    
}
let isSpam = false;
let detikLagi = 0
let poinspam = false
if (m.sender in global.antiSpam) {
    wspam_fil = (timestamp - global.antiSpam[m.sender].last_time)

    let timespam_spam = Math.ceil( (wspam_fil/1000) )
    
    if (command == global.antiSpam[m.sender].command && timespam_spam < 15) {
        wspam_fil = (timestamp - global.antiSpam[m.sender].last_time)
        detikLagi = 20 - timespam_spam
        isSpam = true
        global.antiSpam[m.sender].poinspam = global.antiSpam[m.sender].poinspam + 1
        poinspam = global.antiSpam[m.sender].poinspam
    }else{
        wspam_fil = -1
        isSpam = false
        poinspam = false
    }
}else {
    wspam_fil = -1

    isSpam = false
    poinspam = false
}


if (antispam_filter && m.sender in global.antiSpam) {
    if (global.antiSpam[m.sender].baned) return console.log('Pengguna ini telah di ban')


    if (global.antiSpam[m.sender].poinspam > 4) {
         global.antiSpam[m.sender].baned = true
         autoresbot.sendMessage(from,{text: `Kamu sudah di ban dari bot ini, dan tidak akan bisa menggunakan semua fitur kecuali owner telah unban akun kamu`},{quoted:m})
        return
    }

    if (isSpam) {
        autoresbot.sendMessage(from,{text: `Jangan Spam Kak ! \n\nTunggu ${detikLagi} detik lagi`},{quoted:m})
        return
    }

   


}


/* ===================「 *ᴅᴏɴᴛ ᴇᴅɪᴛ* 」─=================== */




/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */

const audioData = [
  { time: "03:00:00", greeting: 'Selamat Tengah Malam', file: 'tmalam.mp3' },
  { time: "05:00:00", greeting: 'Selamat Subuh', file: 'subuh.mp3' },
  { time: "10:00:00", greeting: 'Selamat Pagi', file: 'pagi.mp3' },
  { time: "15:00:00", greeting: 'Selamat Siang', file: 'siang.mp3' },
  { time: "18:00:00", greeting: 'Selamat Sore', file: 'sore.mp3' },
  { time: "19:00:00", greeting: 'Selamat Petang', file: 'petang.mp3' },
  { time: "23:59:00", greeting: 'Selamat Malam', file: 'malam.mp3' }
];

let ucapanWaktu;

let audio_file;

for (const entry of audioData) {
  if (time2 < entry.time) {
    ucapanWaktu = entry.greeting;
    audio_file = entry.file;
    break;
  }
}

    
try {
    pp_users = await autoresbot.profilePictureUrl(anu.id, 'image')
} catch {
    pp_users = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const resbot = {
key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
        remoteJid: `status@broadcast`
    } : {})
},
message: {
    "contactMessage": {
        'displayName': `${pushname}`,
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Koi,;;;\nFN: Autoresbot\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        'jpegThumbnail': pp_users,
        thumbnail: pp_users,
        sendEphemeral: true
    }   
}
}
const resbot2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pp_users
        }
    }
}


const AntiSpam = (sender) => {
    let antispam_person =  {
        "sender" : m.sender,
        "command" : command,
        'last_time' : timestamp,
        'poinspam' : poinspam,
        'baned' : false
        }
    global.antiSpam[sender] = antispam_person


}
const reply = (teks) => {
    autoresbot.sendMessage(from,{text: teks},{quoted:m})
    //autoresbot.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DON'T SPAM !!!`,"body": `👋🏻 Hai kak ${pushname}`, "previewType": "PHOTO","thumbnail": thumb,"sourceUrl": `https://autoresbot.com`}}}, { quoted: resbot })
}
const chat_only = (teks) => {
    autoresbot.sendMessage(from, {text: teks})
}


const onlygc = () => {

    autoresbot.sendMessage(m.chat, {
        text: `👋🏻 Hai kak ${pushname} 
*⚠️WARNING⚠️*
FAQ : 
Q: "Jika saya bukan warga USM?"
A: "silahkan sewa terlebih dahulu untuk menggunakan BOT LVY"
        
Q: "Jika saya  warga USM?"
A: "Silahkan kirim Nama Lengkap + NIM"

https://wa.me/6281935593316
        
_Jangan lewatkan kesempatan untuk fitur terbaru lvy. Cukup ketik ${prefix}menu di grup bot._

╭────「 *SHOW MENU* 」──✦
│✦ ketik .menu`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true, 
            title: `${ucapanWaktu}`,
            body: "Autoresbot",
            thumbnailUrl: onlygroup,
            sourceUrl: grubwa,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
       })


   
   //autoresbot.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/private.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: resbot })
   }


// MUTE
if (resbot_.isMuted){
    if (!m.isGroup && !resbot_.isPremium && !m.key.fromMe) return console.log('BOT SEDANG DI MUTED')
    if (msg_text.toLowerCase().startsWith(`${prefix}unmute`)){
        let anu = db_mute.indexOf(from)
        db_mute.splice(anu, 1)
        fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
        reply('Bot telah diunmute di group ini')
    }
}
     
/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */





try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wlcm' in chats)) chats.wlcm = true
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
                if (!('antipanel' in chats)) chats.antipanel = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wlcm: true,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
                antipanel: false,
                antilinkv2: false
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (m.sender.startsWith('212')) return autoresbot.updateBlockStatus(m.sender, 'block')


// AUTO READ
if (m.message) {
autoresbot.readMessages([m.key])
}

if (command) {
if (!resbot_.isPremium && !m.isGroup) return onlygc()
/*autoresbot.sendMessage('6285246154386' + "@s.whatsapp.net", { text: `▧ 「 *S P Y - C O M M A N D* 」\n│✦   *From*: ${m.sender.split("@")[0]}\n│✦   *Chat*: ${spychat}\n╰────────────────────────✦` }, { quoted: resbot });*/
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await autoresbot.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await autoresbot.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}




if (resbot_.autodelete) {
autoresbot.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: chatinfo.key.id,
participant: chatinfo.key.participant
}
})
}

     
if (!publik) {
      if (!resbot_.isPremium && !m.key.fromMe) return console.log('MODE SELF AKTIF')
}



if (isCmd && !resbot_.isUser) {
db_pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(db_pengguna, null, 2))
}


// Anti Link
if (antilinkStatus == 'ON') {
            if (msg_text.match(`chat.whatsapp.com`)) {
                reply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!resbot_.isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await autoresbot.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (resbot_.isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (resbot_.isPremium) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                autoresbot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (antilinkv2Status == 'ON') {
            if (msg_text.match(`chat.whatsapp.com`)) {
                reply(`「 ANTI LINK WHATSAPP 」\n\n*JANGAN SHARE GC LAIN!!!*`)
                if (!resbot_.isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await autoresbot.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (resbot_.isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (resbot_.isPremium) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                autoresbot.sendMessage(m.chat, { delete: m.key })
            }
        }
        //Anti Panel
        if (db.data.chats[m.chat].antipanel) {
            if (msg_text.match('panel')) {
            reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6288210828960`)
                if (!resbot_.isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (resbot_.isPremium) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                autoresbot.sendMessage(m.chat, { delete: m.key })}
            if (msg_text.match('Panel')) {
            reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6288210828960`)
                if (!resbot_.isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (resbot_.isPremium) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                autoresbot.sendMessage(m.chat, { delete: m.key })}
            if (msg_text.match('PANEL')) {
                reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6288210828960`)
                if (!resbot_.isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (resbot_.isPremium) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                autoresbot.sendMessage(m.chat, { delete: m.key })
            }
        }

let list = []
for (let i of db_owner) {
list.push({
displayName: await autoresbot.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await autoresbot.getName(i + '@s.whatsapp.net')}\n
FN:${await autoresbot.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:autoresbot@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://autoresbot.com\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Japan;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}


if (resbot_.isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: autoresbot.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, autoresbot.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
autoresbot.ev.emit('messages.upsert', msg)
}

if (msg_text.startsWith('©️')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await autoresbot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Autoresbot`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
async function loading(){
    await reply(mess.wait)
}
     
async function ttslide(text) {
    let response = await axios.get(`https://dlpanda.com/id?url=${text}&token=G7eRpMaa`)
    const html = response.data
    const $ = cheerio.load(html)
    let asd = []
    let imgSrc = []
    let creator = 'Jikarinka'
    $('div.col-md-12 > img').each((index,
        element) => {
        imgSrc.push($(element).attr('src'))
    })
    asd.push({
        creator,
        imgSrc
    })
    let fix = imgSrc.map((e,
        i) => {
        return {
            img: e,
            creator: creator[i]
        }
    })
    for (let i of asd) {
        return i
    }
}

async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("Tidak ada video ditemukan.");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}

async function filterValidImages(images, limit) {
  const validImages = [];
  for (const image of images) {
    if (await isImageURL(image)) {
      validImages.push(image);
      if (validImages.length >= limit) {
        break; // Hentikan jika sudah mencapai jumlah gambar yang diminta
      }
    }
  }
  return validImages;
}

async function isImageURL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const contentType = res.headers.get('content-type');
    return contentType && contentType.startsWith('image'); // Memeriksa apakah tipe file adalah gambar
  } catch (error) {
    return false; // Jika terjadi kesalahan dalam memeriksa URL, mengembalikan false
  }
}

const sendapk = (teks) => {
autoresbot.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
reply('*Maaf ada yang salah !! Yang Bener Contoh : Yoapk Resbot*')
}
for (let ikalii of db_apk) {
if (msg_text === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
autoresbot.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
reply('*Maaf ada yang salah !! Yang Bener Contoh : Yozip Resbot*')
}
for (let ikali of db_zip) {
if (msg_text === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
autoresbot.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
reply('*Maaf ada yang salah !! Yang Bener Contoh : Yopdf Resbot*')
}
for (let ikal of db_document) {
if (msg_text === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
     

const sendvn = (teks) => {
autoresbot.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted:m})
}


try {
ppuser = await autoresbot.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = msg_text.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
autoresbot.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
   autoresbot.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik ${prefix}kuismath`)
 delete kuismath[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 autoresbot.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 autoresbot.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 autoresbot.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 autoresbot.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 autoresbot.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 autoresbot.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else return reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await autoresbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
await autoresbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
autoresbot.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
autoresbot.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) autoresbot.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) autoresbot.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) autoresbot.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
autoresbot.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) autoresbot.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) autoresbot.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
autoresbot.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`🚫 *Jangan tag dia!*
 ❏  *Dia sedang AFK* ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
 ❏  *Selama* ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
🕊️ ${pushname} Telah Kembali Dari Afk\n\n ❏ ${user.afkReason ? ' *Dengan Alasan* : ' + user.afkReason : ''}\n\n ❏  *Selama* : ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
     

     
     // TIKTAKTOE
var ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
idttt = []

ers1 = []
ers2 = []
gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
ers1.push(t.er1)
ers2.push(t.er2)
gilir.push(t.gilir)
}



const isTTT = m.isGroup ? idttt.includes(from) : false
iser1 = m.isGroup ? ers1.includes(sender) : false
iser2 = m.isGroup ? ers2.includes(sender) : false



     
  

if (isTTT && iser2){
if (msg_text.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=❌
er2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.er1.split('@')[0]}`
  autoresbot.sendMessage(from, ucapan, text, {quoted: m, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (msg_text.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
autoresbot.sendMessage(from, `Yahh @${tty.er2.split('@')[0]} Menolak:(`,text,{quoted:m,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(msg_text)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.er1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
autoresbot.sendMessage(from, ucapan1, text, {quoted:m, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er2 @${tty.er2.split('@')[0]}=⭕
er1 @${tty.er1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.er2.split('@')[0]}`
 autoresbot.sendMessage(from, ucapan, text, {quoted: m, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}

if (isTTT && iser2){
nuber = parseInt(msg_text)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
autoresbot.sendMessage(from, ucapan1, text, {quoted:m, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}




if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.er1.split('@')[0]}`
 autoresbot.sendMessage(from, ucapan, text, {quoted: m, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
 }



/*
 type WAPresence =
  | "unavailable"
  | "available"
  | "composing"
  | "recording"
  | "paused";
*/

// autoresbot.sendPresenceUpdate("recording", from);
   

//    // Mendapatkan ID proses Node.js
// console.log('ID Proses Node.js:', process.pid);

// // Mendapatkan waktu kerja proses dalam detik
// console.log('Waktu Kerja Proses:', process.uptime(), 'detik');

// // Menampilkan argumen command line
// console.log('Argumen Command Line:', process.argv);

// // Menampilkan variabel lingkungan (environment variables)
// console.log('Variabel Lingkungan:', process.env);

// // Menampilkan informasi rujukan memori
// console.log('Informasi Memori:', process.memoryUsage());

// // Menangani sinyal (contoh: SIGINT)
// process.on('SIGINT', () => {
//   console.log('Menerima sinyal SIGINT. Menutup aplikasi gracefully.');
//   process.exit(0);
// });  
if (isAlreadyResponList(m.chat, body.toLowerCase(), listdb)) {
    var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), listdb)
    if (get_data_respon.isImage === false) {
      autoresbot.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), listdb) }, { quoted: m })
    } else {
      autoresbot.sendMessage(from, { image: { url: get_data_respon.image_url }, caption: get_data_respon.response }, { quoted: m })
    }
  }    



switch(command) {


   
      case "addlist": {
        if (!m.isGroup) return reply(mess.group)
        const args1 = text.split(",")[0]
        const args2 = text.split(",")[1]    
        if (!q.includes(",")) return reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item,Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist,List`)
        if (isAlreadyResponList(from, args1, listdb)) return reply(`List Respon Dengan Key : *${args1}* Sudah Ada Di Group Ini.`)
        if (/image/.test(mime)) {
          const media = await x.downloadAndSaveMediaMessage(quoted)
          const mem = await uptotelegra(media)
          addResponList(from, args1, args2, true, `${mem}`, listdb)
          reply(`Sukses set list message dengan key : *${args1}*`)
          if (fs.existsSync(media)) fs.unlinkSync(media)
        } else {
          addResponList(from, args1, args2, false, '-', listdb)
          reply(`Sukses Add List Dengan Kunci : *${args1}*`)
        }
      }
      break
      case "updatelist": {
        if (!m.isGroup) return reply(mess.group)
        const args1 = q.split(",")[0]
        const args2 = q.split(",")[1]
        if (!q.includes(",")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item,Item*\n\n_Contoh_\n\n${command.slice(1)} namalist,List`)
        if (!isAlreadyResponList(from, q.split(",")[0], listdb)) return reply(`Maaf, Untuk Key *${args1}* Belum Terdaftar Di Group Ini`)
        if (/image/.test(mime)) {
          const media = await x.downloadAndSaveMediaMessage(quoted)
          const mem = await uptotelegra(media)
          updateResponList(from, args1, args2, true, `${mem}`, listdb)
          reply(`Sukses Update List Message Dengan Key : *${args1}*`)
          if (fs.existsSync(media)) fs.unlinkSync(media)
        } else {
          updateResponList(from, args1, args2, false, '-', listdb)
          reply(`Sukses Update Respon List Dengan Key *${args1}*`)
        }
      }
      break
      case "dellist": {
        if (!m.isGroup) return reply(mess.group)
        if (listdb.length === 0) return reply(`Belum Ada List Message Di Database`)
        if (!q) return reply(`Gunakan Dengan Cara ${prefix+command} *Nama Item*\n\n_Contoh_\n\n${prefix+command} namalist`)
        if (!isAlreadyResponList(from, q, listdb)) return reply(`List Item Dengan Nama *${q}* Tidak Ada Di Database!`)
        delResponList(from, q, listdb)
        reply(`Sukses Delete List Message Dengan Key *${q}*`)
      }
      break    
      case 'couple': {
        m.reply(mess.wait)
        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
        let random = anu[Math.floor(Math.random() * anu.length)]
        autoresbot.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
        autoresbot.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                    }
              break
/* ===================「 MENU OPEN 」==================== */

case 'menu': 
case 'help': {

// aktifkan jika bot hanya ingin di grub
//if (!m.isGroup) return onlygc()
    
let aresbot = `
╭────────────────────────
│ ᴺᵃᵐᵉ  : *${pushname}*
│ ˢᵗᵃᵗᵘˢ : ${resbot_.isPremium ? "*Oᴡɴᴇʀ* 🥶" : "*Uꜱᴇʀ* ⭐"}
│ ᴰᵃᵗᵉ   : *${hariini}*
├────
╰────────────────────────
 .͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏.
╭────「 *ᴀʀᴛɪꜰɪᴄɪᴀʟ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ* 」
│✦  ${prefix}ᴀɪ *ᴛᴇxᴛ*
│✦  ${prefix}ꜱɪᴍɪ *ᴛᴇxᴛ*
╰────────────────────────

╭────「 *ᴀɴɪᴍᴇ* 」
│✦  ${prefix}ᴛᴏᴢᴏᴍʙɪᴇ
│✦  ${prefix}ᴛᴏᴀɴɪᴍᴇ 
│✦  ${prefix}ᴡᴀɪꜰᴜ 
│✦  ${prefix}ɴᴇᴋᴏ 
│✦  ${prefix}ꜱʜɪɴᴏʙᴜ 
│✦  ${prefix}ᴍᴇɢᴜᴍɪɴ 
│✦  ${prefix}ʙᴜʟʟʏ 
│✦  ${prefix}ᴄᴜᴅᴅʟᴇ 
│✦  ${prefix}ᴄʀʏ 
│✦  ${prefix}ʜᴜɢ 
│✦  ${prefix}ᴀᴡᴏᴏ 
│✦  ${prefix}ᴋɪꜱꜱ 
│✦  ${prefix}ʟɪᴄᴋ 
│✦  ${prefix}ᴘᴀᴛ 
│✦  ${prefix}ꜱᴍᴜɢ 
│✦  ${prefix}ʙᴏɴᴋ 
│✦  ${prefix}ʏᴇᴇᴛ 
│✦  ${prefix}ʙʟᴜꜱʜ 
│✦  ${prefix}ꜱᴍɪʟᴇ 
│✦  ${prefix}ᴡᴀᴠᴇ 
│✦  ${prefix}ʜɪɢʜꜰɪᴠᴇ 
│✦  ${prefix}ʜᴀɴᴅʜᴏʟᴅ 
│✦  ${prefix}ɴᴏᴍ 
│✦  ${prefix}ʙɪᴛᴇ 
│✦  ${prefix}ɢʟᴏᴍᴘ 
│✦  ${prefix}ꜱʟᴀᴘ 
│✦  ${prefix}ᴋɪʟʟ 
│✦  ${prefix}ᴋɪᴄᴋ 
│✦  ${prefix}ʜᴀᴘᴘʏ 
│✦  ${prefix}ᴡɪɴᴋ 
│✦  ${prefix}ᴘᴏᴋᴇ 
│✦  ${prefix}ᴅᴀɴᴄᴇ 
│✦  ${prefix}ᴄʀɪɴɢᴇ 
│✦  ${prefix}ᴡᴀɪꜰᴜ_ ɴꜱꜰᴡ 
│✦  ${prefix}ɴᴇᴋᴏ_ ɴꜱꜰᴡ 
│✦  ${prefix}ᴛʀᴀᴘ_ ɴꜱꜰᴡ 
│✦  ${prefix}ʙʟᴏᴡᴊᴏʙ_ ɴꜱꜰᴡ
╰────────────────────────

╭────「 *ʙᴇʀɪᴛᴀ ᴍᴇɴᴜ*  」
│✦ ${prefix}ᴄɴɴ 
│✦ ${prefix}ᴄɴʙᴄ 
│✦ ${prefix}ᴛʀɪʙᴜɴ 
│✦ ${prefix}ᴋᴏᴍᴘᴀꜱ 
│✦ ${prefix}ᴅᴇᴛɪᴋ 
│✦ ${prefix}ᴅᴀɪʟʏ 
│✦ ${prefix}ɪɴᴇᴡꜱ 
│✦ ${prefix}ᴀɴᴛᴀʀᴀ 
│✦ ${prefix}ᴋᴏɴᴛᴀɴ 
│✦ ${prefix}ᴊᴀʟᴀɴᴛɪᴋᴜꜱ
╰────────────────────────

╭────「 *ʙᴏᴛ ɪɴꜰᴏ*  」
│✦  ${prefix}ᴏᴡɴᴇʀ
│✦  ${prefix}ɢʀᴜʙʙᴏᴛ
│✦  ${prefix}ᴛᴜᴛᴏʀ
╰────────────────────────

╭────「 *ꜱᴇᴀʀᴄʜ/ᴅᴏᴡɴʟᴏᴀᴅ* 」
│✦  ${prefix}ᴋʙʙɪ 
│✦  ${prefix}ᴍᴏᴅ 
│✦  ${prefix}ʏᴛꜱᴇᴀʀᴄʜ 
│✦  ${prefix}ʏᴛᴍᴘ3 
│✦  ${prefix}ᴛɪᴋᴛᴏᴋ 
│✦  ${prefix}ᴛᴛꜱᴇᴀʀᴄʜ 
│✦  ${prefix}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ 
│✦  ${prefix}ᴛɪᴋᴛᴏᴋᴍᴘ3 
│✦  ${prefix}ɪɢ 
│✦  ${prefix}ꜰʙ 
│✦  ${prefix}ᴘʟᴀʏ 
│✦  ${prefix}ʏᴛᴍᴘ4 
│✦  ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ 
│✦  ${prefix}ɢᴏᴏɢʟᴇ 
│✦  ${prefix}ꜱᴛᴀʟᴋᴛɪᴋᴛᴏᴋ 
│✦  ${prefix}ꜱʜɪᴏ
╰────────────────────────

╭────「 *ɢᴀᴍᴇ*  」
│✦  ${prefix}ꜰᴀᴍɪʟʏ100 
│✦  ${prefix}ᴛᴇʙᴀᴋ ʟᴀɢᴜ 
│✦  ${prefix}ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ 
│✦  ${prefix}ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ 
│✦  ${prefix}ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ 
│✦  ${prefix}ᴛᴇʙᴀᴋ ʟɪʀɪᴋ 
│✦  ${prefix}ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ 
│✦  ${prefix}ᴋᴜɪꜱᴍᴀᴛʜ 
│✦  ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ 
│✦  ${prefix}ᴅᴇʟᴛᴛᴄ 
│✦  ${prefix}ꜱᴜɪᴛ
│✦  ${prefix}ᴛʀᴜᴛʜ
│✦  ${prefix}ᴅᴀʀᴇ
╰────────────────────────

╭────「 *ᴋᴇʀᴀɴɢ ᴀᴊᴀɪʙ*  」
│✦  ${prefix}ʙɪꜱᴀᴋᴀʜ
│✦  ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
│✦  ${prefix}ᴄᴇᴋɢᴀɴᴛᴇɴɢ
│✦  ${prefix}ᴄᴇᴋᴄᴀɴᴛɪᴋ
│✦  ${prefix}ᴄᴇᴋᴍᴀᴛɪ
╰────────────────────────

╭────「 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*  」
│✦  ${prefix}ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│✦  ${prefix}ᴡᴇʟᴄᴏᴍᴇ ᴏɴ/ᴏꜰꜰ
│✦  ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ 
│✦  ${prefix}ᴅᴇʟ 
│✦  ${prefix}ʟɪɴᴋɢʀᴜʙ 
│✦  ${prefix}ɪɴꜰᴏɢʀᴜʙ 
│✦  ${prefix}ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ 
│✦  ${prefix}ᴋɪᴄᴋ 
│✦  ${prefix}ᴀᴅᴅ 
│✦  ${prefix}ᴘʀᴏᴍᴏᴛᴇ 
│✦  ${prefix}ᴘʀᴏᴍᴏᴛᴇᴍᴇ
│✦  ${prefix}ᴅᴇᴍᴏᴛᴇ 
│✦  ${prefix}ʜɪᴅᴇᴛᴀɢ 
│✦  ${prefix}ɢʀᴏᴜᴘ ᴏɴ/ᴏꜰꜰ
│✦  ${prefix}ᴇᴅɪᴛɪɴꜰᴏ 
│✦  ${prefix}ᴇᴅɪᴛꜱᴜʙᴊᴇᴋ 
│✦  ${prefix}ᴇᴅɪᴛᴅᴇꜱᴋ 
│✦  ${prefix}ᴛᴀɢᴀʟʟ 
│✦  ${prefix}ᴅᴇᴍᴏᴛᴇᴀʟʟ 
│✦  ${prefix}ᴘʀᴏᴍᴏᴛᴇᴀʟʟ 
│✦  ${prefix}ꜱᴇᴡᴀ 
│✦  ${prefix}ʟɪꜱᴛꜱᴇᴡᴀ
│✦  ${prefix}ᴏᴜᴛɢʀᴜᴘ 
│✦  ${prefix}ʙᴄɢʀᴏᴜᴘ 
│✦  ${prefix}ʙᴄɪᴍɢ 
│✦  ${prefix}ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏꜰꜰ
│✦  ${prefix}ᴀɴᴛɪʟɪɴᴋᴠ2 ᴏɴ/ᴏꜰꜰ
│✦  ${prefix}ɢᴇᴛɴᴀᴍᴇ 
│✦  ${prefix}ɢᴇᴛᴘɪᴄ 
│✦  ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ 
│✦  ${prefix}ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ 
│✦  ${prefix}ᴀꜰᴋ
│✦  ${prefix}ꜱᴇᴛʙɪᴏ
│✦  ${prefix}ꜱᴇᴛɴᴀᴍᴇ
│✦  ${prefix}ᴍᴜᴛᴇ
╰────────────────────────

╭────「 *ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ* 」
│✦  ${prefix}ɪɴꜰᴏɢᴇᴍᴘᴀ 
│✦  ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ 
│✦  ${prefix}ʀᴀᴍᴀʟᴀɴᴊᴏᴅᴏʜ 
│✦  ${prefix}ᴀʀᴛɪɴᴀᴍᴀ 
│✦  ${prefix}ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
│✦  ${prefix}ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
│✦  ${prefix}ᴘᴇᴋᴇʀᴊᴀᴀɴ 
│✦  ${prefix}ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
│✦  ${prefix}ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
│✦  ${prefix}ᴀʀᴛɪᴛᴀʀᴏᴛ 
│✦  ${prefix}ꜰᴇɴɢꜱʜᴜɪ 
│✦  ${prefix}ʜᴀʀɪʙᴀɪᴋ 
│✦  ${prefix}ʜᴀʀɪꜱᴀɴɢᴀʀ 
│✦  ${prefix}ʜᴀʀɪɴᴀᴀꜱ 
│✦  ${prefix}ɴᴀɢᴀʜᴀʀɪ 
│✦  ${prefix}ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
│✦  ${prefix}ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
│✦  ${prefix}ᴡᴇᴛᴏɴ 
│✦  ${prefix}ꜱɪꜰᴀᴛ 
│✦  ${prefix}ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
│✦  ${prefix}ᴍᴇᴍᴀɴᴄɪɴɢ 
│✦  ${prefix}ᴍᴀꜱᴀꜱᴜʙᴜʀ
╰────────────────────────

╭────「 *ɪᴍᴀɢᴇ ᴄʀᴇᴀᴛᴏʀ*  」
│✦  ${prefix}ᴛᴏɪᴍᴀɢᴇ
│✦  ${prefix}ᴛᴏɪᴍᴀɢᴇ
╰────────────────────────

╭────「 *ᴍᴀᴋᴇʀ* 」
│✦  ${prefix}ꜱᴛɪᴄᴋᴇʀ 
│✦  ${prefix}ᴡᴍ 
│✦  ${prefix}ᴡᴍᴠɪᴅᴇᴏ 
│✦  ${prefix}Qᴄ 
╰────────────────────────

╭────「 *ꜱᴛᴏʀᴇ*  」
│✦  ${prefix}done
│✦  ${prefix}proses
│✦  ${prefix}liststore
│✦  ${prefix}addlist
│✦  ${prefix}dellist
│✦  ${prefix}updatelist
│✦  ${prefix}hitungwr
│✦  ${prefix}couple
│✦  ${prefix}stalknick
╰────────────────────────

╭────「 *ʀᴀɴᴅᴏᴍ ᴛᴇxᴛ* 」
│✦   ${prefix}ᴊᴀᴡᴀQᴜᴏᴛᴇ 
│✦   ${prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇꜱ 
│✦   ${prefix}ʙᴜᴄɪɴQᴜᴏᴛᴇ 
│✦   ${prefix}ɪꜱʟᴀᴍɪQᴜᴏᴛᴇ 
│✦   ${prefix}ᴍᴏᴛɪᴠᴀꜱɪ 
│✦   ${prefix}ꜰᴀᴋᴛᴀᴜɴɪᴋ 
│✦   ${prefix}ᴘᴀɴᴛᴜɴ 
│✦   ${prefix}ᴘᴜɪꜱɪ 
│✦   ${prefix}ʀᴀɴᴅᴏᴍQᴜᴏᴛᴇ 
│✦   ${prefix}ᴋᴀᴛᴀꜱᴇɴᴊᴀ
╰────────────────────────

╭────「 *ᴛᴇxᴛᴘʀᴏ* 」
│✦  ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ *ᴛᴇxᴛ*
│✦  ${prefix}ʙʟᴏᴏᴅꜰʀᴏꜱᴛᴇᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ꜰᴏɢɢʏᴡɪɴᴅᴏᴡ *ᴛᴇxᴛ*
│✦  ${prefix}ꜰɪʀᴇᴡᴏʀᴋꜱᴘᴀʀᴋʟᴇ *ᴛᴇxᴛ*
│✦  ${prefix}ᴅᴇʟᴜxᴇꜱɪʟᴠᴇʀ *ᴛᴇxᴛ*
│✦  ${prefix}ᴄʟᴏᴜᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ *ᴛᴇxᴛ*
│✦  ${prefix}ʙᴏᴋᴇʜ *ᴛᴇxᴛ*
│✦  ${prefix}ʙᴏx3ᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ꜰᴜᴛᴜʀᴇɴᴇᴏɴ *ᴛᴇxᴛ*
│✦  ${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ *ᴛᴇxᴛ*
│✦  ${prefix}ɪᴍᴘʀᴇꜱꜱɪᴠᴇɢʟɪᴛᴄʜ *ᴛᴇxᴛ*
│✦  ${prefix}ɪᴄᴇᴄᴏʟᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ *ᴛᴇxᴛ*
│✦  ${prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ *ᴛᴇxᴛ*
│✦  ${prefix}ʜᴀʟʟᴏᴡᴇᴇɴ *ᴛᴇxᴛ*
│✦  ${prefix}ɢʀᴇᴇɴɴᴇᴏɴ *ᴛᴇxᴛ*
│✦  ${prefix}ꜱʟɪᴄᴇᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ᴍᴀɢᴍᴀ *ᴛᴇxᴛ*
│✦  ${prefix}ʟᴜxᴜʀʏ *ᴛᴇxᴛ*
│✦  ${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ *ᴛᴇxᴛ*
│✦  ${prefix}ᴍɪɴɪᴏɴ *ᴛᴇxᴛ*
│✦  ${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇꜱ *ᴛᴇxᴛ*
│✦  ${prefix}ɴᴇᴏɴ *ᴛᴇxᴛ*
│✦  ${prefix}ɴᴇᴏɴʟɪɢʜᴛ *ᴛᴇxᴛ*
│✦  ${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ *ᴛᴇxᴛ*
│✦  ${prefix}ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ *ᴛᴇxᴛ*
│✦  ${prefix}ꜱᴀɴᴅᴡʀɪᴛɪɴɢ *ᴛᴇxᴛ*
│✦  ${prefix}ꜱᴛʀᴀᴡʙᴇʀʀʏ *ᴛᴇxᴛ*
│✦  ${prefix}ꜱᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ꜱᴜᴍᴍᴇʀꜱᴀɴᴅ *ᴛᴇxᴛ*
│✦  ${prefix}ᴛʜᴜɴᴅᴇʀ *ᴛᴇxᴛ*
│✦  ${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ *ᴛᴇxᴛ*
│✦  ${prefix}ᴡᴏɴᴅᴇʀꜰᴜʟɢʀᴀꜰꜰɪᴛɪ *ᴛᴇxᴛ* ]
│✦  ${prefix}ᴀᴠᴇɴɢᴇʀ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ᴄᴏᴏʟɢʀᴀᴠɪᴛʏ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ᴡᴏʟꜰʟᴏɢᴏ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ɢʟɪᴛᴄʜ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ʟɪᴏɴʟᴏɢᴏ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ᴍᴀʀᴠᴇʟꜱᴛᴜᴅɪᴏ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ɴɪɴᴊᴀʟᴏɢᴏ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ᴘᴏʀɴʜᴜʙ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ꜱᴘᴀᴄᴇ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ꜱᴛᴇᴇʟ3ᴅ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
│✦  ${prefix}ᴡᴀʟʟɢʀᴀᴠɪᴛʏ *ᴛᴇxᴛ1* *ᴛᴇxᴛ2*
╰────────────────────────

╭────「 *ᴛᴏᴏʟꜱ* 」
│✦  ${prefix}ʜᴅ 
│✦  ${prefix}ʟɪʀɪᴋ 
│✦  ${prefix}ᴄʀᴇᴀᴛᴇQʀ 
│✦  ${prefix}ᴅᴇᴛᴇᴄᴛQʀ 
│✦  ${prefix}ɪɴꜱᴘᴇᴄᴛ 
│✦  ${prefix}ɢɪᴛ 
│✦  ${prefix}ꜱꜱᴡᴇʙ 
│✦  ${prefix}ᴛᴏᴍᴘ4 
│✦  ${prefix}ᴛᴏᴍᴘ3 
│✦  ${prefix}ᴛᴏᴀᴜᴅɪᴏ 
│✦  ${prefix}ᴛᴏᴠɴ 
│✦  ${prefix}ᴛᴏɢɪꜰ 
│✦  ${prefix}ᴛᴏᴜʀʟ 
│✦  ${prefix}ᴇᴍᴏᴊɪᴍɪx
╰────────────────────────

`


let searchText = "✦";
let totalAllfitur = (aresbot.match(new RegExp(searchText, "g")) || []).length;
global.totalAllfitur = totalAllfitur


// aresbot = '```'+aresbot+'```'
autoresbot.sendMessage(m.chat, {
    text: aresbot,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: autoresbot_version,
        thumbnailUrl: allmenu,
        sourceUrl: 'https://whatsapp.com/channel/0029VaIZqLT3GJOqN5NQ0B2Y',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })


// Kirim Audio Vn
autoresbot.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/'+audio_file), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})

}
break

/* ===================「 MENU CLOSE 」==================== */




case 'helo':
case 'heloo':
case 'hallo':
case 'halo':
case 'hi':
case 'hai':
case 'hay':
case 'hy':{
    if (!m.isGroup) {
         let kata = `${command} juga kak ${pushname} \n\nUntuk Memulai Menggunakan Bot, diharapkan bergabung ke grub terlebih dahulu ya.\n\nLink Grub : ${grubwa}`;
         return chat_only(kata)
    }
}
break


case 'assalamualaikum':{
    if (!m.isGroup) {
         let kata = `عَلَيْكُمُ السَّلاَمُ   \nWaalaikumussalam kak ${pushname} \n\nUntuk Memulai Menggunakan Bot, diharapkan bergabung ke grub terlebih dahulu ya.\n\nLink Grub : ${grubwa}`;
         return chat_only(kata)
    }
}
break




















/* ========================================================================
_________________________ Artifical Intelegen ___________________________*/


case 'ai':{
    if (!q) return reply('Iya Kak?')
    let ai = await fetchJson(`https://api.autoresbot.com/artificial_intelligence/chat_ai?query=${q}`, apikey_autoresbot)
  
    autoresbot.sendMessage(m.chat, {text: ai.messages}, {quoted: m})
    }
break

case 'simi':{
    if (!q) return reply('Iya Kak?')
    let simi = await fetchJson(`https://api.autoresbot.com/artificial_intelligence/simi?query=${q}`, apikey_autoresbot)

    autoresbot.sendMessage(m.chat, {text: simi.messages}, {quoted: m})
    }
break





/* ========================================================================
_________________________________ Anime _________________________________*/

case 'toanime': {
    try {   
            reply(mess.wait)
            const meks = await autoresbot.downloadAndSaveMediaMessage(quoted_)
            const oke = await UploadTph(meks)
            result = await fetchJson(`https://api.autoresbot.com/anime/to_anime?url=${oke}&apikey=apikey_autoresbot`, apikey_autoresbot)
        console.log(result)
            autoresbot.sendMessage(m.chat, { image : { url : result.messages.data}, caption: mess.success }, { quoted:m })
    } catch(e) {
            return reply(`Wajah Pada Gambar Tidak Kedeteksi, Pilih Gambar Lain`)
    }
   
}
break



case 'tozombie': {
    try {   
            reply(mess.wait)
            const meks = await autoresbot.downloadAndSaveMediaMessage(quoted_)
            const oke = await UploadTph(meks)
            result = await fetchJson(`https://api.autoresbot.com/tools/tozombie?url=${oke}`, apikey_autoresbot)
            
            //autoresbot.sendMessage(m.chat, { image : result, caption: mess.success }, { quoted:m })
            autoresbot.sendMessage(m.chat, { image : { url : result.messages.data}, caption: mess.success }, { quoted:m })
    } catch {
            return reply(`Balas image dengan *${prefix}${command}*`)
    }
   
}
break


case 'waifu':case 'neko':case 'shinobu':case 'megumin':case 'bully':case 'cuddle':case 'cry':case 'hug':case 'awoo':case 'kiss':case 'lick':case 'pat':case 'smug':case 'bonk':case 'yeet':case 'blush':case 'smile':case 'wave':case 'highfive':case 'handhold':case 'nom':case 'bite':case 'glomp':case 'slap':case 'kill':case 'happy':case 'wink':case 'poke':case 'dance':case 'cringe':

if (q) return 
    try {   
            let waifu = await fetchJson(`https://api.autoresbot.com/anime/${command}`, apikey_autoresbot)
            autoresbot.sendMessage(m.chat, { image : { url : waifu.messages.data }, caption: mess.success }, { quoted:m })
    } catch {
            reply(`Gagal`)
    }

break

case 'waifu_':case 'neko_':case 'trap_':case 'blowjob_':
    let command_ = command.replace("_", "");
    try {   
        let waifu = await fetchJson(`https://api.autoresbot.com/anime/${command_}?type=nsfw`, apikey_autoresbot)
        if (waifu) {
            autoresbot.sendMessage(m.chat, { image : { url : waifu.messages.data }, caption: mess.success }, { quoted:m })
        }
    } catch {
    }
break



/* ========================================================================
_________________________________ Baned _________________________________*/

         
case 'verif@': case 'kenon': {
if (!resbot_.superOwner) return reply(mess.superOwner)

if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19574.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007982238")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(global.ban.kenon)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else return reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else return reply('Masukkan nomor target!')
}
break

case 'banned': {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(global.ban.banned)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else return reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else return reply('Masukkan nomor target!')
}
break

case 'unbanned': {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(global.ban.unbanned)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else return reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else return reply('Masukkan nomor target!')
}
break

case 'unbannedv2': {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(global.ban.unbannedv2)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else return reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else return reply('Masukkan nomor target!')
}
break

case 'unbannedv3': {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hola WhatsApp
Actualmente, algunas personas tienen muchas formas efectivas de bloquear números de usuario e informarlos sin ningún motivo, de hecho, conozco bien los términos de servicio y los cumplí, pero algunos piratas informáticos me hicieron un informe falso y mi número fue bloqueado, desbloquee el número ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(global.ban.unbannedv3)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else return reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else return reply('Masukkan nomor target!')
}
break

case 'unbannedv4': {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${targetnya} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(global.ban.unbannedv4)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else return reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else return reply('Masukkan nomor target!')
}
break

case 'unbannedv5': {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aloha WhatsApp, ua ʻaihue ʻia kaʻu helu e ka mea hacker, e ʻoluʻolu e wehe hou iā ia [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp :3`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(global.ban.unbannedv5)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else return reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else return reply('Masukkan nomor target!')
}
break
















/* ========================================================================
_________________________________ Berita Menu _________________________________*/

case 'fajar':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
FajarNews().then(async(res) => {
let no = 0;
teks_berita = "";
for (let i of res) {
no += 1;
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Jenis: ${i.berita_jenis}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += "";
return reply(teks_berita) 
})
break





case 'cnn':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
CNNNews().then(res => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
reply(teks_berita) 
})
break



case 'cnbc':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
CNBCNews().then(async(res) => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
autoresbot.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:m })
})
break

case 'tribun':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
TribunNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Jenis: ${i.berita_jenis}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
autoresbot.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:m })
})
break


case 'kompas':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
KompasNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Jenis: ${i.berita_jenis}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
autoresbot.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:m })
})
break

case 'detik':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
DetikNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
autoresbot.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:m })
})
break

case 'daily':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
DailyNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
autoresbot.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:m })
})
break

case 'inews':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
iNews().then(async(res) => {
let no = 0
let teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break



case 'antara':
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
AntaraNews().then(async(res) => {
let no = 0
let teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break

case "kontan":
if(q) return
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
KontanNews().then(async (res) => {
let teks = ""
let no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
autoresbot.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break


case "jalantikus":
if(q) return
var reis = await JalanTikusMeme()
teks_berita = "";
teks_berita += "Jalan Tikus Meme\n\n"
teks_berita += `Source: ${reis}`
teks_berita += ""
autoresbot.sendMessage(m.chat, { image : { url : reis }, caption: teks_berita }, { quoted:m })
break









/* ========================================================================
_________________________________ Bot Info _________________________________*/

case 'owner': case 'crator': case 'creator':{
 const repf = await autoresbot.sendMessage(from, { 
contacts: { 
displayName: `${db_owner}`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
 
autoresbot.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku.. Kalo Ada Sesuatu Bilang Aja Sama Dia :3`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

case 'groupbot':
case 'grupbot':
case 'grubbot': {
if (q) return
autoresbot.sendText(from, `[1] ᴀᴜᴛᴏʀᴇꜱʙᴏᴛ ɢʀᴏᴜᴘ \nhttps://chat.whatsapp.com/KsVwcJVVD78GUng95LRxUO`, m)
}
break

case 'tutor':
case 'tutorial': {
if (q) return
 reply(`👋🏻 Haii Kak ${pushname}, Selamat ${resbot_.salam}
\n\nTutorial Menggunakan Bot \n\nhttps://youtu.be/JtTgqrotr7A?si=L4v9d6OVySRqK9yy \n\nJangan Lupa Di Subscribe ya kak`)
}
break





/* ========================================================================
_________________________________ Database _________________________________*/



case 'addvn':{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
    
if (db_vn.includes(text)) return reply("Nama tersebut sudah di gunakan")
    
try {
    let delb = await autoresbot.downloadAndSaveMediaMessage(quoted)
      db_vn.push(text)
    await fsx.copy(delb, `./database/Audio/${text}.mp3`)
    fs.writeFileSync('./database/vnadd.json', JSON.stringify(db_vn))
    fs.unlinkSync(delb)
} catch {
   return reply(`Balas vn dengan addvn`)
}
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
    
    
}
break
        
case 'sendvn':{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan nama listvn')
if (!db_vn.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = db_vn.indexOf(q)
let namafilevn = db_vn[wanu]
    try {
   let buffer = fs.readFileSync(`./database/Audio/${namafilevn}.mp3`)
    sendvn(buffer)
    } catch {
            return reply(mess.gagal)
    }
}
break
        
case 'delvn':{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan nama listvn')
if (!db_vn.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
            
    let wanu = db_vn.indexOf(text)
        db_vn.splice(wanu, 1)
        fs.writeFileSync('./database/vnadd.json', JSON.stringify(db_vn))
        fs.unlinkSync(`./database/Audio/${text}.mp3`)


    
reply(`Sukses delete vn ${text}`)
}
break

case 'listvn':{
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
let teksooo = '⭓「 *LIST VN* 」\n│\n'
for (let x of db_vn) {
    
teksooo += `⭔ ${x}\n`
}
if    (db_vn.length == 0) return reply('Tidak ada list vn di database')
reply(teksooo)
}
break

        
/* ========================================================================
_________________________________ Search/Download _________________________________*/


case 'kbbi': {
    if (!q) return reply(`Masukkan Query Contoh ${prefix + command} bumi`)
    
    try{
        let getKbbi = await fetchJson(`https://api.autoresbot.com/education/kbbi?apikey=${apikey_autoresbot}&query=${q}`)
        await reply(`${getKbbi.messages.title}

${getKbbi.messages.arti}`)
    } catch (err){
        return reply('gagal')
    }
}
break

case 'qc': case 'qcs': {
    if (!q) return reply (`Contoh: ${prefix + command} pink hallo\n\nlist warna\n▸ pink\n▸ biru\n▸ merah\n▸ hijau\n▸ kuning\n▸ ungu\n▸ birutua\n▸ birumuda\n▸ abu\n▸ orange\n▸ hitam\n▸ putih\n▸ teal\n▸ merahmuda\n▸ cokelat\n▸ salmon\n▸ magenta\n▸ tan\n▸ wheat\n▸ deeppink\n▸ api\n▸ birulangit\n▸ jingga\n▸birulangitcerah\n▸ hotpink\n▸ birumudalangit\n▸ hijaulaut\n▸ merahtua\n▸ oranyemerah\n▸ cyan\n▸ ungutua\n▸ hijaulumut\n▸ hijaugelap\n▸ birulaut\n▸ oranyetua\n▸ ungukehitaman\n▸ fuchsia\n▸ magentagelap\n▸ abu-abutua\n▸ peachpuff\n▸ hijautua\n▸ merahgelap\n▸ goldenrod\n▸ abu-abutua\n▸ ungugelap\n▸ emas\n▸ perak`)
    if (text.length > 100) return reply(`🚩 Max 100 character.`)
    let [color, ...message] = text.split(' ');
    message = message.join(' ');
    let backgroundColor;
    switch(color) {
    case 'pink':
    backgroundColor = '#f68ac9';
    break;
    case 'biru':
    backgroundColor = '#6cace4';
    break;
    case 'merah':
    backgroundColor = '#f44336';
    break;
    case 'hijau':
    backgroundColor = '#4caf50';
    break;
    case 'kuning':
    backgroundColor = '#ffeb3b';
    break;
    case 'ungu':
    backgroundColor = '#9c27b0';
    break;
    case 'birutua':
    backgroundColor = '#0d47a1';
    break;
    case 'birumuda':
    backgroundColor = '#03a9f4'; 
    break;
    case 'abu':
    backgroundColor = '#9e9e9e';
    break;
    case 'orange':
    backgroundColor = '#ff9800';
    break;
    case 'hitam':
    backgroundColor = '#000000';
    break;
    case 'putih':
    backgroundColor = '#ffffff';
    break;
    case 'teal':
    backgroundColor = '#008080';
    break;
    case 'merahmuda':
    backgroundColor = '#FFC0CB';
    break;
    case 'cokelat':
    backgroundColor = '#A52A2A';
    case 'salmon':
    backgroundColor = '#FFA07A'; 
    break; 
    case 'magenta':
    backgroundColor = '#FF00FF'; 
    break; 
    case 'tan':
    backgroundColor = '#D2B48C'; 
    break;
    case 'wheat':
    backgroundColor = '#F5DEB3'; 
    break;
    case 'deeppink':
    backgroundColor = '#FF1493'; 
    break; 
    case 'api':
    backgroundColor = '#B22222';
    break;
    case 'birulangit':
    backgroundColor = '#00BFFF';
    break; 
    case 'jingga':
    backgroundColor = '#FF7F50';
    break;
    case 'birulangitcerah':
    backgroundColor = '#1E90FF'; 
    break; 
    case 'hotpink':
    backgroundColor = '#FF69B4'; 
    break; 
    case 'birumudalangit':
    backgroundColor = '#87CEEB'; 
    break; 
    case 'hijaulaut':
    backgroundColor = '#20B2AA'; 
    break; 
    case 'merahtua':
    backgroundColor = '#8B0000'; 
    break; 
    case 'oranyemerah':
    backgroundColor = '#FF4500'; 
    break; 
    case 'cyan':
    backgroundColor = '#48D1CC'; 
    break; 
    case 'ungutua':
    backgroundColor = '#BA55D3'; 
    break; 
    case 'hijaulumut':
    backgroundColor = '#00FF7F'; 
    break; 
    case 'hijaugelap':
    backgroundColor = '#008000'; 
    break; 
    case 'birulaut':
    backgroundColor = '#191970'; 
    break; 
    case 'oranyetua':
    backgroundColor = '#FF8C00'; 
    break; 
    case 'ungukehitaman':
    backgroundColor = '#9400D3'; 
    break; 
    case 'fuchsia':
    backgroundColor = '#FF00FF'; 
    break; 
    case 'magentagelap':
    backgroundColor = '#8B008B'; 
    break;
    case 'abu-abutua':
    backgroundColor = '#2F4F4F'; 
    break;
    case 'peachpuff':
    backgroundColor = '#FFDAB9'; 
    break;
    case 'hijautua':
    backgroundColor = '#BDB76B'; 
    break;
    case 'merahgelap':
    backgroundColor = '#DC143C'; 
    break;
    case 'goldenrod':
    backgroundColor = '#DAA520'; 
    break;
    case 'abu-abutua':
    backgroundColor = '#696969'; 
    break;
    case 'ungugelap':
    backgroundColor = '#483D8B'; 
    break;
    case 'emas':
    backgroundColor = '#FFD700'; 
    break;
    case 'perak':
    backgroundColor = '#C0C0C0'; 
    break;
    default:
    throw('Warna yang dipilih tidak tersedia.')
    }
    let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor,
    width: 512,
    height: 768,
    scale: 2,
    messages: [
    {
    entities: [],
    avatar: true,
    from: {
    id: 1,
    name: pushname,
    photo: { 
    url: await autoresbot.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
    }
    },
    text: message,
    replyMessage: {},
    },
    ],
    };
    let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
    'Content-Type': 'application/json',
    },
    });
    let buffer = Buffer.from(response.data.result.image, 'base64');
    autoresbot.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
    }
    break


case 'mod':
{
if (!q) return reply(`Masukkan Query Contoh ${prefix + command} Picsay pro`)
reply(mess.wait)
let getImage = await fetchJson(`https://api.autoresbot.com/search/mod?query=${q}&apikey=${apikey_autoresbot}`)
try{
// await autoresbot.sendMessage(m.chat, {image: getImage, caption: "No Caption "}, {quoted: m})

    info_name = getImage.messages.data[0].name 
    info_link = getImage.messages.data[0].link;
    await reply(`Name : ${info_name}\nLink Download : ${info_link}`)
//await autoresbot.sendMessage(m.chat, { document: { url: getImage.result[0].link }, mimetype: 'application/zip', fileName: getImage.result[0].name }, { quoted: m })
} catch (err){
reply(util.format(err))
}
}
break



case 'yts': case 'ytsearch': {
if (!q) return reply(`Example : ${prefix + command} story wa anime`)
let search = await yts(q)
let teks = '*YouTube Search*\n\n Result From '+q+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
autoresbot.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break



case 'ytmp3': case 'youtubemp3': {
if (!q) return reply(`Example : ${prefix + command} link`)
await loading ()
downloadMp3(q)
}
break



case 'tiktok':
case 'tiktokmp4': {
            if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
            reply(mess.wait)
        try {
            let res = await tiktok2(`${args[0]}`)
                autoresbot.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
                autoresbot.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
            })
            
                 } catch (e) {
        reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari API !`);
      }


}
break



case 'tiktokht':
case 'tthastag':
case 'ttsearch': {
    if (args.length == 0) return reply(`Example: ${prefix + command} viral`)
    reply(mess.wait)
    try {
        let res = await tiktoks(`${args[0]}`)
        autoresbot.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title, mimetype: 'video/mp4' })
      } catch (e) {
        reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari API !`);
      }
  }
break





case 'ttslide':
case 'tiktokslide': {
            if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
            if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
            reply(mess.wait)
            const limit = parseInt(args[0]) || 9;
            try {
    const allImages = [];
    let res = await fetch(`https://api.autoresbot.com/downloader/tiktokslide?apikey=${apikey_autoresbot}&url=${q}`);
    let json = await res.json();
    if (json.messages.data.length > 0) {
      allImages.push(...json.data);
    }
    const validImages = await filterValidImages(allImages, limit);
    for (const image of validImages) {
      autoresbot.sendMessage(m.chat, { image: { url: image }})
    }
  } catch (e) {
    reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari API !`);
  }
        
            }
break


            
case 'tiktokmp3': {
            if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
            reply(mess.wait)
        try {
            let res = await tiktok2(`${args[0]}`)
                 await autoresbot.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
            
                 } catch (e) {
        reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari API !`);
      }


}
break

case 'ig':
case 'igdl':
if (!q) return reply("Link?")
reply(mess.wait)
try {
let res = await fetch(`https://api.autoresbot.com/downloader/instagram?apikey=${apikey_autoresbot}&url=${q}`)
let json = await res.json()
let cap = `🍂 Done...`
autoresbot.sendMessage(m.chat, { video: { url: json.messages.data[0] }, caption: cap })
} catch {
    console.log('error api')
}
break





case 'fb':
if (!q) return reply(mess.notlink)
reply(mess.wait)

try {
    let res = await fetchJson(`https://api.autoresbot.com/downloader/facebook?apikey=${apikey_autoresbot}&url=${q}`)
   if (res) {
    await autoresbot.sendMessage(m.chat, { video: { url: res.messages.data[0] }, mimetype: 'video/mp4' })
   }
} catch {
    console.log('error api')
}
break



case 'play':

        
    if (!q) return reply(`Example: ${prefix + command} bad - wave to earth`)

    reply(mess.wait)


    try {
        let search = await yts(q)

        let hasil_search_andplay = search.all[0].url

        await downloadMp3(hasil_search_andplay)

    } catch(e) {
        reply('Ada Kesalahan'+e)
    }


break



case 'ytmp4':
             if (!q) return reply(mess.notlink)
    reply(mess.wait)

    try {

        downloadMp4(q)

    } catch {
        reply('Ada Kesalahan')
    }


break





case 'pin':
case 'pinterest': {

if (!q) return reply(mess.notlink)
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
let { pinterest } = require('./lib/scraper')
anu = await pinterest(q)
result = anu[Math.floor(Math.random() * anu.length)]
autoresbot.sendMessage(from, {image: { url: result }, caption: mess.success },{quoted:m})
}
break

        
case 'google': {
 if (!q) return reply(`Example : ${prefix + command} fatih arridho`)
let google = require('google-it')
google({'query': q}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break

case 'stalktiktok':
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
if (!q) return reply(`Example: ${prefix + command} stef_pubg`)
axios.get(`https://api.autoresbot.com/stalk/tiktok?apikey=${apikey_autoresbot}&query=${q}`).then(({ data }) => {
var caption = `Username : ${data.messages.data.username}\n`
caption += `Nickname : ${data.messages.data.name}\n`
caption += `Followers : ${data.messages.data.followers}\n`
caption += `Followings : ${data.messages.data.following}\n`
caption += `Likes : ${data.messages.data.likes}\n`
caption += `Bio : ${data.messages.data.bio}\n`
autoresbot.sendMessage(from, { image: { url: data.messages.data.profile }, caption })
})
break

case 'shio': {




if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)

    if (db_shio[q]) {
        reply(db_shio[q])
    }else{
        reply('gak ada')
    }

    
       // autoresbot.sendText(from, `⭔ *Hasil :* ${db_shio[q]}`, m)




}
break










/* ========================================================================
_________________________________ Game _________________________________*/

case 'family100': {
 if ('family100'+from in _family100) {
 return reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await autoresbot.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break





case 'tebaklagu': 
case 'tebakgambar': 
case 'tebakkata': 
case 'tebakkalimat': 
case 'tebaklirik': 
case 'tebaklontong': 
case 'tebak': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')

 if (q === "lagu" || command === 'tebaklagu') {

     if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
     let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
     let result = anu[Math.floor(Math.random() * anu.length)]
     let msg = await autoresbot.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
     autoresbot.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
     tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
     })
     await sleep(sleep_tebak)
     if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
     console.log("Jawaban: " + result.jawaban)
     autoresbot.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
     delete tebaklagu[m.sender.split('@')[0]]
     }
 } else if (q === 'gambar' || command === 'tebakgambar') {

     if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
     let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     autoresbot.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
     tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
     })
     await sleep(sleep_tebak)
     if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
     console.log("Jawaban: " + result.jawaban)
     autoresbot.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
     delete tebakgambar[m.sender.split('@')[0]]
     }
 } else if (q === 'kata' || command === 'tebakkata') {

     if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
     let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     autoresbot.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
     tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
     })
     await sleep(sleep_tebak)
     if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
     console.log("Jawaban: " + result.jawaban)
     autoresbot.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
     delete tebakkata[m.sender.split('@')[0]]
     }
 } else if (q === 'kalimat' || command === 'tebakkalimat') {

     if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
     let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     autoresbot.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
     tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
     })
     await sleep(sleep_tebak)
     if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
     console.log("Jawaban: " + result.jawaban)
     autoresbot.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
     delete tebakkalimat[m.sender.split('@')[0]]
     }
 } else if (q === 'lirik' || command === 'tebaklirik') {

     if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
     let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     autoresbot.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
     tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
     })
     await sleep(sleep_tebak)
     if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
     console.log("Jawaban: " + result.jawaban)
     autoresbot.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
     delete tebaklirik[m.sender.split('@')[0]]
     }
 } else if (q === 'lontong'  || command === 'tebaklontong') {

     if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
     let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     autoresbot.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
     caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
     })
     await sleep(sleep_tebak)
     if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
     console.log("Jawaban: " + result.jawaban)
     autoresbot.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
     delete caklontong[m.sender.split('@')[0]]
    delete caklontong_desk[m.sender.split('@')[0]]
     }
 }else{
     return reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
 }
}
break





case 'kuismath': case 'math': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let { genMath, modes } = require('./src/math')
 if (!q) return reply (`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
 let result = await genMath(q.toLowerCase())
 autoresbot.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break





case 'ttc': case 'ttt': case 'tictactoe': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await autoresbot.sendText(room.x, str, m, { mentions: parseMention(str) } )
await autoresbot.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break





case 'delttc': case 'delttt': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return reply(`Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break





case 'suitpvp': case 'suit': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${pushname}`, from, { quoted: m })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await autoresbot.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) autoresbot.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break



case 'truth':
if (!m.isGroup) return reply(mess.group)
if (q) return
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)

await autoresbot.sendMessage(m.chat, {image: truteh, caption: '*Truth*\n\n'+ ttrth }, {quoted: m})


break

case 'dare':
if (!m.isGroup) return reply(mess.group)
if (q) return
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
await autoresbot.sendMessage(m.chat, {image: buffer, caption: '*Dare*\n\n'+ der }, {quoted: m})
break





/* ========================================================================
_________________________________ Game _________________________________*/



case 'bisakah':
       if (!q) return reply('Example : *.bisakah anjing terbang*')
if (!m.isGroup) return reply(mess.group)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
autoresbot.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+q+'\n*Jawaban :* '+ keh }, {quoted: m})
break
case 'kapankah':
       if (!q) return reply('Example : *.kapankah tukang bubur naik haji*')
      if (!m.isGroup) return reply(mess.group)

      const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
      const koh = kapan[Math.floor(Math.random() * kapan.length)]
      autoresbot.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+q+'\n*Jawaban :* '+ koh }, {quoted: m})
break

case 'cekganteng':
      if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
      if (!m.isGroup) return reply(mess.group)
         let gan = ''
        if (resbot_.numberSuperOwner == resbot_.mentionByTag[0]) {
             gan =['83','97','100','102','120','9999','127','86']
         }else{
             gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
     
      const teng = gan[Math.floor(Math.random() * gan.length)]
      autoresbot.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+q+'\n*Jawaban :* '+ teng }, {quoted: m})
break

case 'cekcantik':
      if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
      if (!m.isGroup) return reply(mess.group)
         let can = ''
       if (resbot_.numberSuperOwner == resbot_.mentionByTag[0]) {
            can =['83','97','100','102','120','9999','127','86']
         } else{
            can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const tik = can[Math.floor(Math.random() * can.length)]
     autoresbot.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+q+'\n*Jawaban :* '+ tik }, {quoted: m})
break

case 'cekmati':
     if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
      if (!m.isGroup) return reply(mess.group)
      predea = await axios.get(`https://api.agify.io/?name=${q}`)
      reply(`Nama : *${q}*\nMati Pada Umur : *${predea.data.age} Tahun.*\n\n_Cepet Cepet Tobat Ya Soalnya Mati ga ada yang tau_`)
    
break




/* ========================================================================
_________________________________ Group Menu _________________________________*/

case 'setwelcome':{
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!q) return reply('Masukkan Teksnya ')

const dataPenggunaWelcome = { 
    'text'    : q,
    'status' : 'on'
};


if (Array.isArray(db_welcome[from])) {
    db_welcome[from] = [{ text: q, status: 'on' }];
}else {
    db_welcome[from] = [{ text: q, status: 'on' }];
}

fs.writeFileSync('./db/welcome.json', JSON.stringify(db_welcome))

return reply("Welcome Berhasil di Set")
}
break

case 'delwelcome':{
    if (!resbot_.isAdmins) return reply(mess.admin)



if (Array.isArray(db_welcome[from])) {
    delete db_welcome[from];
    fs.writeFileSync('./db/welcome.json', JSON.stringify(db_welcome))
    reply('Welcome Berhasil Di Hapus')

}else {
    reply('Welcome Sudah Di Hapus')
}


}
break

case 'welcome':{
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!q) return reply('Example : welcome on/off')
    if (q == 'on') {

        if (Array.isArray(db_welcome[from])) {
        let existingIndex_on = db_welcome[from].findIndex(data => 'status' in data);

        if (existingIndex_on !== -1) {
                db_welcome[from][existingIndex_on].status = 'on';
                fs.writeFileSync('./db/welcome.json', JSON.stringify(db_welcome))
                return reply('Berhasil Welcome Di Aktifkan')
        }

            
        }else {
            return reply('Anda Belum Membuat Pesan Welcome \n\nSilakan ketik setwelcome')
        }

    }else if(q == 'off') {

         if (Array.isArray(db_welcome[from])) {
        let existingIndex_off = db_welcome[from].findIndex(data => 'status' in data);

        if (existingIndex_off !== -1) {
                db_welcome[from][existingIndex_off].status = 'off';
                fs.writeFileSync('./db/welcome.json', JSON.stringify(db_welcome))
                return reply('Berhasil Welcome Dimatikan')
        }

            
        }else {
            return reply('Anda Belum Membuat Pesan Welcome \n\nSilakan ketik setwelcome')
        }

    } else {
        //return reply('Example : welcome on/off')
    }



}
break



case 'pushkontak':{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('*Grup Only* \n\nGunakan perintah *pushkontak2* untuk di chat pribadi')
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
autoresbot.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break


case 'del': case 'delete':{
    if (!resbot_.isAdmins) return reply(mess.admin)
autoresbot.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break

case 'linkgrub':
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
let response = await autoresbot.groupInviteCode(from)
autoresbot.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break








case 'infogrub':
case 'infogroup': case 'infogc': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
let response = await autoresbot.groupInviteCode(from)
let teks = `
ID          : ${groupMetadata.id}
Name Group  : ${groupMetadata.subject}
Link        : https://chat.whatsapp.com/${response}
Total Users : ${groupMetadata.size}

Settings
Antilink    : ${antilinkStatus}
Antilinkv2  : ${antilinkv2Status}
Welcome     : ${global.welcome_status}
`
teks = '```'+teks+'```'

// autoresbot.sendMessage(from, {text: teks},{quoted:m})

    autoresbot.sendText(from, teks, m, { detectLink: true })
}
break
case 'stalker': case 'stalknick': {
if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
let [type, id, zone] = args
if (type.toLowerCase() == 'ff') {
  if (!id) throw `No Query id, Example ${prefix + command} id`
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${id}?apikey=YoshCasaster`)
  m.reply(get_result.result);
      db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ml') {
if (!id) throw `Example: ${prefix + command} id/server`
get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${id}?apikey=YoshCasaster`,);
m.reply(get_result.result);
      db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'aov') {
  if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
  let anu = await fetchJson(api('yosh', '/api/nickaov', { apikey: global.APIKeys[global.APIs['yosh']], query: id }))
  if (anu.status == false) return m.reply(anu.result.message)
  m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
      db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'cod') {
  if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
  let anu = await fetchJson(api('yosh', '/api/nickcod', { apikey: global.APIKeys[global.APIs['yosh']], query: id }))
  if (anu.status == false) return m.reply(anu.result.message)
  m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
      db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'pb') {
  if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
  let anu = await fetchJson(api('yosh', '/api/nickpb', { apikey: global.APIKeys[global.APIs['yosh']], query: id }))
  if (anu.status == false) return m.reply(anu.result.message)
  m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
      db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ig') {
  if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
  let { result: anu } = await fetchJson(api('yosh', '/api/stalker/ig', { username: id }, 'apikey'))
  if (anu.status == false) return m.reply(anu.result.message)
  hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
      db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'npm') {
  if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
  let { result: anu } = await fetchJson(api('yosh', '/api/stalker/npm', { query: id }, 'apikey'))
  if (anu.status == false) return m.reply(anu.result.message)
  m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
      db.data.users[m.sender].limit -= 1
} else {
  m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
}break
          }
case "hitungwr": case "wr":
  {
    if (!q) return reply (`Contoh: 
⭔ ${prefix + command} Total Match + Total Winrate + Req Winrate
⭔ ${prefix + command} 1000+58+90`);
    let [total_match, total_winrate, req_winrate ] = text.split`+`
        var { data } = await axios.get(
      `https://api.zahwazein.xyz/information/hitungwr?apikey=zenzkey_d395a7237940&text=${total_match}&text2=${total_winrate}&text3=${req_winrate}`,
    );
    var xy = `⭔*Total Match* : ${data.result.total_match}\n`;
    xy += `⭔*Total Winrate* : ${data.result.total_winrate}\n`;
    xy += `⭔*Req Winrate* : ${data.result.req_winrate}\n`;
    xy += `📄 *Keterangan* : ${data.result.description}`;
    
    autoresbot.sendMessage(m.chat, { text: xy }, { quoted: m });
  }
  break


case 'resetlinkgc':
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Kamu itu bukan admin, jadi jangan pake fitur ini')
autoresbot.groupRevokeInvite(from)
break


case 'kick': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await autoresbot.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await autoresbot.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await autoresbot.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'promoteme': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isPremium) return reply('Hanya Untuk Member Premium')
await autoresbot.groupParticipantsUpdate(from, [m.sender], 'promote')
}
break

case 'demote': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await autoresbot.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break

case 'hidetag': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
autoresbot.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

case 'grub':
case 'grup':
case 'group': {   
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')

if (!q) return reply(`Silahkan Ketik\n
${prefix + command} open
${prefix + command} close`)

if (args[0] === 'close'){
await autoresbot.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await autoresbot.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} 
}
break

case 'editinfo': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')

 if (!q) return reply(`Silahkan Ketik\n
${prefix + command} on
${prefix + command} off`)

 if (args[0] === 'on'){
await autoresbot.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sekarang *Semua Anggota Dapat Mengedit Pengaturan Grup*`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'off'){
await autoresbot.groupSettingUpdate(from, 'locked').then((res) => reply(`Sekarang *Hanya Admin Yang Dapat Mengedit Pengaturan Grup*`)).catch((err) => reply(jsonformat(err)))
 }

}
break


case 'editsubjek': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
if (!q) return reply('Text nya ?') 
await autoresbot.groupUpdateSubject(m.chat, text).then((res) => console.log('Edit Grub') ).catch((err) => console.log('Edit Grub Gagal'))
             
}
break

case 'editdesk':{
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
if (!q) return reply('Text Nya ?')
await autoresbot.groupUpdateDescription(m.chat, text).then((res) => console.log('Edit Desk Grub') ).catch((err) => console.log('Edit Desk Gagal'))
reply('Silakan Baca Deskripsi Grub Baru \n\n'+groupMetadata.desc)
}
break

case 'tagall': {
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
autoresbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'demoteall':
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
reply(mess.wait)
var groupe = await autoresbot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
autoresbot.groupParticipantsUpdate(from, mems, 'demote')
break

case 'promoteall':
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!resbot_.isAdmins) return reply('Lah Dikira Admin Group Kali')
reply(mess.wait)
var groupe = await autoresbot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
autoresbot.groupParticipantsUpdate(from, mems, 'promote')
break



case 'sewa':
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (resbot_.isBan) return reply('*Lu Di Ban Owner*')

let teks = `¥ Price Sewa Bot LvyNPC / Store €

🔏 3 hari   = 5k
🔏 7 hari   = 10k
🔏 3 minggu = 21k
🔏 1 bulan  = 30k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
Contoh => sewabot 1 minggu`
teks = '```'+teks+'```'
reply(teks)

break

case 'sewabot':
if (!m.isGroup) return reply('Buat Di Group Ya Kak!')
if (resbot_.isBan) return reply('*Lu Di Ban Owner*')
if (!q) return reply(`*Contoh* :\n#sewabot 3 minggu `)
if (q == '3 hari') {
    timedstamp = 3
    total_harisewa = '3 hari'
}else if(q == '7 hari'){
     timedstamp = 7
    total_harisewa = '7 hari'
}else if(q == '3 minggu'){
     timedstamp = 21
    total_harisewa = '3 minggu'
}else if(q == '1 bulan'){
     timedstamp = 30
    total_harisewa = '1 bulan'
}else {
    let teks = `Format Salah !, silakan pilih list di bawah

🔏 3 hari   = 5k
🔏 7 hari   = 10k
🔏 3 minggu = 21k
🔏 1 bulan  = 30k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
Contoh => sewabot 1 minggu`
teks = '```'+teks+'```'
reply(teks)
}

let expireSewaGc = tanggal(tanggal_add(timedstamp))


let cret = await autoresbot.groupCreate('Sewa Autoresbot.com '+total_harisewa, [])
let response = await autoresbot.groupInviteCode(cret.id)
await autoresbot.groupSettingUpdate(cret.id, 'locked').then((res) => console.log(`Sekarang *Hanya Admin Yang Dapat Mengedit Pengaturan Grup*`)).catch((err) => console.log(jsonformat(err)))
await autoresbot.groupUpdateDescription(cret.id, `Grub Ini Masih Ada Hutang

Silakan Untuk Melunasi Pembayaran
Sebelum BOT keluar Otomatis

ID Group: ${cret.id}
Created : ${hariini}
Expired : ${expireSewaGc}

Link Pembayaran :

Dan Konfirmasi Ke Admin
wa.me/6281935593316?text=helomin+mau+konfirmasi+id+grub+${cret.id}

`).then((res) => console.log('Edit Grub') ).catch((err) => console.log('Edit Grub Gagal'))


// Prosess data sewa
const dataPengguna = { 
    'id'    : cret.id,
    'nama'  : 'Sewa Autoresbot.com '+total_harisewa,
    'nowa'  : m.sender,
    'mulai' : hariini,
    'akhir' : expireSewaGc,
    'status' : 'belum bayar'

};
let dataSewa = db_sewa[m.sender];
if (dataSewa) {
      const statusPembayaran = dataSewa[0].status;
      if (statusPembayaran === "belum bayar") {
        return reply("Anda Tidak Dapat Menyewa, Karena ada proses sewaan yang belum di bayar");
      }
}


db_sewa[m.sender] = Array.isArray(db_sewa[m.sender]) ? db_sewa[m.sender] : [];

db_sewa[m.sender].push(dataPengguna);

fs.writeFileSync('./db/sewa.json', JSON.stringify(db_sewa))


















autoresbot.sendMessage(m.sender, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000 + 3600).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
_▸ ID Grub : ${cret.id}
_▸ Link : https://chat.whatsapp.com/${response}
`})
reply('Pesan Dan Link Group Khusus Sudah Terkirim Di Chat Privasi Anda')


break



case 'listsewa':{
    let listSewa = db_sewa[m.sender];
    let daftarlist = listSewa.map(item => `╭─「 
│ *id*    : ${item.id}
│ *nama* : ${item.nama}
│ *mulai* : ${item.mulai}
│ *akhir* : ${item.akhir}
│ *status* : ${item.status}
╰────────────────────────

`);


    return reply(daftarlist.join(''))

}
    
break




case 'outgrup': 
case 'outgrupsewa': 
case 'outgroup': {
if (!resbot_.isPremium) return reply(mess.owner)
if (!q) return reply(`example : ${prefix + command} 120363204743427585@g.us`)
    await autoresbot.groupLeave(q).then((res) => console.log('Keluar Grub') ).catch((err) => console.log('Keluar Grub Gagal'))
        
}
break



case 'bcgc': case 'bcgroup': {
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (m.isGroup) return reply(mess.private)
if (!q) return reply(`Text mana?\n\nExample : ${prefix + command} ini pesan broadcast tes`)
let getGroups = await autoresbot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
                autoresbot.sendMessage(i, {text: `${q}`})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group \n\nHarap hati-hati jangan terlalu sering menggunakan fitur ini karena dapat menyebabkan spam dan akun anda rentan keban`)
}
break

case 'bcimg': case 'bcvid': case 'bcvideo': case 'share': {
if (!resbot_.isPremium) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
if (m.isGroup) return reply(mess.private)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group`)
reply(mess.wait)
let getGroups = await autoresbot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
global.teksjpm = text
for (let xnxx of anu) {
let metadat72 = await autoresbot.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await autoresbot.downloadAndSaveMediaMessage(quoted)
mem = await UploadTph(media)
await autoresbot.sendMessage(xnxx, { image: { url: mem }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: m })
await sleep(2000)
} else {
if(/video/.test(mime)){
media1 = await autoresbot.downloadAndSaveMediaMessage(quoted)
mem1 = await UploadTph(media1)
await autoresbot.sendMessage(xnxx, { video: { url: mem1 }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: m })
await sleep(2000)
} else {
await autoresbot.sendMessage(xnxx, { text: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: m })
await sleep(2000)
}}
}
}
break





case 'antilink': {
                if (!m.isGroup) return reply(mess.group)
                if (!resbot_.isAdmins && !resbot_.isPremium) return reply(mess.admin)
                if (!resbot_.isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilink = true
                    reply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilink = false
                    reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off

Antilink : langsung kick
Antilinkv2 : hanya delete pesan`)
                }
}
break

case 'antilinkv2':
    if (!m.isGroup) return reply(mess.group)
    if (!resbot_.isAdmins && !isGroupOwner && !resbot_.isPremium) return reply(mess.admin)
    if (!resbot_.isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
    if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
    if (q == 'on'){
        global.db.data.chats[m.chat].antilinkv2 = true
        reply(`Berhasil Mengaktifkan antilinkv2`)
    } else if (q == 'off'){
        global.db.data.chats[m.chat].antilinkv2 = false
        reply(`Berhasil Mematikan antilinkv2`)
    }else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off

Antilink : langsung kick
Antilinkv2 : hanya delete pesan`)
                }
break


case 'getname': {
// loading()
if (resbot_.isReply) {
namenye = await autoresbot.getName(m.quoted.sender)
reply(namenye)
} else if (!resbot_.isReply) {
autoresbot.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break


case 'getpic': {
// loading()
if (resbot_.isReply) {
try {
pporg = await autoresbot.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
autoresbot.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (!resbot_.isReply) {
try {
pporgs = await autoresbot.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
autoresbot.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break


case "setppbot": {
if (!resbot_.isPremium) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await autoresbot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await autoresbot.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await autoresbot.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
        break




case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(mess.group)
if (!resbot_.isAdmins) return reply(mess.admin)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await autoresbot.downloadAndSaveMediaMessage(quoted)
const oke = await UploadTph(media)
            
            
await autoresbot.updateProfilePicture(from, { url: oke }).catch((err) => fs.unlinkSync(media))
reply('done')
}
break


case 'afk': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`😓 Yahh, Kak *${pushname}*... Telah Afk\n\n ❏  *Alasan* ${text ? ': ' + text : ''}`)
}
break



        
case 'listadmin':
      if (!m.isGroup) return reply(mess.group)
      try {
            let teks = ''
            for (let mem of participants) {
                  if (mem.admin != null) {
                        teks += `⭔ @${mem.id.split('@')[0]}\n`
                  }
                  
                  }
            autoresbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })

        } catch (e) {
}
break


case 'listmember':
      if (!m.isGroup) return reply(mess.group)
      try {
            let teks = ''
            for (let mem of participants) {
                  if (mem.admin == null) {
                        teks += `⭔ @${mem.id.split('@')[0]}\n`
                  }
                  
                  }
            autoresbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })

        } catch (e) {
}
break


case 'listalluser':
      if (!m.isGroup) return reply(mess.group)
      try {
            let teks = ''
            for (let mem of participants) {
                        teks += `⭔ @${mem.id.split('@')[0]}\n`
                  }
            autoresbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })

        } catch (e) {
}
break
case "liststore": {
    if (!m.isGroup) return reply(mess.group)
    if (listdb.length === 0) return reply(`Belum Ada List Message Di Database`)
    if (!isAlreadyResponListGroup(m.chat, listdb)) return reply(`Belum Ada List Message Yang Terdaftar Di Group Ini`)
    ttx = `Hallo Kak , Berikut Beberapa List Yang Tersedia Di *${ownername}* Saat Ini\n\n╭──────☰⃟⃟\n`
    for (let x of listdb) {
      if (x.id === from) {
        ttx += "│❚ " + "*" + x.key + "*\n"
      }
    }
    xxt = `╰──────☰⃟⃟\n✧──···[ *${ownername.toUpperCase()}* ]···──✧`
    const txthasil = ttx + xxt
    autoresbot.sendMessage(m.chat, { text: txthasil, mentions: [quoted.sender]}, {quoted:m})
  }
  break

        
case 'setbio':
      if (!resbot_.isPremium && !m.key.fromMe) return reply(mess.owner)
      if (!q) return reply('Teksnya?')
      autoresbot.updateProfileStatus(`${q}`)
      reply(`Sukses mengganti bio ke ${q}`)
break

case 'setname':
      if (!resbot_.isPremium && !m.key.fromMe) return reply(mess.owner)
      if (!q) return reply('Teksnya?')
      autoresbot.updateProfileName(q)
      reply(`Sukses mengganti nama ke ${q}`)
break
        

        
        
    case 'mute':
        if (!resbot_.isPremium && !m.key.fromMe) return reply(mess.admin)
        if (!m.isGroup) return reply(mess.group)
        if (resbot_.isMuted) return reply(`udah mute`)
        db_mute.push(from)
        fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
        reply('Bot berhasil dimute di chat ini')
    break




    case 'ping':
        if (q) return
    const startTime = process.hrtime();

    // Lakukan operasi atau perhitungan yang ingin diukur kecepatan responsnya
    // Contoh: operasi sederhana (1 + 1)
    const hasilOperasi = 1 + 1;

    const endTime = process.hrtime(startTime);
    const kecepatanRespon = (endTime[0] * 1e9 + endTime[1]) / 1e6; // Mengambil waktu respons dalam milidetik

    reply('Speed: ' + kecepatanRespon + ' ms');



    break;
case 'uptime':
    if(q) return

        reply(formatUptime(os.uptime()) )
break

case 'infosystem':
if (!resbot_.isAdmins) return reply(mess.admin)


try {


const totalMemoryGB = Math.round(os.totalmem() / (1024 * 1024 * 1024));
const freeMemoryGB  = Math.round(os.freemem() / (1024 * 1024 * 1024));
const usedMemory    = Math.round(process.memoryUsage().rss / (1024 * 1024)); // dalam MB
const cpucore       = os.cpus().length


let infosystem = `╭────「 *ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ* 」
│
│✦ Tᴏᴛᴀʟ ᴍᴇᴍᴏʀʏ--> *${totalMemoryGB} GB*
│✦ Fʀᴇᴇ ᴍᴇᴍᴏʀʏ--> *${freeMemoryGB} GB*
│✦ CPU Cᴏʀᴇ--> *${cpucore}*
│✦ Uꜱᴅ ᴍᴇᴍᴏʀʏ--> *${usedMemory} MB*
│✦ Nᴏᴅᴇ ᴊꜱ ᴠᴇʀꜱɪᴏɴ--> *${process.version}*
│✦ Pʟᴀᴛꜰᴏʀᴍ--> *${os.platform()}*
│✦ Uptime--> *${formatUptime(os.uptime() )}*
│
╰────────────────────────`
reply(infosystem)

// infosystem = '```'+infosystem+'```'



} catch(e){
    console.log(e)
}


break












/* ========================================================================
_________________________________ Information _________________________________*/



case 'infogempa':{
let tod = await fetchJson(`https://api.autoresbot.com/information/infogempa?apikey=${apikey_autoresbot}`)


var capt = `_*Info Gempa*_

*• Tanggal :* ${tod.messages.data.waktu}
*• Magnitude :* ${tod.messages.data.magnitude}
*• Kedalaman :* ${tod.messages.data.kedalaman}
*• Koordinat :* ${tod.messages.data.koordinat}
*• Kedalaman :* ${ tod.messages.data.kedalaman}
*• Wilayah :* ${tod.messages.data.lokasi}
*• Potensi :* ${tod.messages.data.potensi}`
await autoresbot.sendMessage(m.chat, { image: {url: tod.messages.data.map}, caption: capt}, {quoted:m})
}

break




case 'ramalanjodoh': case 'ramaljodoh': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} Autores, 7, 7, 2005, Putri, 16, 11, 2004`)
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'artinama': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
    if (args.length == 0) return reply(`Example : ${prefix + command} Autores`)

 if (!text) return reply(`Example : ${prefix + command} Autores`)
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
 if (args.length == 0) return reply(`Example : ${prefix + command} Budi|Putri`)
 if (!q) return reply(`Example : ${prefix + command} Budi|Putri`)
 let [nama1, nama2] = q.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break



case 'sifatusaha': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix+ command} 28, 12, 2021`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break


case 'pekerjaan': case 'kerja': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break


case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break

case 'potensipenyakit': case 'penyakit': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break



case 'artitarot': case 'tarot': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break


case 'fengshui': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
if (!q) return reply(`Example : ${prefix + command} Autores, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
 let [nama, gender, tahun] = q.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break

case 'haribaik': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break


case 'harisangar': case 'taliwangke': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply (`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'harinaas': case 'harisial': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break

case 'nagahari': case 'harinaga': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break


case 'arahrejeki': case 'arahrezeki': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'peruntungan': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')

 if (!q) return reply(`Example : ${prefix + command} Autores, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
 let [nama, tgl, bln, thn, untuk] = q.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'weton': case 'wetonjawa': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break


case 'sifat': case 'karakter': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} Autores, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = q.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break

case 'keberuntungan': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} Autores, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = q.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break


case 'memancing': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022`)
 let [tgl, bln, thn] = q.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

case 'masasubur': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
 if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
 let [tgl, bln, thn, siklus] = q.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return reply(anu.message)
 autoresbot.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

















/* ========================================================================
_________________________________ Islamic _________________________________*/


case 'jadwalsholat':
{
if (!q) return reply(`Masukkan Nama kota Contoh ${prefix + command} sambas`)

let getImage = await fetchJson(`http://api.aladhan.com/v1/calendarByCity/2023/12?city=${q}&country=Indonesia&method=2`)

try{


await reply(`Jadwal Sholat Area *${q}*

Subuh   : ${getImage.data[0].timings.Fajr}
Zuhur   : ${getImage.data[0].timings.Dhuhr}
Asar    : ${getImage.data[0].timings.Asr}
Magrib  : ${getImage.data[0].timings.Maghrib}
Isya    : ${getImage.data[0].timings.Isha}
`)
} catch (err){
  reply('Tidak ada hasil nih untuk kota ini')
}
}
break





/* ========================================================================
_________________________________ Image Creator _________________________________*/


case 'negative':
case 'removal':
case 'embos':
case 'keong':
case 'grayscale':
case 'blur': {
if (!quoted) return reply(`Kirim/Reply Gambar Hitam Putih Dengan Caption ${prefix+command}`)

try {
  const meks = await autoresbot.downloadAndSaveMediaMessage(quoted)
  const oke = await UploadTph(meks)
  result = await getBuffer(`https://api.autoresbot.com/imagecreator/negative?apikey=${apikey_autoresbot}&url=${oke}`)
  autoresbot.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
} catch {
  reply('Reply image')
}


}
break



case 'toimage': case 'toimg': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
if (!quoted) return reply('Reply Image')

if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await autoresbot.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply("Gagal")
let buffer = fs.readFileSync(ran)
autoresbot.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break







/* ========================================================================
_________________________________ Maker _________________________________*/

case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (resbot_.isBan) return reply('*Lu Di Ban Owner*')
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} Autores`)
try {
    ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.autoresbot.com/imagecreator/${command}?apikey=${apikey_autoresbot}&text=${ini_txt}`)
if(ini_buffer){
    autoresbot.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
}
} catch {
    console.log('ada error di menu ini')
}
break




case 'sticker': case 's': case 'stickergif': case 'sgif': {

 if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await autoresbot.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await autoresbot.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}

}
break


case 'wm': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')

let teks = `${q}`

bnnd = q.split("|")

packname_wm = bnnd[0]
packname_author = bnnd[1]


try {
 if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await autoresbot.sendImageAsSticker(from, media, m, { packname: `${packname_wm}`, author: packname_author })
await fs.unlinkSync(encmedia)
}else {
  reply(`Reply Image/Sticker

Example 1: wm nama
Example 2: wm youtube | creative`)
}
} catch (e) {
reply(mess.error)
}
}
break


case 'wmvideo':{
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
let teks = `${text}`
try {
 if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await autoresbot.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: author })
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
} catch (e) {
reply(mess.error)
}
}
break




case  'qcstick':{
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await autoresbot.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await autoresbot.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await autoresbot.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 


















/* ========================================================================
_________________________________ Maker _________________________________*/



case 'done':
    if (!resbot_.isPremium) return reply('*Khusus Premium*')
try {
    let cekm = m.quoted.sender
}catch{
    return reply('Balas Sebuah Pesanan Berupa Text')
}
if (!m.quoted.text) return reply('Balas Sebuah Pesan Text')
tesk_proses = `ꜱᴛᴀᴛᴜꜱ ᴘᴇᴍᴇꜱᴀɴᴀɴ
    
ꜱᴛᴀᴛᴜꜱ   : ᴘᴇꜱᴀɴᴀɴ ꜱᴜᴄᴄᴇꜱꜱ
ᴘᴇꜱᴀɴᴀɴ  : *${quoted.text}*
ᴡᴀᴋᴛᴜ   : *${wib} ᴡɪʙ*
ᴛᴀɴɢɢᴀʟ : *${hariini}*

@${quoted.sender.split("@")[0]} ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ ꜱᴜᴅᴀʜ ᴏʀᴅᴇʀ ᴅɪ ᴋᴀᴍɪ`
autoresbot.sendMessage(from, { text : tesk_proses , mentions: [quoted.sender]}, {quoted:m})
break


case 'proses':
    if (!resbot_.isPremium) return reply('*Khusus Premium*')
try {
    let cekm = m.quoted.sender
}catch{
    return reply('Balas Sebuah Pesanan Berupa Text')
}
if (!m.quoted.text) return reply('Balas Sebuah Pesan Text')
tesk_proses = `ꜱᴛᴀᴛᴜꜱ ᴘᴇᴍᴇꜱᴀɴᴀɴ
    
ꜱᴛᴀᴛᴜꜱ   : ᴘᴇꜱᴀɴᴀɴ ᴅɪᴘʀᴏꜱᴇꜱ
ᴘᴇꜱᴀɴᴀɴ  : *${quoted.text}*
ᴡᴀᴋᴛᴜ   : *${wib} ᴡɪʙ*
ᴛᴀɴɢɢᴀʟ : *${hariini}*

@${quoted.sender.split("@")[0]} ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ ꜱᴜᴅᴀʜ ᴏʀᴅᴇʀ ᴅɪ ᴋᴀᴍɪ`
autoresbot.sendMessage(from, { text : tesk_proses , mentions: [quoted.sender]}, {quoted:m})
break


case 'list_store11':


tesk_proses = `ɪɴɪ ʜᴀɴʏᴀ ᴄᴏɴᴛᴏʜ
    
Berikut beberapa daftar menu yang ada di store kalimat

1. Top Up Game
2. ..
...

`
//tesk_proses = '```'+tesk_proses+'```'
autoresbot.sendMessage(from, { text : tesk_proses , mentions: [quoted.sender]}, {quoted:m})
break




















/* ========================================================================
_________________________________ OWNER _________________________________*/



case 'gctag':
    if (m.isGroup) return reply(mess.private)
    if (!q) return reply('Masukkan ID Group \n\nExample : gctag 1234567889@g.us | pesannya')

      let [idgc, pesangc] = q.split`|`
  if (!idgc) return reply('Masukkan ID Group \n\nExample : gctag 1234567889@g.us | pesannya')
  if (!pesangc) return reply('Masukkan Pesannya \n\nExample : gctag 1234567889@g.us | pesannya')

        try {
                const groupMetadatagctag = await autoresbot.groupMetadata(idgc.split(" ").join("")).catch(e => {})
                const participantsgctag  = await groupMetadatagctag.participants

                autoresbot.sendMessage(idgc.split(" ").join(""), { text : pesangc , mentions: participantsgctag.map(a => a.id)})

                reply('Sukses')

            } catch(e) {
                return console.log('error' +e)
            }

 break


case 'confirmsewa':{
    if (!resbot_.superOwner) return reply(mess.superOwner)

if(!q) return reply(`Gunakan perintah : ${prefix}confirmsewa id

Example: ${prefix}confirmsewa 1234567890@g.us`)

try {
    const dataDitemukan = cariDataDenganID(q);
    if (dataDitemukan == null) {
        return reply(`Tidak ada ID grub ditemukan \n\nKetik listsewa untuk melihat daftar sewa`)

    }else{
        fs.writeFileSync('./db/sewa.json', JSON.stringify(db_sewa))

        await autoresbot.groupSettingUpdate(dataDitemukan.id, 'unlocked').then((res) => console.log(`Sekarang *Hanya Admin Yang Dapat Mengedit Pengaturan Grup*`)).catch((err) => console.log(jsonformat(err)))
await autoresbot.groupUpdateDescription(dataDitemukan.id, `GRUB TELAH DI KONFIRMASI

Silakan Ketik .promoteme untuk menjadi admin grub

`).then((res) => console.log('Edit Grub') ).catch((err) => console.log('Edit Grub Gagal'))


        return reply(`Berhasil Grub [ ${q} ] \n\nSudah Di Konfirmasi`)

    }
} catch {
    reply('error');

}

}
break



case 'mode': {
reply(`Gunakan Perintah 

*.public* untuk membuat bot menjadi publik [ semua orang ]

*.self* untuk bot menjadi self [ khusus owner ]`)
}
break
        
case 'public': {
if (!resbot_.isPremium) return reply('*Khusus Premium*') 
publik = true
reply('Sukses Change To Public')
}
break

case 'self': {
if (!resbot_.isPremium) return reply('*Khusus Premium*') 
publik = false
reply('Sukses Change To Self')
}
break



case 'enc': {
            if (!resbot_.isPremium) return reply(mess.owner)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break



case 'addprem':


if (!resbot_.isPremium) return reply(`Khusus Creator ${resbot_.isPremium}`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\n\nContoh ${prefix+command} 6285246154386 ${resbot_.isPremium}`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await autoresbot.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
db_owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(db_owner))
reply(`Nomor ${bnnd} Sudah Premium!!!`)

break

case 'delprem':
if (!resbot_.isPremium) return 
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285246154386`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = db_owner.indexOf(yaki)
db_owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(db_owner))
reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break

case 'listprem':
if (resbot_.isBan) return reply('*Lu Di Ban Owner*')
 teksooo = '*▧ 「 *L I S T - P R E M I U M* 」\n\n\n'
for (let i of db_owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${db_owner.length}*`
autoresbot.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": db_owner } })
break
case 'ban':  {

if (!resbot_.isPremium) return reply('*Khusus Premium*')

if (resbot_.mentionByTag.length !== 0) {
    orgnye = resbot_.mentionByTag[0]
}else if(quoted){
   orgnye = quoted.sender
}else {
    return reply(`Tag Orangnya Dengan Perintah ${prefix}ban`)
}
if (botNumber == orgnye) return reply(`Tidak Bisa Ban BOT ini`)



const cek_isBan = db_banned.includes(orgnye)
if (cek_isBan) return reply('*Pengguna Ini telah Di Ban*')
db_banned.push(orgnye)
fs.writeFileSync('./db/banned.json', JSON.stringify(db_banned))
return reply(`Berhasil di banned \n\nPengguna Yang Di Baned Tidak Dapat Menggunakan Semua Fitur Bot`)
}
break



case 'unban':  {
if (!resbot_.isPremium) return reply('*Khusus Premium*')

if (resbot_.mentionByTag.length !== 0) {
    orgnye = resbot_.mentionByTag[0]
}else if(quoted){
   orgnye = quoted.sender
}else {
    return reply(`Tag Orangnya Dengan Perintah ${prefix}unban`)
}

const cek_isBan = db_banned.includes(orgnye)
if (!cek_isBan) return reply('*Pengguna Ini telah Di Hapus Dari Ban*')
let delbans = db_banned.indexOf(orgnye)
db_banned.splice(delbans, 1)
fs.writeFileSync('./db/banned.json', JSON.stringify(db_banned))
reply(`*Berhasil Menghapus Pengguna yang Di Banned*`)


}
break



case 'listban':
if (resbot_.isBan) return reply('*Lu Di Ban Owner*')
 teksooop = `▧ 「 *L I S T - B A N* 」\n`
for (let ii of db_banned) {
teksooop += `   ∘  ${ii}\n`
}
reply(teksooop)
break





case 'chat': {
if (!resbot_.isPremium) return reply('*Khusus Premium*')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let chat = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
autoresbot.sendMessage(u, { text: chat }, { quoted: m })
let target = u.replace('@s.whatsapp.net','')
return reply(`*Pesan Terkirim Ke Nomor* : ${target}`)
}
break




case 'join': {
if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (!q) return reply('Masukkan Link Group!')
if (!isUrl(q) && !q.includes('whatsapp.com')) return reply('Link Invalid!')
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]

await autoresbot.groupAcceptInvite(result).then((res) => reply('*Sudah Bergabung*')).catch((err) => reply('Ada masalah saat join grub mungkin link grub invalid atau link sudah di reset'))
//reply(jsonformat(res))
}
break


case 'leave': {
    if (!resbot_.isPremium) return reply(mess.owner)
    if (!m.isGroup) return reply('Buat Di Group Ya')
                await autoresbot.groupLeave(m.chat).then((res) => console.log('Keluar Grub') ).catch((err) => console.log('Keluar Grub Gagal'))
        }
        break


case 'delmsg': case 'deletemsg': {
if (!resbot_.isPremium) return reply('*Khusus Premium*')
// loading()
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break

case 'getmsg': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
 if (!text) return reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar di list pesan`)
 autoresbot.copyNForward(from, msgs[text.toLowerCase()], true)
}
break



case 'block': {
if (!resbot_.isPremium) return reply('*Khusus Premium*')
// loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await autoresbot.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break


case 'unblock': {
if (!resbot_.isPremium) return reply('*Khusus Premium*')
// loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await autoresbot.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break


case 'vnsw':{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
await loading ()
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
autoresbot.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: db_pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${db_pengguna.length} Orang Yang Ada Di Database*`)
break

case "buatswptv":
{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
await loading ()
 if (!m.quoted) return reply(`Balas Video Dengan Caption ${prefix + command}`)
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
    "ptvMessage": ppt
}), { userJid: from, quoted:m})
autoresbot.relayMessage('status@broadcast', ptv.message, {
statusJidList: db_pengguna
})
}
reply(`*Sukses mengirim status whatsapp ke ${db_pengguna.length} Orang Yang Ada Di database*`)
break


case 'toptv':
{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
await loading ()
 if (!m.quoted) return reply(`Balas Video Dengan Caption ${prefix + command}`)
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
    "ptvMessage": ppt
}), { userJid: from, quoted:m})
autoresbot.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break






case "buatsws":{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
//await loading()
 if (!quoted) return reply(`Balas Sticker Dengan Caption ${prefix + command}`)
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
const media = await autoresbot.downloadAndSaveMediaMessage(quoted)
autoresbot.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: db_pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${db_pengguna.length} Orang Yang Ada Di database*`)
break




case 'buatsw':{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
let men = [];
for (let x of db_pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = autoresbot.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = autoresbot.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
await loading ()
}
reply(`*Sukses mengirim status whatsapp ke ${db_pengguna.length} Orang Yang Ada Di Database*`)
break

case "buatswimage":{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
await loading ()
 if (!quoted) return reply(`Balas image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Balas image dengan caption *${prefix + command}*`)
const media = await autoresbot.downloadAndSaveMediaMessage(quoted)
autoresbot.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: db_pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${db_pengguna.length} Orang Yang Ada Di Database*`)
break

case "buatswvideo":{
if (!resbot_.isPremium) return reply('*Khusus Premium*')
await loading ()
 if (!quoted) return reply(`Balas video Dengan Caption ${prefix + command}`)
if (!/video/.test(mime)) return reply(`Balas video dengan caption *${prefix + command}*`)
const media = await autoresbot.downloadAndSaveMediaMessage(quoted)
autoresbot.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: db_pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${db_pengguna.length} Orang Yang Ada Di Database*`)
break



case 'restart':
    if (!resbot_.isPremium && !m.key.fromMe) return reply(mess.owner)
    exec(`cd &&  node index`)
    sleep(4000)
    reply('Sukses')
break
     
case 'pushkontak2':{

if (!resbot_.isPremium) return reply('*Khusus Premium*')
if (!q) return reply(`Example : pushkontak2 id | teksnya \n\nUntuk melihat daftar id silakan ketik *listgc*`)
try {
      let [idgc, teksnye] = q.split(`|`)
      if (!teksnye) return reply(`Format Salah ! \n\nExample : *pushkontak2 id | teksnya*`)
      let mem = await autoresbot.groupMetadata(idgc.split(" ").join(""))
      let all_user = mem.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
      

      reply(`*Mengirim pesan ke ${all_user.length} orang, waktu selesai ${all_user.length * 4} detik*`)
      for (let geek of all_user) {
      if (botNumber != geek) {
            await sleep(4000)
            console.log('Mengirim Pesan ke : '+geek+' Success')
            await autoresbot.sendMessage(geek, {text: `${teksnye}`})
      }
      
      }
      reply(`*Sukses mengirim pesan Ke ${all_user.length} orang*`)
      }catch {
      return reply('ID Grub tidak ditemukan, harap periksa kembali')
}


}
break



        
case 'listgroup':
case 'listgrup':
case 'listgrup':
case 'listgc':
case 'gruplist':
case 'groplist':
case 'grouplist':
 let getallgrub = await autoresbot.groupFetchAllParticipating()

function formatGrup(index, grup) {
// var gcid = grup.id.replace('@g.us','')
  return `╭─「 ${index} 」 *${grup.subject}*
│ Anggota : ${grup.participants.length}
│ ID Grub : ${grup.id}
╰────────────────────────`;
}


const grupTerurut = Object.values(getallgrub).sort((a, b) => b.participants.length - a.participants.length);
let nomorUrut = 0;
const listGrupString = grupTerurut.map((grup) => formatGrup(++nomorUrut, grup)).join('\n\n');
return reply(listGrupString)
 break







/* ========================================================================
_______________________________ Random Image ______________________________*/


case 'wallhp':
case 'darkjoke':
case 'pubg':
case 'hacker':
case 'memeindo':
case 'cosplay':
case 'boneka':
case 'cecan':
case 'cogan':{
reply(mess.wait)
autoresbot.sendMessage(m.chat, { caption:mess.success, image: { url: `https://api.autoresbot.com/randomimage/${command}?apikey=${apikey_autoresbot}` }}, { quoted: m })
.catch((e) => {
reply(mess.error.api)
})
}
break
    
        
        
        
        
        
        
        
        


/* ========================================================================
_______________________________ Random Text _________________________________*/

        
case 'jawaquote':
case 'bucinquote':
case 'islamiquote':
case 'motivasi':
case 'faktaunik':
case 'pantun':
case 'puisi':
case 'randomquote':
case 'katasenja':
case 'quotesdilan':{

let tod = await fetchJson(`https://api.autoresbot.com/randomtext/${command}?apikey=${apikey_autoresbot}`)
try {
  const dilan = tod.messages.data
autoresbot.sendMessage(m.chat, {text: dilan}, {quoted: m})
} catch {
  console.log('ERROR API')
}


}
break


case 'animequotes':{

let tod = await fetchJson(`https://api.autoresbot.com/randomtext/${command}?apikey=${apikey_autoresbot}`)
try {
  const dilan = tod.messages.data.quotes
  const getImage = tod.messages.data.thumb
await autoresbot.sendMessage(m.chat, { image : { url : getImage }, caption: dilan }, { quoted:m })

} catch {
  console.log('ERROR API')
}


}
break




/* ========================================================================
_________________________________ TextPro  _____________________________________*/

case 'blackpink':
case 'bloodfrosted':
case 'foggywindow':
case 'fireworksparkle':
case 'deluxesilver':
case 'cloud':
case 'breakwall':
case 'bokeh':
case 'box3d':
case 'futureneon':
case 'jokerlogo':
case 'impressiveglitch':
case 'icecold':
case 'horrorblood':
case 'holographic':
case 'harrypotter':
case 'halloween':
case 'greenneon':
case 'sliced':
case 'magma':
case 'luxury':
case 'metaldark':
case 'minion':
case 'natureleaves':
case 'neon':
case 'neonlight':
case 'newyearcard':
case 'roadwarning':
case 'sandsummer':
case 'sandwriting':
case 'strawberry':
case 'sandengraved':
case 'summersand':
case 'thunder':
case 'watercolor':
case 'wonderfulgraffiti': {
if (!q) return reply(`Masukkan nama Contoh ${prefix + command} melinda`)
reply(mess.wait)
let getImage = await getBuffer(`https://api.autoresbot.com/textpro/${command}?apikey=${apikey_autoresbot}&text=${q}`)
try{
await autoresbot.sendMessage(m.chat, {image: getImage, caption: mess.success}, {quoted: m})
} catch (err){
reply(util.format(err))
}
}
break


        
case 'avenger':
case 'coolgravity':
case 'wolflogo':
case 'glitch':
case 'lionlogo':
case 'marvelstudio':
case 'ninjalogo':
case 'pornhub':
case 'space':
case 'steel3d':
case 'wallgravity':{
if (!q) return reply(`Masukkan nama Contoh ${prefix + command} kutang gaming`)
if (!args[0]) return reply(`Masukkan nama Contoh ${prefix + command} kutang gaming`)
if (!args[1]) return reply(`Masukkan nama Contoh ${prefix + command} kutang gaming`)
reply(mess.wait)
let getImage = await getBuffer(`https://api.autoresbot.com/textpro/${command}?apikey=${apikey_autoresbot}&text1=${args[0]}&text2=${args[1]}`)
try{
await autoresbot.sendMessage(m.chat, {image: getImage, caption: mess.success}, {quoted: m})
} catch (err){
reply(util.format(err))
}
}
break


        
        


/* ========================================================================
_________________________________ Tools  _____________________________________*/




case 'hd':
case 'remini':
case 'hdfree': {




try {

     reply(mess.wait)
    const meks = await autoresbot.downloadAndSaveMediaMessage(quoted_)
    const oke = await UploadTph(meks)
    let remini = await fetchJson(`https://api.autoresbot.com/tools/remini3?url=${oke}&apikey=${apikey_autoresbot}`, apikey_autoresbot)
    await autoresbot.sendMessage(m.chat, { image : { url : remini.messages.data}, caption: mess.success }, { quoted:m })
} catch(e) {
    console.log('ERROR : '+e)
    return reply(`Balas Image dengan ${prefix + command}`)
}





}
break



case 'lirik': {
if (!q) return reply("Judulnya?")
let d = await fetchJson(`https://api.autoresbot.com/search/lirik?apikey=${apikey_autoresbot}&query=${q}`)
autoresbot.sendMessage(m.chat, { text: d.messages.data }, { quoted: m })
}
break




case "createqr": {
reply(mess.wait)
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Autores`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
autoresbot.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break


case "detectqr": {
if (!resbot_.isPremium) return reply('*Khusus Pemilik!*')
reply(mess.wait)
try {
mee = await autoresbot.downloadAndSaveMediaMessage(quoted)
mem = await UploadTph(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break






case 'inspect': {
if (resbot_.isBan) return reply('*Lu Di Ban Owner*')
reply(mess.wait)
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
autoresbot.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${botname}`
try {
pp = await autoresbot.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
autoresbot.sendFile(from, pp, "", m, { caption: tekse, mentions: await autoresbot.parseMention(tekse) })

})
}
break




case 'git': case 'gitclone':
                if (!args[0]) return reply(`Mana link nya?`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
                reply(mess.wait)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                autoresbot.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            .catch(console.error)
            break


case "ssweb":{
if (!q) return reply(`Contoh ${prefix+command} link`)
reply(mess.wait)
global.sh = q
let krt = await ssweb(global.sh)
autoresbot.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break




case 'tomp4': case 'tovideo': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
if (/webp/.test(mime)) {
let { webp2mp4File } = require('./lib/uploader')
let media = await autoresbot.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await autoresbot.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted:m})
await fs.unlinkSync(media)
}else {
   return reply(`Balas sticker video Dengan Caption ${prefix + command}`)
}
}
break

case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
let media = await autoresbot.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
autoresbot.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${autoresbot.user.name}.mp3`}, { quoted : m })
}
break


case 'toaudio': case 'audio': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
if (!quoted) return reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
let media = await autoresbot.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
autoresbot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break



case 'tovn': case 'voice': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
if (!quoted) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
autoresbot.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://portofolio-yosepwd.yosepwahyu.repl.co/',
title: `LVY (LeonyLoveYosep)`,
sourceUrl: `https://portofolio-yosepwd.yosepwahyu.repl.co/`, 
thumbnail: thumb
}
}})
}
break



case 'togif': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
// loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) return reply(`*reply sticker with caption* *${prefix + command}*`)
 let { webp2mp4File } = require('./lib/uploader')
let media = await autoresbot.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await autoresbot.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break

case 'tourl': {
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
if (!/video/.test(mime) && !/image/.test(mime)) return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await autoresbot.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'emojimix': { 
if (resbot_.isBan) return reply('*Mohon maaf, saat ini nomor kamu sudah di baned dari bot ini*')
//loading()
let hitungtext = args.join("");
if (!hitungtext.indexOf('+')) return reply(`Example : ${prefix + command} 😅+🤔`)
if (args.length == 0) return reply(`Example : ${prefix + command} 😅+🤔`)

let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of anu.results) {
    let encmedia = await autoresbot.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
    }
}
break






/* ========================================================================
_________________________________ More  _____________________________________*/



case 'report':
if (q.length > 50) return reply('Maksimal 50 Karakter')
if (!q) return reply(`Ketik *${prefix + command} pesan error*

Example: report min ada error di menu .toimage`)

let tchat = `REPORT ERROR

From : ${sender}
Message: ${q}`
// Jangan di ubah ya nomor ini biar kalo ada yang report biar admin bisa fix fiturnya
await autoresbot.sendMessage('62895328005151@s.whatsapp.net', { text: tchat })
        
 reply('Done, Laporan diterima')
break



case 'sc':
case 'script': {
let teks = `╭「 𝙎𝘾𝙍𝙄𝙋𝙏 𝘼𝙐𝙏𝙊𝙍𝙀𝙎𝘽𝙊𝙏 」
│
│✦ ᴠᴇʀꜱɪᴏɴ : 1.0.3 
│✦ ɴᴏ ᴇɴᴄ, ɴᴏ ꜱᴄᴀɴ 
│✦ ɴᴏ ʙᴜɢ & ɴᴏ ᴇʀʀᴏʀ 
│✦ ʜᴀʀɢᴀ ? 25ᴋ 
│✦ ʙɪꜱᴀ ʀᴜɴ ᴅɪ ᴘᴀɴᴇʟ/ᴛᴇʀᴍᴜx 
│✦ ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ : ${global.totalAllfitur}
╰────────────────────────✦

╭「 𝗖𝗮𝗿𝗮 𝗢𝗿𝗱𝗲𝗿 」

✦ ꜱɪʟᴀᴋᴀɴ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇɴᴅᴀꜰᴛᴀʀᴀɴ ᴀᴋᴜɴ ᴘᴀᴅᴀ ᴡᴇʙꜱɪᴛᴇ autoresbot.com/auth/
✦ ꜱᴇᴛᴇʟᴀʜ ɪᴛᴜ ᴋᴜɴᴊᴜɴɢɪ ʜᴀʟᴀᴍᴀɴ autoresbot.com/beli_panel
✦ ʟᴀʟᴜ ᴘɪʟɪʜ ᴘᴀᴋᴇᴛ -> ꜱᴄ ʙᴏᴛ
✦ ꜱᴇᴛᴇʟᴀʜ ɪᴛᴜ ʟᴀᴋᴜᴋᴀɴ ᴛʀᴀɴꜱꜰᴇʀ
✦ ᴀᴘᴀʙɪʟᴀ ᴛʀᴀɴꜱꜰᴇʀ ꜱᴜᴅᴀʜ ᴍᴀꜱᴜᴋ, ᴍᴀᴋᴀ ᴏᴛᴏᴍᴀᴛɪꜱ ꜱᴄʀɪᴘᴛ ᴀᴋᴀɴ ᴅɪ ᴋɪʀɪᴍ ᴘᴀᴅᴀ ᴇᴍᴀɪʟ ᴋᴀᴍᴜ.
✦ ꜱɪʟᴀᴋᴀɴ ᴄᴇᴋ ᴘᴀᴅᴀ ᴇᴍᴀɪʟ ᴀᴛᴀᴜ ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ꜱɪʟᴀᴋᴀɴ ᴄᴇᴋ ᴋᴏᴛᴀᴋ ꜱᴘᴀᴍ

ᴊɪᴋᴀ ʙᴜᴛᴜʜ ʙᴀɴᴛᴜᴀɴ ʜᴜʙᴜɴɢɪ ᴋᴀᴍɪ ʟᴇᴡᴀᴛ ᴛᴇʟᴇɢʀᴀᴍ (ꜰᴀꜱᴛ ʀᴇꜱᴘᴏɴ)
https://t.me/autoresbot_com
`
// teks = '```'+teks+'```'
autoresbot.sendMessage(from, {text: teks},{quoted:m})
    
}
break


tak_dimenu = false;

default:



/* ==============================================================
______________________ Example Fitur  _________________________*/










































if (msg_text.startsWith('=>')) {
    if (!resbot_.isPremium) return reply('*Khusus Premium*')
    function Return(sul) {
    sat = JSON.stringify(sul, null, 2)
    bang = util.format(sat)
    if (sat == undefined) {
    bang = util.format(sul)}
    return reply(bang)
    }
    try {
    reply(util.format(eval(`(async () => { return ${msg_text.slice(3)} })()`)))
    } catch (e) {
    reply(String(e))}
}


if (msg_text.startsWith('>')) {
    if (!resbot_.isPremium) return reply('*Khusus Premium*')
    try {
    let evaled = await eval(msg_text.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    await reply(evaled)
    } catch (err) {
    await reply(String(err))}
}


if (msg_text.startsWith('$')) {
    if (!resbot_.isPremium) return reply('*Khusus Premium*')
    exec(msg_text.slice(2), (err, stdout) => {
    if(err) return reply(err)
    if (stdout) return reply(stdout)})
}


if (isCmd && msg_text.toLowerCase() != undefined) {
    if (m.isBaileys) return
    if (from.endsWith('broadcast')) return
    let msgs = global.db.data.database
    if (!(msg_text.toLowerCase() in msgs)) return
    autoresbot.copyNForward(from, msgs[msg_text.toLowerCase()], true)
}


} // penutup case switch


if (tak_dimenu) {
console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright(firstTenCharacters)} `)




AntiSpam(m.sender)

} 



//try close
} catch (err) {


let e          = String(err)
console.log(chalk.redBright.bold('ADA YANG ERROR NIH : '+e ))
}




}




// MODULE UTAMA CLOSE




let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.blueBright.bold(`UPDATE FILE ${__filename}`))
    delete require.cache[file]
    require(file)
})