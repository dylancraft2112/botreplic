/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/

import { randomBytes } from 'crypto'
let link = /chat.whatsapp.com/
let handler = async (m, { conn, text, groupMetadata }) => {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
if (!text) throw '*_⚠ • ️𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒆𝒏𝒗𝒊𝒂𝒓 𝒖𝒏 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒈𝒓𝒖𝒑𝒐𝒔._*'
const linkThisGroup = `${link}`
if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, '❌ 𝑵𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒑𝒂𝒍𝒆𝒂𝒓 𝒆𝒏𝒍𝒂𝒄𝒆 𝒂 𝒐𝒕𝒓𝒐𝒔 𝒈𝒓𝒖𝒑𝒐𝒔', m)
let time = global.db.data.users[m.sender].msgwait + 300000
if (new Date - db.data.users[m.sender].msgwait < 300000) throw `*_⚠️ • 𝑻𝒊𝒆𝒏𝒆 𝒒𝒖𝒆 𝒆𝒔𝒑𝒆𝒓𝒂𝒓 ${msToTime(time - new Date())} 𝑷𝒂𝒓𝒂 𝒗𝒐𝒍𝒗𝒆𝒓 𝒂 𝒆𝒏𝒗𝒊𝒂𝒓 𝒖𝒏 𝒎𝒆𝒏𝒔𝒂𝒋𝒆_*`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(m.sender)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": '🐱⸽⃕𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫🍁⃨፝⃕✰', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '🧿 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫🔮', 'jpegThumbnail': false }}}
let teks = `*🌺 • 𝙶𝚛𝚞𝚙𝚘:* ${groupMetadata.subject}\n*🍀 • 𝙳𝚎:* ${name}\n*🍁 • 𝑵𝒖́𝒎𝒆𝒓𝒐:* wa.me/${who.split`@`[0]}\n*📧 • 𝑴𝒆𝒏𝒔𝒂𝒋𝒆:* ${text}`
for (let id of groups) {
await conn.sendMessage(id, { text: teks }, { quoted: fakegif })
global.db.data.users[m.sender].msgwait = new Date * 1
}}
handler.command = /^(msg)$/i
handler.owner = true
handler.group = true
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " m " + seconds + " s " }
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
