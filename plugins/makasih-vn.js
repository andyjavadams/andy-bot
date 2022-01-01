//tadinya iseng, eh malah work
let handler  = async (m, { conn, usedPrefix: _p }) => {
const { MessageType,Presence } = require('@adiwajshing/baileys')
 
conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/sad.opus', 'tts.opus', null, m, true)
}
handler.customPrefix = /^(sedih|Sedih|semdih|Semdih|😭|😢|😔|😓)/i
handler.command = new RegExp
module.exports = handler