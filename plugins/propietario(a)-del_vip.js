let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙦𝙪𝙚 𝙫𝙖𝙣 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙙𝙚 𝙡𝙤𝙨 𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙫𝙞𝙥 😿\n\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} @tag`
if (!global.prems.includes(who.split`@`[0])) throw `${iig}𝙀𝙇/𝙇𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙉𝙊 𝙀𝙎 𝙑𝙄𝙋 🥺`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} 𝘼𝙝𝙤𝙧𝙖 𝙚𝙡/𝙡𝙖 𝙮𝙖 𝙣𝙤 𝙚𝙨 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙫𝙞𝙥 𝙩𝙚𝙣𝙜𝙖 𝙡𝙞́𝙢𝙞𝙩𝙚𝙨 𝙘𝙤𝙣 ${gt} 😰`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
