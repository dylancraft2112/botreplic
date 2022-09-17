import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*╭━[ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨  𝙥𝙧𝙚𝙢𝙞𝙪𝙢  ]━⬣*\n*┃*\n` + prem.map(v => '*┃* ➥ 💎 @' + v.replace(/@.+/, ' 💎')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
  let text = `𝑸𝒖𝒆 𝒑𝒓𝒐!! 😜 `.trim()   
await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫',
body: '𝑺𝒖𝒑𝒆𝒓 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})

/*
await conn.sendHydrated(m.chat, null, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙏𝙤𝙥 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 🏆', '.top'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '/cuentasgb'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)
 */
 
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i

export default handler
