let PhoneNumber = require('awesome-phonenumber')
const { MessageType } = require('@adiwajshing/baileys')
const imageToBase64 = require('image-to-base64')
let handler = async (m, { conn }) => {
  let pp = './src/depresi.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, money } = global.DATABASE.data.users[m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender]
    let username = conn.getName(who)
    let str = `
XP kamu : *${Number(exp).toLocaleString().replace(/,/g, '.')}*\nMONEY kamu : *Rp${Number(money).toLocaleString().replace(/,/g, '.')},-* \nLIMIT kamu : *${Number(limit).toLocaleString().replace(/,/g, '.')}*\n\nHalo ${username}, di atas itu adalah isi Dompetmu, Ayo tingkatkan Uang Kamu dengan cara bermain game.

`.trim()
    let mentionedJid = [who]
    conn.sendMessage(m.chat, str, MessageType.text, {
                   sendEphemeral: true,
                    thumbnail: await imageToBase64(pp),
                    quoted: m        
                 }),  { contextInfo: { mentionedJid
                    }
                   }}
}
handler.help = ['atm']
handler.tags = ['xp','rpg']
handler.command = /^atm$/i
module.exports = handler

function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}