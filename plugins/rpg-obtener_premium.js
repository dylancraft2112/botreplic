let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text //tiempo total 
var tiempoDecretado = 5 * 1 //tiempo decretado 
const gata = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('limit')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.limit < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('limit')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒇𝒓𝒆 ${rpgshopp.emoticon('limit')} 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.limit -= gata * text

var tiempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚*
*┃» ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤:* »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖:* » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣:* » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text //tiempo total 
var tiempoDecretado = 15 * 1 //tiempo decretado 
const gata = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('kyubi')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒇𝒓𝒆 ${rpgshopp.emoticon('kyubi')} 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.kyubi -= gata * text
    
var tiempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚 : » ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤 :  »  -${gata * text} ${rpgshopp.emoticon('kyubi')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖 » ${user.limit + gata} ${rpgshopp.emoticon('kyubi')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 » ${user.limit} ${rpgshopp.emoticon('kyubi')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤 : » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text //tiempo total 
var tiempoDecretado = 30 * 1 //tiempo decretado 
const gata = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('emerald')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.emerald < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('emerald')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒇𝒓𝒆 ${rpgshopp.emoticon('emerald')} 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.emerald -= gata * text
    
var tiempo = 1800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚 :  » ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤 : »  -${gata * text} ${rpgshopp.emoticon('emerald')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖 » ${user.limit + gata} ${rpgshopp.emoticon('emerald')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 » ${user.limit} ${rpgshopp.emoticon('emerald')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤 : » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text //tiempo total 
var tiempoDecretado = 1 * 1 //tiempo decretado 
const gata = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('trash')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.trash < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('trash')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒎𝒑𝒓𝒆 ${rpgshopp.emoticon('trash')} 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.trash -= gata * text
    
var tiempo = 3600000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚 : » ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤 : »  -${gata * text} ${rpgshopp.emoticon('trash')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖 » ${user.limit + gata} ${rpgshopp.emoticon('trash')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 » ${user.limit} ${rpgshopp.emoticon('trash')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤 : » ${tiempoPremium} hora(s)*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 40
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('berlian')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.berlian < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('berlian')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒎𝒑𝒓𝒆 ${rpgshopp.emoticon('berlian')} 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.berlian -= gata * text
    
var tiempo = 10800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚 :  » ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤 : »  -${gata * text} ${rpgshopp.emoticon('berlian')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖 » ${user.limit + gata} ${rpgshopp.emoticon('berlian')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 » ${user.limit} ${rpgshopp.emoticon('berlian')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤 :  » ${tiempoPremium} hora(s)*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text //tiempo total 
var tiempoDecretado = 7 * 1 //tiempo decretado 
const gata = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('joincount')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('joincount')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒎𝒑𝒓𝒆 ${rpgshopp.emoticon('joincount')} 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.joincount -= gata * text
    
var tiempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚 : » ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤 :  »  -${gata * text} ${rpgshopp.emoticon('joincount')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖 » ${user.limit + gata} ${rpgshopp.emoticon('joincount')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 » ${user.limit} ${rpgshopp.emoticon('joincount')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤 :  » ${tiempoPremium} hora(s)*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text //tiempo total 
var tiempoDecretado = 24 * 1 //tiempo decretado 
const gata = 65
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('diamond')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.diamond < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('diamond')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒎𝒑𝒓𝒆 *${rpgshopp.emoticon('diamond')}* 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.diamond -= gata * text
    
var tiempo = 86400000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚 : » ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤 : »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖 » ${user.limit + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 » ${user.limit} ${rpgshopp.emoticon('diamond')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤 : » ${tiempoPremium} hora(s)*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `*𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} DÍA(S)*\n*✤ ${gata} ${rpgshop.emoticon('gold')}*\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙧𝙩𝙖 𝙣𝙪́𝙢𝙚𝙧𝙤𝙨\n\n*𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} 1*`, fkontak, m)
if (user.gold < gata) return conn.reply(m.chat, `${ag}𝑵𝒐 𝒕𝒊𝒆𝒏𝒆 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 *${rpgshop.emoticon('gold')}* 𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑪𝒐𝒎𝒑𝒓𝒆 ${rpgshopp.emoticon('gold')} 𝑬𝒏 𝒍𝒂 𝒕𝒊𝒆𝒏𝒅𝒂 𝒖𝒔𝒂𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  *${usedPrefix}buy* 𝑶 𝒑𝒖𝒆𝒅𝒆𝒔 𝒗𝒆𝒏𝒅𝒆𝒓 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒈𝒂𝒏𝒂𝒏𝒄𝒊𝒂𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}sell*`, fkontak, m)
user.gold -= gata * text
    
var tiempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙨𝙩𝙚𝙙 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢!!!*
*┃*
*┃✨ 𝙉𝙤𝙢𝙗𝙧𝙚 : » ${user.name}*
*┃💰 𝙋𝙖𝙜𝙤 : »  -${gata * text} ${rpgshopp.emoticon('gold')}*
*┃👝 𝙏𝙚𝙣𝙞́𝙖 » ${user.limit + gata} ${rpgshopp.emoticon('gold')}*
*┃🛄 𝙇𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 » ${user.limit} ${rpgshopp.emoticon('gold')}*
*┃🕐 𝙏𝙞𝙚𝙢𝙥𝙤 :  » ${tiempoPremium} día(s)*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *𝑨𝒉𝒐𝒓𝒂 𝒕𝒊𝒆𝒏𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒍𝒐𝒔 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒗𝒂𝒏 𝒕𝒆𝒏𝒆𝒓 𝒍𝒊𝒎𝒊𝒕𝒆.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
const sections = [{
title: comienzo + ' 🎟️ 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 🎟️ ' + fin,
rows: [
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵", rowId: `${usedPrefix}prem1 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗕𝗮𝘀𝗶𝗰𝗼 \n✪ 15 ${rpgshop.emoticon('limit')} ➟ 5 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶", rowId: `${usedPrefix}prem2 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗧𝗼𝗿𝗿𝗲 𝗱𝗲 𝗘𝗻𝗰𝗮𝗻𝘁𝗼 \n✪ 35 ${rpgshop.emoticon('kyubi')} ➟ 15 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷", rowId: `${usedPrefix}prem3 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗩𝗲𝗿𝗱𝘂𝘇𝗰𝗼 \n✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🗑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘  ⓸", rowId: `${usedPrefix}prem4 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗥𝗲𝘀𝗶𝗱𝘂𝗼𝘀 𝗘𝗖𝗢 \n✪ 50 ${rpgshop.emoticon('trash')} ➟ 1 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "♦️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹", rowId: `${usedPrefix}prem5 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗖𝗮𝘇𝗮 𝗕𝗿𝗶𝗹𝗹𝗮𝗻𝘁𝗲 \n✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🪙 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺", rowId: `${usedPrefix}prem6 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗔𝗺𝗼 𝗱𝗲𝗹 𝗖𝗿𝗶𝗽𝘁𝗼 \n✪ 70 ${rpgshop.emoticon('joincount')} ➟ 7 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💎+ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻", rowId: `${usedPrefix}prem7 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗚𝗲𝗺𝗮 𝗣𝗹𝘂𝘀 \n✪ 65 ${rpgshop.emoticon('diamond')} ➟ 24 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "👑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼", rowId: `${usedPrefix}prem8 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗧𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗢𝗿𝗼 \n✪ 80 ${rpgshop.emoticon('gold')} ➟ 3 d 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`}
]},{
title: comienzo + ' 🌟 𝙄𝙣𝙛𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 🌟 ' + fin,
rows: [
{title: "🎟️ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒓𝒆𝒎𝒊𝒖𝒎", rowId: usedPrefix + 'listprem'},
{title: "🏆 𝑻𝒐𝒑 𝒎𝒖𝒏𝒅𝒊𝒂𝒍", rowId: usedPrefix + 'top'},
{title: "🚀 𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝒑𝒓𝒆𝒎𝒊𝒖𝒎", rowId: usedPrefix + 'allmenu'}
	
]}]

const listMessage = {
  text: `🌟 𝑪𝒐𝒎𝒑𝒓𝒂 𝒖𝒏 𝒕𝒊𝒑𝒐 𝒅𝒆 𝒑𝒂𝒔𝒆 𝒑𝒂𝒓𝒂 𝒔𝒆𝒓 𝒖𝒏 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒓𝒆𝒎𝒊𝒖𝒎!!!`,
  footer: global.wm,
  title: `${htki} *🎟️ 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 🎟️* ${htka}`,
  buttonText: `🎟️ 𝑺𝒆𝒓 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 🌟`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
break	
		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
