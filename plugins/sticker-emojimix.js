import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) throw `𝘿𝙚𝙗𝙚𝙧 𝙙𝙚 𝙪𝙨𝙖𝙧 2 𝙚𝙢𝙤𝙟𝙞𝙨 𝙮 𝙚𝙣 𝙢𝙚𝙙𝙞𝙤 𝙪𝙨𝙖𝙧 𝙚𝙡 *+*\n𝙚𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command}* 😺+😆`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}}
handler.help = ['emojimix'].map(v => v + ' emot1|emot2>')
handler.tags = ['fun']
handler.command = /^(emojimix|emogimix|combinaremojis|crearemoji|emojismix|emogismix)$/i
export default handler
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
