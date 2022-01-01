const fs = require('fs')
const { exec } = require('child_process')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
    const content = JSON.stringify(m.message)
    const type = Object.keys(m.message)[0]
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isMedia = (type === 'audioMessage' || type === 'audioMessage')
    if ((isMedia && !m.message.audioMessage || isQuotedAudio) && args.length == 0) {
        const ger = isQuotedAudio ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        const owgi = await conn.downloadAndSaveMediaMessage(ger)
        let text = args.join` `
        let rano = getRandom('.mp3')
        exec(`ffmpeg -i ${owgi} ${rano}`, (err) => {
            fs.unlinkSync(owgi)
            if (err) return m.reply('emror..')
            nobg = fs.readFileSync(rano)
         	conn.sendMessage(m.chat, nobg, MessageType.audio, { mimetype: "audio/mp4", ptt: false, quoted: m})
            fs.unlinkSync(rano)
        })
    } else {
        m.reply('pastikan format PTT!!')
    }
}

handler.help = ['tom4a (caption|reply media)']
handler.tags = ['so']
handler.command = /^tom4a$/i
module.exports = handler


const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`}
	