import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
await m.reply(`⬇️ *𝒆𝒔𝒆 𝒆𝒔 𝒔𝒖 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆𝒍 𝒔𝒆𝒓𝒊𝒆* ⬇️`.trim())
await m.reply(`${sn}`.trim())
}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler
