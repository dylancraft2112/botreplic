let media = './media/menus/Menuvid2.mp4'
let vn = './media/cuenta.mp3'
let handler = async (m, { conn, command }) => {
let str = `
🔰 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖𝙡 𝙡𝙖𝙨 𝙘𝙪𝙚𝙣𝙩𝙖𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝙉𝙪́𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘
🔰 *wa.me/972529277518*
🔰 *wa.me/12267784150*
🔰 *wa.me/573183650526*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙞𝙩𝙝𝙪𝙗
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝙗𝙤𝙩
1) *https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*

2) *https://chat.whatsapp.com/IJmvzc45SVg1lbErQqysc8*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 𝙙𝙚𝙡 𝙗𝙤𝙩 (𝙖𝙦𝙪𝙞́ 𝙨𝙚 𝙙𝙖𝙧 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤́𝙣 𝙮 𝙣𝙤𝙫𝙚𝙙𝙖𝙙𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩)
*https://chat.whatsapp.com/Byyrc8RJnUkJw6vvUgsbDF*
 
*https://chat.whatsapp.com/L6DSJ5ZfzgL2xgsy4rLAQ6*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤 𝙖𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠
*https://facebook.com/groups/721802642266362/*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤 𝙩𝙚𝙡𝙚𝙜𝙧𝙖𝙢
*https://t.me/+EcdN9fktnQQwY2Ex*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝘾𝙖𝙣𝙖𝙡 𝙙𝙚𝙡 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝙗𝙤𝙩
*https://youtube.com/channel/UCPSrzHooOjQMRmUK_2RLcSw*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙣 𝙙𝙪𝙙𝙖𝙨, 𝙨𝙪𝙜𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨, 𝙤 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖𝙨 𝗲𝘀𝗰𝗿𝗶𝗯𝗶 𝗽𝗼𝗿 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼
`.trim()
conn.sendFile(m.chat, vn, 'cuenta.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🙂', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentaslb|cuentalb|accounts|loliiccounts|account|ilolii|cuentasdeloli|cuentasdelolibot|cuentalolibot|cuentaslolibot$/i
handler.exp = 35
export default handler
