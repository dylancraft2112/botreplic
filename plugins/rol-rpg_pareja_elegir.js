import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'futurarelacion') {    
let caption = `💗 𝑭𝒖𝒕𝒖𝒓𝒂 𝒑𝒂𝒓𝒆𝒋𝒂 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 𝑴𝒆𝒏𝒔𝒂𝒋𝒆 𝒅𝒆𝒍 𝒂𝒎𝒐𝒓\n*_${await ktnmbk.getRandom()}_*`
await conn.sendButton(m.chat, caption, `*_𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒕𝒆𝒏𝒆𝒓 𝒖𝒏𝒂 𝒑𝒂𝒋𝒆𝒓𝒂 𝒖𝒔𝒆𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}pareja etiquetando a tu futura Pareja._*\n\n` + wm, null, [
['🤭 𝙌𝙐𝙀 𝙎𝙀 𝘿𝙀𝘾𝙇𝘼𝙍𝙀𝙉', `amor`],
['🧐 𝙊𝙏𝙍𝘼 𝙋𝘼𝙍𝙀𝙅𝘼', `${usedPrefix}futurarelacion`],
['😆 𝙀𝙎 𝙐𝙉𝘼 𝙋𝘼𝙍𝙀𝙅𝘼 𝙍𝘼𝙉𝘿𝙊𝙈', `😂`]], m, { mentions: conn.parseMention(caption) })
}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.sendButton(m.chat, `𝙌𝙪𝙞𝙚𝙣?🤔  𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚𝙡 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚 𝙩𝙚 𝙨𝙚𝙖 𝙩𝙪 𝙥𝙖𝙧𝙚𝙟𝙖`, wm, null, [
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
	
if(!users) return await conn.sendButton(m.chat, `𝑵𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐́ 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒑𝒊𝒏𝒄𝒉𝒆́ 𝒑𝒆𝒏𝒅𝒆𝒋𝒐 🙄 𝒅𝒆𝒃𝒆 𝒅𝒆 𝒆𝒔𝒕𝒂 𝒆𝒍 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `𝑺𝒆 𝒎𝒂𝒎𝒐😂  𝒖𝒔𝒕𝒆𝒅 𝒎𝒊𝒔𝒎𝒐 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒔𝒆𝒓 𝒔𝒖 𝒑𝒂𝒓𝒆𝒋𝒂`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `𝒀𝒐 𝒏𝒐 𝒑𝒖𝒆𝒅𝒐 𝒔𝒆𝒓 𝒕𝒖 𝒑𝒂𝒓𝒆𝒋𝒂 😹`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)

if (typeof global.db.data.users[user] == "undefined") return await conn.sendButton(m.chat, `𝑳𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒐 𝒏𝒐 𝒆𝒔𝒕𝒂́ 𝒆𝒏 𝒎𝒊 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
await conn.sendButton(m.chat, `𝑾𝒕𝒇, 𝒆𝒓𝒆𝒔 𝒇𝒊𝒆𝒍 🙀😠 𝒑𝒆𝒓𝒐 𝒔𝒊 𝒚𝒂 𝒆𝒔𝒕𝒂𝒔 𝒆𝒏 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏 𝒄𝒐𝒏 *${await conn.getName(spac)}*\n\n𝑨𝒄𝒂𝒔𝒐 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒓 𝒍𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏? 🤔\n𝑫𝒆 𝒔𝒆𝒓 𝒂𝒔𝒊, 𝒆𝒔𝒄𝒓𝒊𝒃𝒂 *${usedPrefix}terminar @tag* 𝑷𝒂𝒓𝒂 𝒒𝒖𝒆́ 𝒑𝒖𝒆𝒅𝒂 𝒕𝒆𝒏𝒆𝒓 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏 𝒄𝒐𝒏 *${await conn.getName(user)}*`, wm, null, [
['❤️ 𝙈𝘼𝙉𝙏𝙀𝙉𝙀𝙍 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉', '.mipareja'],
['💔 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉', '/terminar']], m, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `𝑵𝒐 𝒑𝒖𝒆𝒅𝒆 𝒑𝒐𝒓𝒒𝒖𝒆 *${await conn.getName(user)}* 𝙔 ${await conn.getName(pacar)} 𝑬𝒔𝒕𝒂́𝒏 𝒆𝒏 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏\n𝑩𝒖𝒔𝒒𝒖𝒆 𝒂 𝒐𝒕𝒓𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂 𝒔𝒆𝒓 𝒕𝒖 𝒑𝒂𝒓𝒆𝒋𝒂`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\n𝑨𝒄𝒂𝒃𝒂𝒓 𝒅𝒆 𝒊𝒏𝒗𝒊𝒕𝒂𝒓 @${user.split('@')[0]}\n\n¡𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒆𝒔𝒑𝒆𝒓𝒆 𝒖𝒏𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂!`, m , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔, 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒆𝒔𝒕𝒂 𝒔𝒂𝒍𝒊𝒆𝒏𝒅𝒐 @${user.split('@')[0]}\n\n𝑸𝒖𝒆 𝒅𝒖𝒓𝒆 𝒑𝒂𝒓𝒂 𝒔𝒊𝒎𝒑𝒍𝒆 𝒚 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒇𝒆𝒍𝒊𝒄𝒆𝒔 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.sendButton(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*${await conn.getName(m.sender)}* 𝑺𝒆 𝒆𝒔𝒕𝒂 𝒅𝒆𝒄𝒍𝒂𝒓𝒂𝒏𝒅𝒐!!! 😳\n𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 *${await conn.getName(who)}* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒍𝒂 𝒅𝒆𝒄𝒍𝒂𝒓𝒂𝒄𝒊𝒐́𝒏 🙀`, `❤️ *_𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏 𝒆𝒔𝒄𝒓𝒊𝒃𝒂:_*\n*➠ ${usedPrefix}aceptar @${conn.getName(m.sender)}*\n\n💔 *_𝑫𝒆 𝒏𝒐 𝒒𝒖𝒆𝒓𝒆𝒓 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐́𝒏 𝒆𝒔𝒄𝒓𝒊𝒃𝒂:_*\n*➠ ${usedPrefix}rechazar @${conn.getName(m.sender)}*\n\n` + wm, null, [
['🥳 𝙑𝘼𝙈𝙊𝙎 𝘼𝘾𝙀𝙋𝙏𝘼', `Amor`]], m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}})
}}}

