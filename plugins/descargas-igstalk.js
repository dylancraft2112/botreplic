import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 𝙙𝙚𝙡 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} tini*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙉𝙤𝙢𝙗𝙧𝙚
┃ *${name}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤(𝘼)
┃ *${username}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙀𝙣𝙡𝙖𝙘𝙚
┃ *https://instagram.com/${username.replace(/^@/, '')}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙧𝙚𝙨
┃ *${followersH}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙨
┃ *${followingH}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙋𝙪𝙗𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣𝙚𝙨
┃ *${postsH}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣
┃ *${description}*
`.trim()) 
  
/*  let info = `💖 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒆 𝒔𝒐𝒃𝒓𝒆 𝒍𝒂𝒔 𝑵𝒐𝒗𝒆𝒅𝒂𝒅𝒆𝒔 𝒚 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒂 𝒕𝒆𝒏𝒆𝒓 𝒍𝒂 𝒖𝒍𝒕𝒊𝒎𝒂 𝒗𝒆𝒓𝒔𝒊𝒐𝒏..
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  
*/ 
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.exp = 80
export default handler

