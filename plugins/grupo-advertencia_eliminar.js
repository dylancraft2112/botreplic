let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
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
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `šš ššŖš£ššš¤Ģš£ *#on antitoxicos* ššØš©šĢ šæššØššš©šš«ššš, šššš šš ššØš©š ššš©šš«š ššššš ššŖš£ššš¤Ģš£, š„šš§š š¦šŖš ššŖš£ššš¤š£š ššØš©š šš¤š¢šš£šš¤`, fkontak, m) 
let who
let img = 'https://telegra.ph/file/635b82df8d7abb4792eab.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}š¬šššššššš šš ššššššš ššš šš šš ššš šššššššš šš ššššššššššš ā ļø\n\nššššššš\n*${usedPrefix + command} @tag*`
user.warn -= 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `ā»ļø *@${who.split`@`[0]}*`} šŗš šš ššššš šš ššššššššššš šš šššš ššššš!!`, `*ššššššššššš:*\nā ļø *Antes: ${user.warn + 1}/4*\nā ļø *Ahora: ${user.warn}/4*\n\n${wm}`, img, [
[`š š®šššššš`, '.ok'],
['āļø š“ššš', '/menu']], false, { mentions: [who] }) //[m.sender]
	
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
//handler.command = /^(delwarn|deladvertir|deladvertencia|delwarning|)$/i
handler.command = /^(del|delete|eliminar|\-)advertir|advertencia|warn(ing)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
