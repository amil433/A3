const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://whatsapp.com/channel/0029VaZoIQHHLHQOTlVkNd03'
global.ig = 'https://instagram.com/yudhaperdana._'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = 'dhashopee79@gmail.com'
global.region = 'japan'
global.copyright = 'Copyright©2024 DHA-BOT(OTP)'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Yudha Perdana'
global.domain = 'https://store-p.loyncream.my.id'
global.apikey2 = 'ptlc_mgFkepZCiGRhdylqKQIvGdwLlgPPMneb3Jnh6h2fDKJ' // Isi Apikey Pltc Lu
global.capikey2 = 'ptla_6za65qcwF796VPNZ7TbxwY9xz9gghQmPdhgR4pfnwK2'
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apikeynokos = 'c90fa604-1364-59e4-8415-d41d8bdc80f8-20240213-405' // buat nokos aing

global.owner = ['6282287486762']

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.botname = 'DHA-BOT'
global.packname = 'DHA-BOT'
global.author = `YUDDZ`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'nsbot-session'
global.sp = '⭔'
global.anticall = true

global.mess = {
    success: 'Selesai 🫡',
    admin: '🍞 Fitur Khusus Admin Group !',
    botAdmin: '🍞 Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '🎁 Fitur Khusus Owner !',
    group: '🍞 Fitur Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '🍞 Fitur Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🍞 Fitur Khusus Pengguna Nomor Bot !',
    wait: '🍞 *Dalam Proses*',
    endLimit: '🍞 Limit kamu Habis, Limit Akan Direset Setiap Jam 12 !\n\n🍞 *Premium Cuma 2K Permanen* 😋',
    error: '🍞 *Kayaknya Ada Error Nih*',
    prem: '🍞 Fitur Khusus Premium!\n\n🍞 Beli Premium Cuma 5K Permanen',
}

global.limitawal = {
    premium: 9999999999 ,
    free: 50
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})