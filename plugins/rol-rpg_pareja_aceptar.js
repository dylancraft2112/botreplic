import fetch from 'node-fetch' 
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.sendButton(m.chat, `𝙌𝙪𝙞𝙚́𝙣?🤔\n 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚𝙡 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚 𝙦𝙪𝙚 𝙨𝙚𝙖 𝙩𝙪 𝙥𝙖𝙟𝙚𝙧𝙖`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.sendButton(m.chat, `𝑵𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐́ 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒑𝒊𝒏𝒄𝒉𝒆́ 𝒑𝒆𝒏𝒅𝒆𝒋𝒐 🙄 𝒅𝒆𝒃𝒆 𝒅𝒆 𝒆𝒔𝒕𝒂 𝒆𝒍 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `𝑺𝒆 𝒎𝒂𝒎𝒐😂  𝒖𝒔𝒕𝒆𝒅 𝒎𝒊𝒔𝒎𝒐 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒔𝒖 𝒑𝒂𝒓𝒆𝒋𝒂`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `𝒀𝒐 𝒏𝒐 𝒑𝒖𝒆𝒅𝒐 𝒔𝒆𝒓 𝒕𝒖 𝒑𝒂𝒓𝒆𝒋𝒂 😹`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.sendButton(m.chat, `𝑵𝒐 𝒑𝒖𝒆𝒅𝒆 𝒂𝒄𝒆𝒓𝒕𝒂 𝒔𝒊 𝒏𝒂𝒅𝒊𝒆 𝒔𝒆 𝒉𝒂 𝒅𝒆𝒄𝒍𝒂𝒓𝒂𝒅𝒐, 𝒅𝒆𝒄𝒍𝒂𝒓𝒂𝒕𝒆 𝒄𝒐𝒏 *${tu}* 𝑷𝒂𝒓𝒂 𝒒𝒖𝒆́ 𝒅𝒊𝒈𝒂 𝒔𝒊 𝒕𝒆 𝒂𝒄𝒆𝒓𝒕𝒂 𝒐 𝒕𝒆 𝒓𝒆𝒄𝒉𝒂𝒛𝒂`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
	
}else{
global.db.data.users[m.sender].pasangan = user
return await conn.sendButton(m.chat, `🥳😻 𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔!!! *${tu}*\n✅ 𝑫𝒆 𝒎𝒂𝒏𝒆𝒓𝒂 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒆𝒔𝒕𝒂 𝒆𝒏 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏 \n\n𝑸𝒖𝒆 𝒅𝒖𝒓𝒆 𝒑𝒐𝒓 𝒔𝒊𝒎𝒑𝒍𝒆 𝒔𝒖 𝒂𝒎𝒐𝒓 𝒚 𝒇𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 💖😁`, `*${tu} 💞 ${yo}*\n` + wm, img5, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(aceptar|acepto)$/i
handler.group = true
export default handler