handler.command = /^(futurarelacion|pareja|elegirpareja|serpareja|sersupareja|couple|elegirpareja)$/i
handler.group = true

export default handler

let ktnmbk = [
"Hay momentos en los que no me gusta estar solo. Pero tampoco quiero que todos me acompañen, solo te quiero a ti",
"¡Me acabo de dar cuenta de que has sido rico todo este tiempo! Como lo que he estado buscando todo este tiempo. ¿Quieres ser mi novia?",
"Agradezco a mis ojos, porque estos ojos me llevaron a encontrarte",
"¿Puedo enviarte un CV o no? Porque quiero postularme para ser novia",
"No soy el más grande, pero estoy seguro que si puedo hacerte feliz con amor y cariño, ¿me quieres verdad?",
"Solo soy una persona común que tiene muchos defectos y puede que no merezca tu amor, pero si estás dispuesto a aceptarme como amante, prometo hacer lo que sea mejor para ti. ¿Aceptarás mi amor?",
"Quiero decir algo. Me gusta desde hace mucho tiempo, pero no me atrevo a decirlo. Entonces, decidí solo WA. Quiero que seas mi novia",
"Quiero decir algo que no puedo contener más. Te amo, ¿serás mi novia?",
"Quiero ser una persona que pueda hacerte reír y sonreír todos los días. ¿Serás mi novia?",
"Quiero tener una charla seria contigo. Todo este tiempo he albergado sentimientos por ti y siempre he estado pendiente de ti. Si no te importa, ¿quieres ser mi novia?",
"Te miro y veo el resto de mi vida ante mis ojos.",
"No tengo todo, pero al menos tengo suficiente amor para ti",
"Me gustaste desde el principio. Eres tan simple, pero la sencillez es muy especial a mis ojos. Será perfecto si eres especial en mi corazón",
"Realmente estoy enamorado de ti. ¿Serás mía?",
"No te dije que no porque no tengo cupo ni crédito, pero estoy disfrutando de este anhelo por ti. Tal vez te sorprendas al escuchar eso. Siempre me has gustado",
"No quiero que seas el sol de mi vida, porque aunque hace calor estás muy lejos. Tampoco quiero que seas aire, porque aunque te necesito y estás muy cerca, pero todos pueden respirarte también. Solo quiero que seas sangre que pueda estar muy cerca de mí",
"No sé hasta cuándo terminará mi edad. Todo lo que sé es que mi amor es para siempre solo para ti",
"Realmente disfruté el tiempo que pasamos juntos hoy. También nos conocemos desde hace mucho tiempo. En este día soleado, quiero expresarte que te amo",
"Siempre imaginé lo hermoso que sería si algún día pudiéramos construir un arca de una casa y vivir juntos hasta el final de la vida. Sin embargo, todo eso no habría sucedido si los dos no hubiéramos estado juntos hasta ahora. ¿Serás mi amante?",
"Me preparo mentalmente para hoy. Tienes que ser mi novia para tratar este amor incontrolable",
"Sé que no tenemos la misma edad, pero ¿puedo vivir contigo por el resto de mi vida?",
"Sé que hemos sido amigos durante mucho tiempo. ¿Pero no está mal si me gustas? Cualquiera que sea tu respuesta, acepto. Lo más importante es ser honesto desde el fondo de mi corazón",
"No puedo empezar esto primero, pero te daré un código que me gustas. Si entiendes este código, estaremos juntos",
"Soy demasiado estúpido o eres demasiado egoísta para hacer que me enamore de ti",
"Cualquier cosa sobre ti, nunca he encontrado aburrimiento en ello. Porque estar a tu lado, el regalo más hermoso para mí. Sé mi amante, hey tú",
"Con el permiso de Alá y la bendición de mamá papá, ¿quieres ser mi novio o no?",
"¿Y si nos convertimos en una banda de ladrones? Yo robé tu corazón y tú me robaste el mío",
"Feliz es que tú y yo nos hemos convertido en nosotros",
"Mañana, si no funciona, puedo registrarme para ser tu novia. Déjame tener trabajo para pensar siempre en ti",
"Déjame hacerte feliz para siempre. Solo tienes que hacer una cosa: Enamórate de mí",
"Que toda mi alegría sea tuya, toda tu tristeza sea mía. ¡Que el mundo entero sea tuyo, solo tú seas mía!",
"Que el pasado sea mi pasado, pero por el presente, ¿serás tú mi futuro?",
"¿Puedes darme una dirección a tu corazón? Parece que me he perdido en tus ojos",
"No es el trono o el tesoro lo que busco, sino el retorno de mi amor lo que espero de ti. La respuesta es sí",
"La forma en que puedes hacerme reír incluso en los días más oscuros me hace sentir más ligero que cualquier otra cosa. Quiero que seas mía",
"Mi amor por ti es incuestionable porque este amor es sincero desde el fondo de mi corazón",
"Mi amor por ti es como un número del 5 al 10. No hay segundo. Quiero que seas la única mujer en mi corazón",
"Qué chico se atreve a lastimarte. Aquí te trataré, mientras quieras ser mi novia",
"Oye, ¿qué estás haciendo? Sal de la casa y mira la luna esta noche. La luz es hermosa y encantadora, pero sería aún más hermosa si yo estuviera a tu lado. ¿Qué tal si estamos juntos?"
]
