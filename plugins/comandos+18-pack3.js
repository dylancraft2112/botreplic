import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 +18 𝙚𝙨𝙩𝙖́𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨 𝙪𝙨𝙚 #𝙤𝙣 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮 𝙥𝙖𝙧𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧`
let url = packmen[Math.floor(Math.random() * packmen.length)]
conn.sendButton(m.chat, `_🥵 Pack 3 🥵_`, author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🥵', `/${command}`]], m)
}
handler.help = ['pack3']
handler.tags = ['internet']
handler.command = /^(pack3)$/i
handler.level = 3
handler.register = true
handler.limit = 1
export default handler

global.packmen = [
  "https://i.imgur.com/TK0qLAu.jpg",
  "https://i.imgur.com/q8lKT40.jpg",
  "https://i.imgur.com/OwWdL9u.jpg",
  "https://i.imgur.com/Er7WiQo.jpg",
  "https://i.imgur.com/u4y0q4P.jpg",
  "https://i.imgur.com/y8y4PPr.jpg",
  "https://i.imgur.com/qgfLlRY.jpg",
  "https://i.imgur.com/irgyUTD.jpg",
  "https://i.imgur.com/uXrqfBl.jpg",
  "https://i.imgur.com/lgXjetf.jpg",
  "https://i.imgur.com/81QLh8s.jpg",
  "https://i.imgur.com/R3AlYe1.jpg",
  "https://i.imgur.com/a2Myr3F.jpg",
  "https://i.imgur.com/Wp9cgGw.jpg",
  "https://i.imgur.com/ggKUnxt.jpg",
  "https://i.imgur.com/eCJNWBl.jpg",
  "https://i.imgur.com/6lcrBQB.jpg",
  "https://i.imgur.com/eSSbXJ1.jpg",
  "https://i.imgur.com/tNyvzyO.jpg"
]
