let handler = m => m
export async function all(m) {
let user = global.db.data.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
await m.reply(`${ag}*@${m.sender.split`@`[0]} ยก๐๐ ๐๐๐๐๐คฬ ๐๐ก ๐ฉ๐๐๐ข๐ฅ๐ค ๐ฅ๐ง๐๐ข๐๐ช๐ข!*\n๐๐ ๐ฆ๐ช๐๐๐ง๐๐จ ๐ค๐๐ฉ๐๐ฃ๐๐ง ๐ช๐ฃ ๐ฃ๐ช๐๐ซ๐ค ๐ฅ๐๐จ๐ ๐ฅ๐ง๐๐ข๐๐ช๐ข ๐ช๐จ๐ ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค\n*#pase premium*`, false, { mentions: [m.sender] })
user.premiumTime = 0
user.premium = false
}}}
