let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro π has minado','πβ¨ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) βοΈ Obtienes','Felicidades!! Ahora tienes','βοΈβοΈβοΈ Obtienes'])}`
let pp = 'https://media.tvalacarta.info/programas/0/clantve/44-gatos/aida-la-gata-robot.jpg'

let gata = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += gata * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastcoins + 600000
if (new Date - global.db.data.users[m.sender].lastcoins < 600000) throw `*π Vuelva en ${msToTime(time - new Date())} para continuar minando βοΈ*`  

conn.sendHydrated(m.chat, `*${minar} ${gata} ππΌπΉπΆπ°πΌπΆπ»π*`, wm, pp, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['πππ£ππ§ πππ β‘', `.minar`],
['πππ£ππ§ πΏπππ’ππ£π©ππ¨ π', `.minar3`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `.menu`]
], m,)
global.db.data.users[m.sender].lastcoins = new Date * 1  
  

//m.reply(`*${minar} *${hasil} ππ*`)

}
handler.help = ['minar2']
handler.tags = ['loli']
handler.command = ['minar2', 'miming2', 'mine2', 'minargatacoins', 'minarcoins', 'minargata'] 
handler.fail = null
handler.exp = 0
handler.register = true
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
