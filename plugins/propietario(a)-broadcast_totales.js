import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝙀𝙨𝙩𝙚 𝙚𝙨 𝙪𝙣 𝙘𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: '𝑪𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒅𝒐 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒄𝒉𝒂𝒕𝒔',
body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', 
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD-V2`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*𝙀𝙡 𝙈𝙚𝙣𝙨𝙖𝙟𝙚 𝙛𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 𝘾𝙝𝙖𝙩𝙨 𝙩𝙤𝙩𝙖𝙡𝙚𝙨*\n\n*𝙉𝙤𝙩𝙖: 𝙚𝙨 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙚 𝙝𝙖𝙮𝙖 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙘𝙝𝙖𝙩𝙨 𝙩𝙤𝙩𝙖𝙡𝙚𝙨. 𝘿𝙞𝙨𝙘𝙪𝙡𝙥𝙚*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
