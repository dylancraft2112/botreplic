let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro π has minado','πβ¨ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) βοΈ Obtienes','Felicidades!! Ahora tienes','βοΈβοΈβοΈ Obtienes'])}`
let pp = 'https://us.123rf.com/450wm/emojiimage/emojiimage1802/emojiimage180200332/95468325-mont%C3%B3n-de-piedras-preciosas-diamantes-azules-brillantes-concepto-de-joyas-caras-s%C3%ADmbolo-de-riqueza-d.jpg?ver=6'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += d * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `*π Vuelva en ${msToTime(time - new Date())} para continuar minando βοΈ*`  

conn.sendHydrated(m.chat, `*${minar} ${d} πΏπππ’ππ£π©ππ¨*`, wm, pp, md, 'π»ππ π³ππππππ-π΄π«', null, null, [
['πππ£ππ§ πππ β‘', `.minar`],
['πππ£ππ§ ππΌπΉπΆπ°πΌπΆπ»π π', `.minar2`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `.menu`]
], m,)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  
  

//m.reply(`*${minar} *${hasil} ππ*`)

}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
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
