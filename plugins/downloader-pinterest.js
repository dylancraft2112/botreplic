import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} 𝑼𝒔𝒆 𝒅𝒆 𝒍𝒂 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒎𝒂𝒏𝒆𝒓𝒂\n*${usedPrefix + command} Loli*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
╰⊱💚⊱ *𝑬́𝒙𝒊𝒕𝒐* ⊱💚⊱╮`.trim(), m)
  
  conn.sendHydrated(m.chat, `✨ 𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚', `/pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.register = true
handler.exp = 25
handler.limit = 1
export default handler
