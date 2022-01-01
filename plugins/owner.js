let fs = require ('fs')
let handler = async function (m) {
  const freply = {
  key: {
  participant: '0@s.whatsapp.net',
  remoteJid: 'status@broadcast'
 },
 message: {
  imageMessage: {
   caption: `${pickRandom(['*Wis*','aku sayang kamu','*xixi*','*cans cuk*','*kawaii*','*hemhe*'])}`,
      jpegThumbnail: fs.readFileSync(`./cewe/${pickRandom(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'])}.jpg`)
  }
 }
}
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
        await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: freply, sendEphemeral: true, contextInfo: { forwardingScore: 135, isForwarded: true }})
}
handler.command = /^(qw)$/i

module.exports = handler
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}