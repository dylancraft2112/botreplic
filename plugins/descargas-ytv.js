import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*ππ£ππ§ππ¨π ππ‘ ππ£π‘πππ ππ ππ€πͺππͺππ π₯ππ§π πππ¨πππ§πππ§ ππ‘ π«ππππ€*'
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `π° πΌπ¦πͺπ ππ¨π©π π©πͺ π«ππππ€ \nπ₯ πππ©πͺπ‘π€: ${ttl}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
await conn.reply(m.chat, '*[β] π¬π πππππππ πππ ππ πππππππ πππ πππ ππππππ πππππππΜ πππ ππππ*', m)}
}
handler.command = /^getvid|yt(v|mp4)?$/i
export default handler