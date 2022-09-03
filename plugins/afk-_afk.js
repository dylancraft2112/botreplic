export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[❗𝙄𝙣𝙛𝙤❗] 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺)${user.afkReason ? ' 𝑫𝒆𝒔𝒑𝒖𝒆́𝒔 𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒊𝒏𝒂𝒄𝒕𝒊𝒗𝒐(𝑨𝑭𝑲) 𝒑𝒐𝒓 𝒆𝒍 𝒎𝒐𝒕𝒊𝒗𝒐: ' + user.afkReason : ''}*
  
  *—◉ 𝑻𝒊𝒆𝒎𝒑𝒐 𝒅𝒆 𝒊𝒏𝒂𝒄𝒕𝒊𝒗𝒊𝒅𝒂𝒅 (𝑨𝑭𝑲): ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] 𝑵𝒐 𝒍𝒐 𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒆𝒔 [❗]*

*—◉ 𝒆𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝚀𝚄𝙴 𝚄𝚂𝚃𝙴𝙳 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙾 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺)*      
*—◉ ${reason ? '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ' + reason : '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): _𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝙿𝙴𝙲𝙸𝙵𝙸𝙲𝙾 𝚄𝙽 𝙼𝙾𝚃𝙸𝚅𝙾_'}*
*—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝚃𝚁𝙰𝙽𝚂𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
