let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p }) => {
 let textnya = 
conn.send2ButtonImg(m.chat, 'Jualan bang, beli dong', `src/logo.jpg`, `© 2021 inc.bot`, 'Mau Dong', '.fktdktfl', 'Gak dulu deh', '.gakmau', { quoted: m })
}
handler.help = ['premium']
handler.command = /^tama$/i

module.exports = handler