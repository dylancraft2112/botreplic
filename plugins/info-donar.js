let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
/*
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, ``, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  */
let str = `
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇💖 𝙃𝙤𝙡𝙖!!*
*┇ 𝑻𝒆 𝒂𝒈𝒓𝒂𝒅𝒆𝒛𝒄𝒐, 𝒑𝒐𝒓 𝒂𝒚𝒖𝒅𝒂𝒓𝒎𝒆 𝒚 𝒑𝒐𝒓 𝒖𝒔𝒂𝒓 𝒎𝒊 𝒃𝒐𝒕*
*┇ 𝒈𝒓𝒂𝒄𝒊𝒂𝒔,  𝒚𝒐 𝒏𝒐 𝒑𝒊𝒅𝒐 𝒅𝒊𝒏𝒆𝒓𝒐,*
*┇ 𝒏𝒐 𝒕𝒆𝒏𝒈𝒐 𝒑𝒂𝒚𝒑𝒂𝒍. 𝑺𝒐𝒎𝒐𝒔 𝒉𝒖𝒎𝒊𝒍𝒅𝒆,*
*┇ 𝑷𝒆𝒓𝒐 𝒔𝒊 𝒒𝒖𝒊𝒆𝒓𝒆 𝒑𝒖𝒆𝒅𝒆 𝒂𝒑𝒐𝒚𝒂 𝒂𝒍 𝒃𝒐𝒕,*
*┇ 𝒔𝒖𝒔𝒄𝒓𝒊𝒓𝒔𝒆 𝒂𝒍 𝒄𝒂𝒏𝒂𝒍 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒅𝒆𝒍 𝒃𝒐𝒕.*
*┇ 𝑷𝒂𝒓𝒂 𝒒𝒖𝒆́ 𝒄𝒂𝒅𝒂 𝒗𝒆𝒛 𝒔𝒐𝒎𝒐𝒔 𝒎𝒂́𝒔 𝒆𝒍 𝒍𝒂 𝒇𝒂𝒎𝒊𝒍𝒊𝒂 𝒍𝒐𝒍𝒊𝒃𝒐𝒕,*
*┇ 𝒀𝒂 𝒄𝒐𝒏 𝒆𝒔𝒐 𝒔𝒐𝒚 𝒇𝒆𝒍𝒊𝒛 😄*
*┇ 𝒀 𝒖𝒏𝒊𝒓𝒕𝒆 𝒂𝒍 𝒏𝒖𝒆𝒔𝒕𝒓𝒐𝒔 𝒈𝒓𝒖𝒑𝒐𝒔*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*   *𝒂𝒔𝒊𝒔𝒕𝒆𝒏𝒄𝒊𝒂 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌*
*┃*
*┃* *https://facebook.com/groups/721802642266362/*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *𝑺𝒖𝒔𝒄𝒓𝒊𝒃𝒆𝒕𝒆* 🔕
*┃*  *https://youtube.com/channel/UCPSrzHooOjQMRmUK_2RLcSw*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *𝑻𝒂𝒎𝒃𝒊𝒆́𝒏 𝒂𝒈𝒓𝒂𝒄𝒊𝒎𝒊𝒆𝒏𝒕𝒐 𝒂𝒍 𝒕𝒉𝒆𝑴𝒚𝒕𝒉𝒊𝒄-𝒃𝒐𝒕-𝑴𝑫, 𝑮𝒓𝒂𝒄𝒊𝒂𝒔!*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://www.paypal.me/TheShadowBrokers133', '🎁 𝘿𝙤𝙣𝙖𝙧', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
