let handler = async (m, { conn }) => { 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let romper = global.db.data.users[m.sender].pasangan
var ayg = global.db.data.users[m.sender]
var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

if(ayg.pasangan == ""){
return await conn.sendButton(m.chat, `𝑼𝒔𝒕𝒆𝒅 *${name}* 𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒑𝒂𝒓𝒆𝒋𝒂`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
}
      
if (typeof beb == "undefined"){
await conn.sendButton(m.chat, `*${name}* 💔 𝑹𝒐𝒎𝒑𝒊𝒐́ 𝒅𝒆𝒇𝒊𝒏𝒊𝒕𝒊𝒗𝒂𝒎𝒆𝒏𝒕𝒆 𝒄𝒐𝒏 *${await conn.getName(romper)}*`, `*✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n` + wm, null, [ //`✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\n`
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [ m.sender, romper ]
}})                                                 
ayg.pasangan = ""
}

if (m.sender == beb.pasangan){
await conn.sendButton(m.chat, `*${name}* 💔 𝑹𝒐𝒎𝒑𝒊𝒐́ 𝒅𝒆𝒇𝒊𝒏𝒊𝒕𝒊𝒗𝒂𝒎𝒆𝒏𝒕𝒆 𝒄𝒐𝒏 *${await conn.getName(romper)}*`, `*✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [ m.sender, romper ]
}})
ayg.pasangan = ""
beb.pasangan = ""
}else {
await conn.sendButton(m.chat, `𝑼𝒔𝒕𝒆𝒅 *${name}* 𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒑𝒂𝒓𝒆𝒋𝒂`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
}}

handler.command = /^(cortar|romper|finish|terminar)$/i
handler.group = true

export default handler
