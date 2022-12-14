import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
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

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `š»šššššĢš ššššššš ššššĢ šššššš šš šš šššš šš šššššš ššššššššš ššššššš *salir*\nš»šššššĢš ššššš šššššššš šš šššš ššššš šš ššššššš*${usedPrefix}delttt*`
if (!text) throw `šæššš šš ššš§ššš šŖš£ š£š¤š¢šš§š šš” š”š šØšš”š\nšššš¢š„š”š¤\n*${usedPrefix + command} Sala bot*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.sendButton(m.chat, `šØšššššš šš ššš ššššš šš šš šššš *${text}*\nšš ššššš ššššš!! š¼`, wm, null, [['šøšš šššš šš ššššš š¤', 'š»'] ], fkontak, m)

await conn.sendButton(m.chat, `${rg}ā­ļø *šŖššĢšššš š±šššš ššš š®ššš,3 šš šššš š¶ šššššš* ā\n\n*ĀæšŖšĢšš ššššš?*\š¹ššššššš šš š±šššš ššš šš šµšĢšššš, šš ššššššš šššš šššššššš šš ššššššššš šš šš ššš ššššššš ššššš (1,2,3,4,5,6,7,8,9)_`, wm, null, [['š½ š¶š² ššššššš', 'ok'] ], fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'ā',
O: 'ā­',
1: '1ļøā£',
2: '2ļøā£',
3: '3ļøā£',
4: '4ļøā£',
5: '5ļøā£',
6: '6ļøā£',
7: '7ļøā£',
8: '8ļøā£',
9: '9ļøā£',
}[v]})
let str = `š ššŖššš¤ š©šš©šš©š
š« ššŖšššš¤š§ššØ:
*āāāāāāāāā*
ā = @${room.game.playerX.split('@')[0]}
ā­ = @${room.game.playerO.split('@')[0]}
*āāāāāāāāā*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*āāāāāāāāā*
ššŖš§š£š¤ šš:
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendButton(m.chat, `š¼ š±šššš šššššš

š š¬ššššššš šš ššššššš ššššššš ššššš šššššššš  ššš šš ššššĢš šš ššššš š ššššš šššš ššššššš
*${usedPrefix + command} ${text}*

šŗš šššššš ššššššššš šš šššš ššš šš ššššššš *${usedPrefix}delttt*

`, wm, imgplay, [['š š¼ššššš šš šššššš', `${usedPrefix + command} ${text}`]], fkontak, m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
