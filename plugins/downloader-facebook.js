import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 \𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `✨ *𝑬𝒏𝒍𝒂𝒄𝒆:* ${url}`, m)
/*  let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
*/
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.register = true
handler.limit = 2
handler.exp = 35
export default handler
