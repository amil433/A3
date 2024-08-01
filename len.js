const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment-timezone");

global.grup = "https://whatsapp.com/channel/0029VaZoIQHHLHQOTlVkNd03";
global.ig = "https://instagram.com/yudhaperdana._";
global.thumb = fs.readFileSync("./data/image/thumb.jpg");
global.email = "dhashopee79@gmail.com";
global.region = "japan";
global.copyright = "Copyright©2024 DHA-BOT(OTP)";
//—————「 Set Nama Own & Bot 」—————//
global.ownername = "Yudha Perdana";
global.domain = "https://store-p.loyncream.my.id";
global.apikey2 = "ptlc_mgFkepZCiGRhdylqKQIvGdwLlgPPMneb3Jnh6h2fDKJ"; // Isi Apikey Pltc Lu
global.capikey2 = "ptla_6za65qcwF796VPNZ7TbxwY9xz9gghQmPdhgR4pfnwK2";
global.eggsnya = "15"; // id eggs yang dipakai
global.location = "1"; // id location
global.apikeynokos = "c90fa604-1364-59e4-8415-d41d8bdc80f8-20240213-405"; // buat nokos aing

global.owner = ["6282287486762"];

global.keyopenai = "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";
global.ibeng = "Yl4h5x9wiA";

global.botname = "DHA-BOT";
global.packname = "DHA-BOT";
global.author = `YUDDZ`;
global.prefa = ["", "!", ".", ",", "🐤", "🗿"];
global.sessionName = "nsbot-session";
global.sp = "⭔";
global.anticall = true;

global.mess = {
    success: "Selesai 🫡",
    admin: "🍞 Fitur Khusus Admin Group !",
    botAdmin:
        "🍞 Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
    owner: "🎁 Fitur Khusus Owner !",
    group: "🍞 Fitur Ini Hanya Bisa Digunakan Di Group Chat !",
    private: "🍞 Fitur Ini Hanya Bisa Digunakan Di Private Chat !",
    bot: "🍞 Fitur Khusus Pengguna Nomor Bot !",
    wait: "🍞 *Dalam Proses*",
    endLimit:
        "🍞 Limit kamu Habis, Limit Akan Direset Setiap Jam 12 !\n\n🍞 *Premium Cuma 2K Permanen* 😋",
    error: "🍞 *Kayaknya Ada Error Nih*",
    prem: "🍞 Fitur Khusus Premium!\n\n🍞 Beli Premium Cuma 5K Permanen",
    ff: `
*50    DIAMONDS    Rp7.000*
*70    DIAMONDS    Rp10.000*
*80    DIAMONDS    Rp11.000*

*100    DIAMONDS    Rp14.000*
*120    DIAMONDS    Rp16.500*
*140    DIAMONDS    Rp19.000*
*145    DIAMONDS    Rp20.000*
*170    DIAMONDS    Rp25.000*
*210    DIAMONDS    Rp30.000*
*300    DIAMONDS    Rp42.000*
*360    DIAMONDS    Rp50.000*
*425    DIAMONDS    Rp57.000*
*495    DIAMONDS    Rp66.000*
*520    DIAMONDS    Rp70.000*
*600    DIAMONDS    Rp80.000*
*655    DIAMONDS    Rp90.000*
*720    DIAMONDS    Rp94.000*

*Level Up            Rp16.000*
*Boyaah Pass    Rp45.000*
*M.Mingguan    Rp29.000*
*M.Bulanan        Rp85.000*
`,
    ml: `
*15    DIAMONDS    Rp5.000*
*23    DIAMONDS    Rp10.000*
*54    DIAMONDS    Rp15.000*
*74    DIAMONDS    Rp20.000*
*92    DIAMONDS    Rp25.000*

*110    DIAMONDS    Rp30.000*
*128    DIAMONDS    Rp35.000*
*148    DIAMONDS    Rp40.000*
*170    DIAMONDS    Rp45.000*
*185    DIAMONDS    Rp50.000*
*210    DIAMONDS    Rp55.000*
*223    DIAMONDS    Rp60.000*
*241    DIAMONDS    Rp65.000*
*261    DIAMONDS    Rp70.000*
*284    DIAMONDS    Rp75.000*
*305    DIAMONDS    Rp80.000*
*323    DIAMONDS    Rp85.000*
*343    DIAMONDS    Rp90.000*
*370    DIAMONDS    Rp95.000*

*ML Cupon Pass        Rp73.000*
*ML Weekly Pass        Rp27.000*
*ML Twilight Pass        Rp145.000*
    `,
    pubg: `

        `,
};

global.limitawal = {
    premium: 9999999999,
    free: 50,
};

global.multiplier = 1000;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
