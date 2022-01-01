let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    let setting = global.DATABASE.data.settings

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.reply(m.chat, `┌ *「 Invite Grup 」*
│ ✅ Join 1 grup
│ 
│ 7 Hari / Rp 5000
│ 30 Hari / Rp 10000
│ Permanen / Rp 20000
└────
Hubungi @${global.owner[0]}
`.trim(), m, { contextIfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // backup DATABASE
/*    if (setting.backup) {
        if (new Date() * 1 - setting.backupDATABASE > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.DATABASE.save()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', false, false, { mimetype: 'application/json' })
            setting.backupDATABASE = new Date() * 1
        }
    }*/

}

module.exports = handler