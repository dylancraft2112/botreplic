let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
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

let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
  
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙫𝙤𝙩𝙖𝙘𝙞𝙤́𝙣 𝙚𝙡 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤`, `*Si quieres crear una nueva votación usa el comando ${usedPrefix}crearvoto*`, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], fkontak, m)}
  
let isVote = conn.vote[id][1].concat(conn.vote[id][2])
const wasVote = isVote.includes(m.sender)

if (wasVote) { 
return await conn.sendButton(m.chat, `🥳 𝒀𝒂 𝒉𝒂𝒔 𝒗𝒐𝒕𝒂𝒅𝒐!!`, `*Su voto no se cambia una vez que hayas votado.*\n\n${wm}`, null, [
['📋 𝙑𝙀𝙍 𝙑𝙊𝙏𝙊𝙎', '/vervotos'],
['🔰 𝙄𝙉𝙑𝙄𝙏𝘼𝙍 𝘼 𝙑𝙊𝙏𝘼𝙍', `${usedPrefix}pedirayuda ✴️ @${conn.getName(m.sender)} *ESTA INVITANDO A QUE SE UNAN A LA VOTACIÓN!!*\n*USEN EL COMANDO ${usedPrefix}vervotos PARA VOTAR!!*`]
], fkontak, m)}
  
if (/up|si/i.test(command)) {
conn.vote[id][1].push(m.sender)
  
} else if (/de|no/i.test(command)) {
conn.vote[id][2].push(m.sender)}
    
let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} 𝙇𝙞𝙨𝙩𝙖𝙨 𝙙𝙚𝙡 𝙫𝙤𝙩𝙤𝙨 ${htjava}*

*𝙐𝙨𝙪𝙖𝙧𝙞𝙤(A)*
🐈 @${conn.getName(m.sender)}

*𝙈𝙤𝙩𝙞𝙫𝙤𝙨 ➫* ${reason}

*${htjava} 𝙑𝙤𝙩𝙤𝙧 𝙖𝙡 𝙛𝙖𝙫𝙤𝙧   ${htjava}*
*Total: ${upvote.length}*

${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} 𝙑𝙤𝙩𝙤𝙧 𝙚𝙡 𝙘𝙤𝙣𝙩𝙧𝙖𝙧 ${htjava}*
*Total: ${devote.length}*

${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['✅ 𝙑𝙊𝙏𝘼𝙍 𝘼 𝙁𝘼𝙑𝙊𝙍', `${usedPrefix}upvote`],
['❌ 𝙑𝙊𝙏𝘼𝙍 𝙀𝙉 𝘾𝙊𝙉𝙏𝙍𝘼', `${usedPrefix}devote`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|si|de|no)vote|voto|votar$/i  
handler.group = true
handler.botAdmin = true

export default handler
