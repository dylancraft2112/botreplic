let handler = async (m, { conn, usedprefix }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendButton(m.chat, '*𝑳𝒍𝒂𝒎𝒆 𝒂𝒍 𝒍𝒂 𝒑𝒐𝒍𝒊𝒄𝒊́𝒂 👮‍♀️!!* 😱', wm, global.API('https://some-random-api.ml', '/canvas/lolice', { 
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), [['😻 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆', `/loli`]], m)}

handler.help = ['lolice']
handler.tags = ['maker']
handler.command = /^(lolice)$/i
export default handler
