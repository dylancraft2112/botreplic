/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🥳\n𝘼𝙃𝙊𝙍𝘼 𝙎𝙄 𝙀𝙎𝙏𝙊𝙔 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀..`)
}
handler.help = ['unbanchat2']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.exp = 50

export default handler*/

//PARA GRUPOS

let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg}𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒇𝒖𝒆 𝒃𝒂𝒏𝒆𝒂𝒅𝒐🤑 𝑵𝒐 𝒆𝒔𝒕𝒂𝒓𝒆 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆 𝒉𝒂𝒔𝒕𝒂 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒂.`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
export default handler
